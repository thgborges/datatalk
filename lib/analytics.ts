import { supabaseServer } from "@/lib/supabase"

export type AnalyticsData = {
  totalInteracoes: number
  interacoesPorSistema: { sistema: string; count: number }[]
  perguntasFrequentes: { pergunta: string; count: number }[]
  palavrasFrequentes: { palavra: string; count: number }[]
  interacoesPorDia: { data: string; count: number }[]
  tempoMedioResposta: number
  usuariosUnicos: number
}

export async function getAnalyticsData(): Promise<AnalyticsData> {
  try {
    // Total de interações
    const { count: totalInteracoes } = await supabaseServer
      .from("chat_history")
      .select("*", { count: "exact", head: true })

    // Interações por sistema
    const { data: interacoesPorSistemaData } = await supabaseServer
      .from("chat_history")
      .select("sistema")
      .not("sistema", "is", null)

    const sistemaCount =
      interacoesPorSistemaData?.reduce(
        (acc, item) => {
          acc[item.sistema] = (acc[item.sistema] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      ) || {}

    const interacoesPorSistema = Object.entries(sistemaCount)
      .map(([sistema, count]) => ({ sistema, count }))
      .sort((a, b) => b.count - a.count)

    // Perguntas mais frequentes
    const { data: perguntasData } = await supabaseServer
      .from("chat_history")
      .select("pergunta")
      .not("pergunta", "is", null)

    const perguntaCount =
      perguntasData?.reduce(
        (acc, item) => {
          const pergunta = item.pergunta.toLowerCase().trim()
          if (pergunta.length > 5) {
            // Filtrar perguntas muito curtas
            acc[pergunta] = (acc[pergunta] || 0) + 1
          }
          return acc
        },
        {} as Record<string, number>,
      ) || {}

    const perguntasFrequentes = Object.entries(perguntaCount)
      .map(([pergunta, count]) => ({ pergunta, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)

    // Palavras mais frequentes
    const todasPalavras =
      perguntasData?.flatMap((item) =>
        item.pergunta
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .split(/\s+/)
          .filter(
            (palavra) =>
              palavra.length > 3 &&
              ![
                "quais",
                "como",
                "onde",
                "quando",
                "para",
                "você",
                "voce",
                "tem",
                "uma",
                "que",
                "com",
                "por",
                "são",
                "sao",
                "esta",
                "está",
                "fazer",
                "gerar",
                "listar",
              ].includes(palavra),
          ),
      ) || []

    const palavraCount = todasPalavras.reduce(
      (acc, palavra) => {
        acc[palavra] = (acc[palavra] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const palavrasFrequentes = Object.entries(palavraCount)
      .map(([palavra, count]) => ({ palavra, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15)

    // Interações por dia (últimos 30 dias)
    const { data: interacoesDiarias } = await supabaseServer
      .from("chat_history")
      .select("created_at")
      .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

    const diasCount =
      interacoesDiarias?.reduce(
        (acc, item) => {
          const data = new Date(item.created_at).toISOString().split("T")[0]
          acc[data] = (acc[data] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      ) || {}

    const interacoesPorDia = Object.entries(diasCount)
      .map(([data, count]) => ({ data, count }))
      .sort((a, b) => a.data.localeCompare(b.data))

    // Usuários únicos
    const { data: tokensUnicos } = await supabaseServer.from("chat_history").select("token").not("token", "is", null)

    const usuariosUnicos = new Set(tokensUnicos?.map((item) => item.token)).size

    // Tempo médio de resposta (simulado - em uma implementação real, você salvaria timestamps)
    const tempoMedioResposta = 2.3 // segundos (valor simulado)

    return {
      totalInteracoes: totalInteracoes || 0,
      interacoesPorSistema,
      perguntasFrequentes,
      palavrasFrequentes,
      interacoesPorDia,
      tempoMedioResposta,
      usuariosUnicos,
    }
  } catch (error) {
    console.error("Erro ao buscar dados de analytics:", error)
    return {
      totalInteracoes: 0,
      interacoesPorSistema: [],
      perguntasFrequentes: [],
      palavrasFrequentes: [],
      interacoesPorDia: [],
      tempoMedioResposta: 0,
      usuariosUnicos: 0,
    }
  }
}

export async function getSystemAnalytics(sistema: string) {
  try {
    const { count: totalInteracoes } = await supabaseServer
      .from("chat_history")
      .select("*", { count: "exact", head: true })
      .eq("sistema", sistema)

    const { data: perguntasData } = await supabaseServer
      .from("chat_history")
      .select("pergunta, created_at")
      .eq("sistema", sistema)
      .not("pergunta", "is", null)
      .order("created_at", { ascending: false })
      .limit(100)

    const perguntaCount =
      perguntasData?.reduce(
        (acc, item) => {
          const pergunta = item.pergunta.toLowerCase().trim()
          if (pergunta.length > 5) {
            acc[pergunta] = (acc[pergunta] || 0) + 1
          }
          return acc
        },
        {} as Record<string, number>,
      ) || {}

    const perguntasFrequentes = Object.entries(perguntaCount)
      .map(([pergunta, count]) => ({ pergunta, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)

    return {
      totalInteracoes: totalInteracoes || 0,
      perguntasFrequentes,
    }
  } catch (error) {
    console.error(`Erro ao buscar analytics do sistema ${sistema}:`, error)
    return {
      totalInteracoes: 0,
      perguntasFrequentes: [],
    }
  }
}
