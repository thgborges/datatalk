"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@datatalk.com.br",
      description: "Resposta em até 2 horas",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      description: "Seg-Sex, 9h às 18h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      description: "Atendimento presencial com agendamento",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              💬 Fale Conosco
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pronto para transformar sua forma de trabalhar com metadados? Nossa equipe está aqui para ajudar você a
              encontrar a melhor solução.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
              </p>

              {isSubmitted ? (
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Mensagem Enviada!</h3>
                    <p className="text-green-600">
                      Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                            Nome Completo *
                          </label>
                          <Input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Corporativo *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu.email@empresa.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa *
                          </label>
                          <Input
                            id="empresa"
                            name="empresa"
                            type="text"
                            required
                            value={formData.empresa}
                            onChange={handleChange}
                            placeholder="Nome da sua seguradora"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone
                          </label>
                          <Input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                          Mensagem *
                        </label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          required
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Conte-nos sobre suas necessidades e como podemos ajudar..."
                          rows={5}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Enviar Mensagem
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-gray-600 mb-8">
                Estamos sempre disponíveis para esclarecer dúvidas e apresentar como o DataTalk pode transformar seus
                processos.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Quick Links */}
              <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                  <CardDescription>Respostas rápidas para dúvidas comuns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Como funciona o teste gratuito?</h4>
                      <p className="text-sm text-gray-600">14 dias completos com acesso a todas as funcionalidades.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Qual o tempo de implementação?</h4>
                      <p className="text-sm text-gray-600">Integração completa em até 5 dias úteis.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Oferecemos suporte técnico?</h4>
                      <p className="text-sm text-gray-600">Sim, suporte especializado 24/7 para todos os clientes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para uma Demonstração?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma demo personalizada e veja como o DataTalk pode transformar seus processos de consulta de
            metadados.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            Agendar Demo Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
