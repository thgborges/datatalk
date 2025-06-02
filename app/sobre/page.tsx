import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Heart } from "lucide-react"

export default function SobrePage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando as melhores tecnologias para resolver problemas reais do setor de seguros.",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Desenvolvemos soluções pensando nas necessidades específicas de cada seguradora.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos em entregar a melhor experiência e resultados superiores.",
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Relacionamentos baseados em confiança, clareza e comunicação aberta.",
    },
  ]

  const team = [
    {
      name: "Ana Costa",
      role: "CEO & Fundadora",
      description: "15 anos de experiência no setor de seguros e tecnologia.",
    },
    {
      name: "Carlos Silva",
      role: "CTO",
      description: "Especialista em IA e arquitetura de sistemas empresariais.",
    },
    {
      name: "Marina Santos",
      role: "Head de Produto",
      description: "Expert em UX/UI e desenvolvimento de produtos SaaS.",
    },
    {
      name: "Roberto Lima",
      role: "Head de Vendas",
      description: "Profundo conhecimento do mercado segurador brasileiro.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              🏢 Nossa História
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sobre o DataTalk
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos uma empresa de tecnologia especializada em soluções de IA para o setor de seguros, com a missão de
              simplificar e acelerar o acesso a informações críticas de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-full w-fit mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Democratizar o acesso a metadados complexos através de interfaces conversacionais intuitivas,
                  permitindo que qualquer profissional obtenha insights valiosos sem conhecimento técnico.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-full w-fit mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ser a principal plataforma de IA para consulta de metadados no setor de seguros, transformando a forma
                  como as empresas interagem com seus dados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-full w-fit mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Inovação constante, foco no cliente, excelência técnica e transparência em todas as nossas relações e
                  processos de desenvolvimento.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossa Jornada</h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">O Problema que Identificamos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Trabalhando diretamente com seguradoras, percebemos que profissionais gastavam horas tentando
                    entender estruturas de dados complexas e gerar consultas SQL para obter informações básicas. Isso
                    criava gargalos e dependência excessiva de equipes técnicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Nossa Solução Inovadora</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Desenvolvemos uma plataforma que combina IA conversacional com conhecimento especializado do setor
                    de seguros. Agora, qualquer profissional pode "conversar" com os metadados e obter respostas
                    instantâneas em linguagem natural.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Resultados Comprovados</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hoje, mais de 50 seguradoras confiam no DataTalk para acelerar seus processos de análise. Nossos
                    clientes reportam redução de 80% no tempo de consulta e aumento significativo na autonomia de suas
                    equipes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e desenvolvimento em nossa empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full w-fit mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes e apaixonados por tecnologia e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-gray-200 to-gray-300 w-20 h-20 rounded-full mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DataTalk em Números</h2>
            <p className="text-xl opacity-90">Resultados que comprovam nossa eficácia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Seguradoras Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Consultas Processadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-lg opacity-90">Redução no Tempo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
