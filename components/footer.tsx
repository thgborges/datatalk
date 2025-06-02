import Link from "next/link"
import { Database, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">DataTalk</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando consultas de metadados em conversas inteligentes para o setor de seguros.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Produto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Produto</h3>
            <div className="space-y-2">
              <Link href="/chatbot" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Chatbot IA
              </Link>
              <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Dashboard Analytics
              </Link>
              <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Funcionalidades
              </Link>
            </div>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Empresa</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link href="/contato" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contato
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Carreiras
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contato@datatalk.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 DataTalk. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
