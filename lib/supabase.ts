import { createClient } from "@supabase/supabase-js"

// Usar as variáveis de ambiente do Supabase fornecidas pelo Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ikcvenrtxaglvxctjtjo.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY3ZlbnJ0eGFnbHZ4Y3RqdGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTk1NjUsImV4cCI6MjA2NDA5NTU2NX0.mru0kpoE2cao4zUeiWq5DtdxAxjX-XOhIkFyK5uxNMc"

// Cliente para uso no servidor
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

// Cliente para uso no cliente (singleton pattern)
let supabaseClient: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseClient
}

export type Metadado = {
  id: number
  sistema: string
  banco: string
  tabela: string | null
  campo: string | null
  datatype: string | null
}

export type ChatHistory = {
  id: number
  sistema: string
  pergunta: string
  resposta: string | null
  token: string | null
  user_agent: string | null
  ip_address: string | null
  created_at: string
}

export async function getMetadados(sistema: string): Promise<Metadado[]> {
  try {
    const { data, error } = await supabaseServer.from("metadados").select("*").eq("sistema", sistema)

    if (error) {
      console.error("Erro ao buscar metadados:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Exceção ao buscar metadados:", error)
    return []
  }
}

export async function getAllMetadados(): Promise<Metadado[]> {
  try {
    const { data, error } = await supabaseServer.from("metadados").select("*")

    if (error) {
      console.error("Erro ao buscar todos os metadados:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Exceção ao buscar todos os metadados:", error)
    return []
  }
}

export async function getSistemas(): Promise<string[]> {
  try {
    const { data, error } = await supabaseServer.from("metadados").select("sistema").distinct()

    if (error) {
      console.error("Erro ao buscar sistemas:", error)
      return []
    }

    return data?.map((item) => item.sistema) || []
  } catch (error) {
    console.error("Exceção ao buscar sistemas:", error)
    return []
  }
}

export async function saveChatHistory(
  sistema: string,
  pergunta: string,
  resposta: string,
  token: string,
  userAgent?: string,
  ipAddress?: string,
): Promise<void> {
  try {
    const { error } = await supabaseServer.from("chat_history").insert({
      sistema,
      pergunta,
      resposta,
      token,
      user_agent: userAgent,
      ip_address: ipAddress,
    })

    if (error) {
      console.error("Erro ao salvar histórico do chat:", error)
    }
  } catch (error) {
    console.error("Exceção ao salvar histórico do chat:", error)
  }
}

export async function getChatHistory(sistema: string, token: string): Promise<ChatHistory[]> {
  try {
    const { data, error } = await supabaseServer
      .from("chat_history")
      .select("*")
      .eq("sistema", sistema)
      .eq("token", token)
      .order("created_at", { ascending: true })

    if (error) {
      console.error("Erro ao buscar histórico do chat:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Exceção ao buscar histórico do chat:", error)
    return []
  }
}
