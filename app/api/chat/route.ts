import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { getMetadados, saveChatHistory } from "@/lib/supabase"
import { headers } from "next/headers"

// Permitir respostas de streaming por até 30 segundos
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, sistema, token } = await req.json()
    const headersList = headers()
    const userAgent = headersList.get("user-agent") || undefined
    const forwardedFor = headersList.get("x-forwarded-for")
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0] : undefined

    // Buscar metadados do sistema específico
    const metadados = await getMetadados(sistema)

    if (metadados.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Nenhum metadado encontrado para este sistema 😔",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      )
    }

    // Agrupar metadados por tabela para melhor organização
    const tabelasMap = new Map<string, any[]>()
    metadados.forEach((m) => {
      const tabela = m.tabela || "Sem tabela"
      if (!tabelasMap.has(tabela)) {
        tabelasMap.set(tabela, [])
      }
      tabelasMap.get(tabela)?.push(m)
    })

    // Formatar metadados de forma mais estruturada
    let metadadosFormatados = `SISTEMA: ${sistema.toUpperCase()} 🏢\n\n`

    tabelasMap.forEach((campos, tabela) => {
      metadadosFormatados += `📋 TABELA: ${tabela}\n`
      metadadosFormatados += `🗄️ Banco: ${campos[0].banco}\n`
      metadadosFormatados += `📊 Campos:\n`
      campos.forEach((campo) => {
        if (campo.campo) {
          metadadosFormatados += `  • ${campo.campo} (${campo.datatype || "tipo não especificado"})\n`
        }
      })
      metadadosFormatados += `\n`
    })

    // Criar o prompt do sistema com os metadados
    const systemPrompt = `
Você é um assistente especializado e amigável em metadados do sistema "${sistema}". 
Você ajuda usuários a entender a estrutura do banco de dados e gerar consultas SQL de forma didática e humana.

METADADOS DISPONÍVEIS:
${metadadosFormatados}

PERSONALIDADE:
- Seja amigável e use emojis apropriados
- Explique de forma clara e didática
- Demonstre entusiasmo ao ajudar
- Use linguagem acessível, evitando jargões técnicos desnecessários

INSTRUÇÕES:
1. 📋 Quando perguntarem sobre tabelas, liste todas as tabelas disponíveis do sistema com descrições amigáveis
2. 🔍 Quando perguntarem sobre campos de uma tabela específica, liste todos os campos dessa tabela
3. ⚡ Quando pedirem para gerar SQL, crie consultas baseadas nos metadados disponíveis
4. 🎯 Sempre formate código SQL usando blocos de código com \`\`\`sql
5. 💡 Seja direto e preciso nas respostas, mas mantenha um tom amigável
6. ❓ Se não souber algo específico, diga que não tem essa informação nos metadados

EXEMPLO de resposta para "quais tabelas você tem":
"Ótima pergunta! 😊 No sistema ${sistema}, tenho acesso às seguintes tabelas:

📋 **Tabelas disponíveis:**
• tb_pessoa - Dados dos usuários/pessoas
• tb_beneficiario - Informações dos beneficiários  
• tb_consulta - Registros de consultas

Posso ajudar você com qualquer uma dessas tabelas! Que tipo de consulta gostaria de fazer? 🤔"
`

    // Obter a última mensagem do usuário
    const lastUserMessage = messages[messages.length - 1]?.content || ""

    // Processar a resposta com o AI SDK
    const result = await streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages,
      temperature: 0.3,
      onFinish: async (result) => {
        // Salvar no histórico após a resposta ser gerada
        try {
          await saveChatHistory(sistema, lastUserMessage, result.text, token, userAgent, ipAddress)
        } catch (error) {
          console.error("Erro ao salvar histórico:", error)
        }
      },
    })

    // Retornar a resposta como stream
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Erro na API de chat:", error)
    return new Response(
      JSON.stringify({
        error: "Erro ao processar a solicitação 😔",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
