"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Database, Heart, Home, Shield, Stethoscope, SmileIcon as Tooth, Umbrella, BarChart3 } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const segments = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Dashboard", icon: BarChart3, path: "/dashboard" },
    { name: "Saúde", icon: Stethoscope, path: "/segmentos/saude" },
    { name: "Odonto", icon: Tooth, path: "/segmentos/odonto" },
    { name: "Vida", icon: Heart, path: "/segmentos/vida" },
    { name: "Ramos Elementares", icon: Umbrella, path: "/segmentos/ramos-elementares" },
    { name: "Previdência", icon: Shield, path: "/segmentos/previdencia" },
    { name: "Microseguros", icon: Database, path: "/segmentos/microseguros" },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span className="font-bold text-xl">DataTalk</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {segments.map((segment) => {
              const isActive = pathname === segment.path
              return (
                <Link href={segment.path} key={segment.name}>
                  <Button variant={isActive ? "default" : "ghost"} size="sm" className="flex items-center gap-1">
                    <segment.icon className="h-4 w-4" />
                    <span>{segment.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
