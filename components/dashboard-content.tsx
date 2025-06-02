"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, MessageCircle, Users, Clock, TrendingUp, Hash, Calendar, Database } from "lucide-react"
import type { AnalyticsData } from "@/lib/analytics"

interface DashboardContentProps {
  data: AnalyticsData
}

export function DashboardContent({ data }: DashboardContentProps) {
  const sistemaEmojis: Record<string, string> = {
    saude: "🏥",
    odonto: "🦷",
    vida: "❤️",
    "ramos elementares": "🚗",
    previdencia: "🛡️",
    microseguros: "💼",
  }

  const maxInteracoesSistema = Math.max(...data.interacoesPorSistema.map((s) => s.count), 1)
  const maxPalavras = Math.max(...data.palavrasFrequentes.map((p) => p.count), 1)

  return (
    <div className="space-y-8">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Interações</CardTitle>
            <MessageCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalInteracoes.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Conversas realizadas na plataforma</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Únicos</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.usuariosUnicos.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Usuários diferentes que usaram a plataforma</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            <Clock className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.tempoMedioResposta}s</div>
            <p className="text-xs text-muted-foreground">Tempo médio de resposta do chatbot</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sistemas Ativos</CardTitle>
            <Database className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.interacoesPorSistema.length}</div>
            <p className="text-xs text-muted-foreground">Segmentos com interações registradas</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos e Análises */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Interações por Sistema */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Interações por Sistema
            </CardTitle>
            <CardDescription>Distribuição de uso entre os diferentes segmentos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.interacoesPorSistema.map((sistema, index) => (
              <div key={sistema.sistema} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{sistemaEmojis[sistema.sistema] || "📊"}</span>
                    <span className="font-medium capitalize">{sistema.sistema}</span>
                  </div>
                  <Badge variant="secondary">{sistema.count}</Badge>
                </div>
                <Progress value={(sistema.count / maxInteracoesSistema) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Atividade por Dia */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Atividade Recente
            </CardTitle>
            <CardDescription>Interações nos últimos dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.interacoesPorDia.slice(-7).map((dia, index) => (
                <div key={dia.data} className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {new Date(dia.data).toLocaleDateString("pt-BR", {
                      weekday: "short",
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${Math.max((dia.count / Math.max(...data.interacoesPorDia.map((d) => d.count))) * 100, 5)}%`,
                        }}
                      />
                    </div>
                    <Badge variant="outline">{dia.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Perguntas e Palavras Frequentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Perguntas Mais Frequentes */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Perguntas Mais Frequentes
            </CardTitle>
            <CardDescription>As perguntas que os usuários mais fazem</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.perguntasFrequentes.map((pergunta, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium leading-relaxed flex-1">
                    {pergunta.pergunta.charAt(0).toUpperCase() + pergunta.pergunta.slice(1)}
                  </p>
                  <Badge variant="secondary" className="shrink-0">
                    {pergunta.count}x
                  </Badge>
                </div>
                {index < data.perguntasFrequentes.length - 1 && <div className="border-b border-gray-100" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Palavras Mais Utilizadas */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hash className="h-5 w-5" />
              Palavras Mais Utilizadas
            </CardTitle>
            <CardDescription>Termos mais comuns nas perguntas dos usuários</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.palavrasFrequentes.map((palavra, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Badge
                    variant="outline"
                    className="text-sm"
                    style={{
                      fontSize: `${Math.max(0.75 + (palavra.count / maxPalavras) * 0.5, 0.75)}rem`,
                      opacity: Math.max(0.6 + (palavra.count / maxPalavras) * 0.4, 0.6),
                    }}
                  >
                    {palavra.palavra}
                    <span className="ml-1 text-xs text-muted-foreground">{palavra.count}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights e Recomendações */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Insights e Recomendações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">📈 Sistema Mais Popular</h4>
              <p className="text-sm text-muted-foreground">
                {data.interacoesPorSistema[0] ? (
                  <>
                    <span className="font-medium capitalize">
                      {sistemaEmojis[data.interacoesPorSistema[0].sistema]} {data.interacoesPorSistema[0].sistema}
                    </span>{" "}
                    lidera com {data.interacoesPorSistema[0].count} interações
                  </>
                ) : (
                  "Nenhum dado disponível"
                )}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm">🎯 Engajamento</h4>
              <p className="text-sm text-muted-foreground">
                Média de {data.totalInteracoes > 0 ? (data.totalInteracoes / data.usuariosUnicos).toFixed(1) : 0}{" "}
                interações por usuário
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm">💡 Oportunidade</h4>
              <p className="text-sm text-muted-foreground">
                Considere criar tutoriais para as perguntas mais frequentes
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm">⚡ Performance</h4>
              <p className="text-sm text-muted-foreground">Tempo de resposta excelente: {data.tempoMedioResposta}s</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
