import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MessageCircle, BarChart3, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: "Chatbot Inteligente",
      description: "IA especializada que entende linguagem natural e gera consultas SQL automaticamente",
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas, insights e relatórios personalizados",
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description: "Proteção de dados de nível corporativo com compliance total",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Obtenha insights dos seus metadados em segundos, não em horas",
    },
  ]

  const benefits = [
    "Redução de 80% no tempo de consulta de metadados",
    "Interface intuitiva que não requer conhecimento técnico",
    "Integração simples com sistemas existentes",
    "Suporte especializado para o setor de seguros",
    "ROI comprovado em menos de 3 meses",
    "Escalabilidade para empresas de qualquer porte",
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Diretora de TI",
      company: "Seguradora ABC",
      content:
        "O DataTalk revolucionou nossa forma de trabalhar com metadados. Economizamos horas de trabalho diariamente.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Analista de Dados",
      company: "Vida Seguros",
      content: "Impressionante como a IA entende exatamente o que precisamos. Geração de SQL nunca foi tão fácil.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              🚀 Solução SaaS para Seguradoras
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforme Metadados em Conversas Inteligentes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A primeira plataforma SaaS que permite às seguradoras consultar metadados através de conversas naturais.
              Gere queries SQL automaticamente e obtenha insights instantâneos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/chatbot">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
                >
                  Testar Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Agendar Demo
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Teste grátis por 14 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher o DataTalk?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especificamente para o setor de seguros, com funcionalidades que atendem às necessidades
              reais do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefícios Comprovados para Seguradoras</h2>
              <p className="text-lg text-gray-600 mb-8">
                Mais de 50 seguradoras já confiam no DataTalk para otimizar suas consultas de metadados e acelerar a
                tomada de decisões.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Resultados Impressionantes</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Redução no tempo de consulta</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Satisfação dos usuários</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">3x</div>
                  <div className="text-sm text-gray-600">Aumento na produtividade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Suporte disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de profissionais que transformaram seus processos com o DataTalk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Revolucionar suas Consultas de Metadados?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a centenas de seguradoras que já otimizaram seus processos com o DataTalk. Comece seu teste
            gratuito hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chatbot">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Começar Teste Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
