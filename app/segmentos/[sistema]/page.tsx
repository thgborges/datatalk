import { notFound } from "next/navigation"
import { getMetadados } from "@/lib/supabase"
import { ChatInterface } from "@/components/chat-interface"

// Lista de sistemas válidos
const SISTEMAS_VALIDOS = ["saude", "odonto", "vida", "ramos-elementares", "previdencia", "microseguros"]

// Mapeamento de URLs para nomes de sistemas no banco
const SISTEMA_MAP: Record<string, string> = {
  saude: "saude",
  odonto: "odonto",
  vida: "vida",
  "ramos-elementares": "ramos elementares",
  previdencia: "previdencia",
  microseguros: "microseguros",
}

// Mapeamento para títulos formatados
const TITULO_MAP: Record<string, string> = {
  saude: "Saúde",
  odonto: "Odonto",
  vida: "Vida",
  "ramos-elementares": "Ramos Elementares",
  previdencia: "Previdência",
  microseguros: "Microseguros",
}

export async function generateStaticParams() {
  return SISTEMAS_VALIDOS.map((sistema) => ({
    sistema,
  }))
}

export default async function SistemaPage({
  params,
}: {
  params: { sistema: string }
}) {
  const { sistema } = params

  // Verificar se o sistema é válido
  if (!SISTEMAS_VALIDOS.includes(sistema)) {
    notFound()
  }

  // Obter o nome do sistema no banco
  const sistemaBanco = SISTEMA_MAP[sistema]

  // Buscar metadados do sistema
  let metadados = []
  try {
    metadados = await getMetadados(sistemaBanco)
  } catch (error) {
    console.error(`Erro ao buscar metadados para ${sistemaBanco}:`, error)
    // Continuar com array vazio em caso de erro
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{TITULO_MAP[sistema]}</h1>
        <p className="text-muted-foreground">
          Consulte metadados e gere queries SQL para o sistema {TITULO_MAP[sistema].toLowerCase()}
        </p>
      </div>

      <ChatInterface sistema={sistemaBanco} metadados={metadados} />
    </div>
  )
}
