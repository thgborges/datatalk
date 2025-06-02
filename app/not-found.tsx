import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Database className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-medium mb-4">Página não encontrada</h2>
      <p className="text-muted-foreground text-center mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/">
        <Button>Voltar para a página inicial</Button>
      </Link>
    </div>
  )
}
