import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Database,
  Heart,
  Shield,
  Stethoscope,
  SmileIcon as Tooth,
  Umbrella,
  MessageCircle,
  BarChart3,
  Users,
  Zap,
} from "lucide-react"

export default function Home() {
  const segments = [
    {
      name: "Saúde",
      icon: Stethoscope,
      path: "/segmentos/saude",
      color: "bg-blue-100 hover:bg-blue-200",
      description: "Consulte metadados de planos de saúde, beneficiários e consultas médicas",
      emoji: "🏥",
    },
    {
      name: "Odonto",
      icon: Tooth,
      path: "/segmentos/odonto",
      color: "bg-cyan-100 hover:bg-cyan-200",
      description: "Explore dados de tratamentos odontológicos, pacientes e dentistas",
      emoji: "🦷",
    },
    {
      name: "Vida",
      icon: Heart,
      path: "/segmentos/vida",
      color: "bg-red-100 hover:bg-red-200",
      description: "Analise informações de seguros de vida, segurados e beneficiários",
      emoji: "❤️",
    },
    {
      name: "Ramos Elementares",
      icon: Umbrella,
      path: "/segmentos/ramos-elementares",
      color: "bg-amber-100 hover:bg-amber-200",
      description: "Gerencie dados de seguros auto, veículos e sinistros",
      emoji: "🚗",
    },
    {
      name: "Previdência",
      icon: Shield,
      path: "/segmentos/previdencia",
      color: "bg-green-100 hover:bg-green-200",
      description: "Consulte dados previdenciários, participantes e contribuições",
      emoji: "🛡️",
    },
    {
      name: "Microseguros",
      icon: Database,
      path: "/segmentos/microseguros",
      color: "bg-purple-100 hover:bg-purple-200",
      description: "Explore microseguros, clientes e coberturas especializadas",
      emoji: "💼",
    },
  ]

  const features = [
    {
      icon: MessageCircle,
      title: "Chat Inteligente",
      description: "Converse com IA especializada em cada segmento",
    },
    {
      icon: BarChart3,
      title: "Queries SQL",
      description: "Gere consultas SQL automaticamente",
    },
    {
      icon: Users,
      title: "Multi-Segmentos",
      description: "6 segmentos especializados de seguros",
    },
    {
      icon: Zap,
      title: "Respostas Rápidas",
      description: "Obtenha insights instantâneos dos seus dados",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
              <Database className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DataTalk
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforme suas consultas de metadados em conversas inteligentes. Gere queries SQL e obtenha insights
            através de chatbots especializados para cada segmento de seguros.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">
              🤖 IA Especializada
            </Badge>
            <Badge variant="secondary" className="text-sm">
              📊 Metadados Estruturados
            </Badge>
            <Badge variant="secondary" className="text-sm">
              ⚡ Respostas Instantâneas
            </Badge>
            <Badge variant="secondary" className="text-sm">
              🔍 Queries Automáticas
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full w-fit">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Segments Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha seu Segmento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment) => (
              <Link href={segment.path} key={segment.name}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                  <CardHeader className={`${segment.color} rounded-t-lg transition-colors`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{segment.emoji}</span>
                        <CardTitle className="text-xl">{segment.name}</CardTitle>
                      </div>
                      <segment.icon className="h-6 w-6 text-gray-600" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base leading-relaxed">{segment.description}</CardDescription>
                    <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Explorar {segment.emoji}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-xl mb-8 opacity-90">
            Escolha um segmento acima e comece a explorar seus metadados de forma inteligente
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/segmentos/saude">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                🏥 Começar com Saúde
              </Button>
            </Link>
            <Link href="/segmentos/odonto">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                🦷 Explorar Odonto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
