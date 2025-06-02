import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Stethoscope, SmileIcon as Tooth, Heart, Umbrella, Shield, Database, ArrowRight } from "lucide-react"

const segments = [
  {
    name: "Saúde",
    icon: Stethoscope,
    path: "/segmentos/saude",
    color: "bg-blue-100 hover:bg-blue-200",
    description: "Metadados de planos de saúde, beneficiários e consultas médicas",
    emoji: "🏥",
  },
  {
    name: "Odonto",
    icon: Tooth,
    path: "/segmentos/odonto",
    color: "bg-cyan-100 hover:bg-cyan-200",
    description: "Dados de tratamentos odontológicos, pacientes e dentistas",
    emoji: "🦷",
  },
  {
    name: "Vida",
    icon: Heart,
    path: "/segmentos/vida",
    color: "bg-red-100 hover:bg-red-200",
    description: "Informações de seguros de vida, segurados e beneficiários",
    emoji: "❤️",
  },
  {
    name: "Ramos Elementares",
    icon: Umbrella,
    path: "/segmentos/ramos-elementares",
    color: "bg-amber-100 hover:bg-amber-200",
    description: "Dados de seguros auto, veículos e sinistros",
    emoji: "🚗",
  },
  {
    name: "Previdência",
    icon: Shield,
    path: "/segmentos/previdencia",
    color: "bg-green-100 hover:bg-green-200",
    description: "Dados previdenciários, participantes e contribuições",
    emoji: "🛡️",
  },
  {
    name: "Microseguros",
    icon: Database,
    path: "/segmentos/microseguros",
    color: "bg-purple-100 hover:bg-purple-200",
    description: "Microseguros, clientes e coberturas especializadas",
    emoji: "💼",
  },
]

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            🤖 Chatbot Inteligente
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Escolha seu Segmento
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selecione o segmento de seguros para começar a conversar com nosso chatbot especializado. Cada assistente é
            treinado especificamente para seu setor.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment) => (
            <Link href={segment.path} key={segment.name}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
                <CardHeader className={`${segment.color} rounded-t-lg transition-colors group-hover:scale-105`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{segment.emoji}</span>
                      <CardTitle className="text-xl">{segment.name}</CardTitle>
                    </div>
                    <segment.icon className="h-6 w-6 text-gray-600" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-8">
                  <CardDescription className="text-base leading-relaxed mb-6">{segment.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      IA Especializada
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">O que você pode fazer com nossos chatbots?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-3">🔍</div>
                <h3 className="font-semibold mb-2">Explorar Metadados</h3>
                <p className="text-sm text-gray-600">Descubra tabelas, campos e estruturas de dados</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Gerar SQL</h3>
                <p className="text-sm text-gray-600">Crie consultas automaticamente com linguagem natural</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Obter Insights</h3>
                <p className="text-sm text-gray-600">Receba explicações detalhadas e sugestões</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
