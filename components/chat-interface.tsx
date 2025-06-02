"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, Send, Code, Table, FileText, Sparkles } from "lucide-react"
import type { Metadado } from "@/lib/supabase"
import { MetadataTable } from "@/components/metadata-table"
import { SqlHighlighter } from "@/components/sql-highlighter"

type ChatResponse = {
  sql?: string
  explanation?: string
  error?: string
}

export function ChatInterface({
  sistema,
  metadados,
}: {
  sistema: string
  metadados: Metadado[]
}) {
  const [activeTab, setActiveTab] = useState("chat")
  const [response, setResponse] = useState<ChatResponse | null>(null)
  const [userToken] = useState(() => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    body: {
      sistema,
      token: userToken,
    },
    onFinish: (message) => {
      try {
        const content = message.content
        const sqlMatch = content.match(/```sql\n([\s\S]*?)\n```/i)
        const sql = sqlMatch ? sqlMatch[1].trim() : ""
        const explanation = content

        setResponse({ sql, explanation })
      } catch (error) {
        console.error("Erro ao processar resposta:", error)
        setResponse({ explanation: message.content })
      }
    },
    onError: (error) => {
      console.error("Erro no chat:", error)
      setResponse({
        error: "Erro ao processar sua mensagem. Tente novamente. 😔",
      })
    },
  })

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveTab("chat")
    handleSubmit(e)
  }

  const exemploPerguntas = [
    {
      pergunta: "Quais tabelas você tem?",
      emoji: "📋",
      categoria: "Estrutura",
    },
    {
      pergunta: "Quais campos tem a tabela tb_pessoa?",
      emoji: "🔍",
      categoria: "Campos",
    },
    {
      pergunta: "Gere uma query para listar todos os beneficiários",
      emoji: "⚡",
      categoria: "SQL",
    },
    {
      pergunta: "Como fazer um JOIN entre as tabelas?",
      emoji: "🔗",
      categoria: "Relacionamentos",
    },
  ]

  const sistemaEmojis: Record<string, string> = {
    saude: "🏥",
    odonto: "🦷",
    vida: "❤️",
    "ramos elementares": "🚗",
    previdencia: "🛡️",
    microseguros: "💼",
  }

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-lg">
              <span className="text-2xl">{sistemaEmojis[sistema] || "🤖"}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold capitalize">{sistema}</h2>
              <p className="text-muted-foreground">Assistente especializado em metadados</p>
            </div>
          </div>

          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="sql" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              SQL
            </TabsTrigger>
            <TabsTrigger value="metadados" className="flex items-center gap-2">
              <Table className="h-4 w-4" />
              Dados
              <Badge variant="secondary" className="ml-1">
                {metadados.length}
              </Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="chat" className="flex-1 overflow-hidden flex flex-col">
          <Card className="flex-1 overflow-y-auto mb-6 border-0 shadow-lg">
            <CardContent className="p-6">
              {messages.length === 0 ? (
                <div className="space-y-8">
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Olá! 👋 Sou seu assistente do sistema {sistema}</h3>
                    <p className="text-muted-foreground mb-6">
                      Estou aqui para ajudar você a explorar os metadados e gerar consultas SQL. O que gostaria de
                      saber?
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <span>💡</span> Perguntas sugeridas:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exemploPerguntas.map((item, index) => (
                        <Card
                          key={index}
                          className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105 border-0 bg-gradient-to-r from-blue-50 to-purple-50"
                          onClick={() => {
                            handleInputChange({ target: { value: item.pergunta } } as any)
                            setTimeout(() => {
                              const form = document.querySelector("form")
                              if (form) {
                                const submitEvent = new Event("submit", { bubbles: true, cancelable: true })
                                handleSubmit(submitEvent as any)
                              }
                            }, 100)
                          }}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <span className="text-xl">{item.emoji}</span>
                              <div className="flex-1">
                                <Badge variant="outline" className="mb-2 text-xs">
                                  {item.categoria}
                                </Badge>
                                <p className="text-sm font-medium">{item.pergunta}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-6 py-4 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gradient-to-r from-gray-50 to-gray-100 border"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{sistemaEmojis[sistema] || "🤖"}</span>
                            <span className="text-sm font-medium text-muted-foreground">Assistente {sistema}</span>
                          </div>
                        )}
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap m-0">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{sistemaEmojis[sistema] || "🤖"}</span>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Pensando... 🤔</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl px-6 py-4 bg-red-50 border border-red-200">
                        <div className="flex items-center gap-2">
                          <span>❌</span>
                          <p className="text-red-700 m-0">Erro: {error.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-4">
              <form onSubmit={onSubmit} className="flex gap-3">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder={`Pergunte sobre os metadados do ${sistema}... 💬`}
                  disabled={isLoading}
                  className="flex-1 border-0 bg-gray-50 focus:bg-white transition-colors"
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sql" className="flex-1 overflow-hidden flex flex-col">
          <Card className="flex-1 overflow-y-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Consulta SQL Gerada
              </CardTitle>
            </CardHeader>
            <CardContent>
              {response?.sql ? (
                <SqlHighlighter sql={response.sql} />
              ) : response?.error ? (
                <div className="text-red-500 p-6 text-center">
                  <span className="text-2xl mb-2 block">😔</span>
                  {response.error}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12">
                  <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Faça uma pergunta para gerar uma consulta SQL</p>
                  <p className="text-sm">As queries aparecerão aqui automaticamente ⚡</p>
                </div>
              )}

              {response?.explanation && (
                <Card className="mt-6 border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span>💡</span> Explicação:
                    </h3>
                    <div className="prose prose-sm max-w-none">
                      <p className="whitespace-pre-wrap m-0">{response.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metadados" className="flex-1 overflow-hidden">
          <Card className="h-full overflow-y-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Table className="h-5 w-5" />
                Metadados do Sistema {sistema}
                <Badge variant="secondary">{metadados.length} registros</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MetadataTable metadados={metadados} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
