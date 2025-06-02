"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Metadado } from "@/lib/supabase"
import { Search } from "lucide-react"

export function MetadataTable({ metadados }: { metadados: Metadado[] }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMetadados = metadados.filter((metadado) => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      metadado.tabela?.toLowerCase().includes(searchTermLower) ||
      false ||
      metadado.campo?.toLowerCase().includes(searchTermLower) ||
      false ||
      metadado.datatype?.toLowerCase().includes(searchTermLower) ||
      false ||
      metadado.banco.toLowerCase().includes(searchTermLower)
    )
  })

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar metadados..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Banco</TableHead>
              <TableHead>Tabela</TableHead>
              <TableHead>Campo</TableHead>
              <TableHead>Tipo de Dado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMetadados.length > 0 ? (
              filteredMetadados.map((metadado) => (
                <TableRow key={metadado.id}>
                  <TableCell>{metadado.banco}</TableCell>
                  <TableCell>{metadado.tabela || "-"}</TableCell>
                  <TableCell>{metadado.campo || "-"}</TableCell>
                  <TableCell>{metadado.datatype || "-"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  {searchTerm ? "Nenhum metadado encontrado para esta busca." : "Nenhum metadado disponível."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-muted-foreground">
        Total: {filteredMetadados.length} {filteredMetadados.length === 1 ? "registro" : "registros"}
      </div>
    </div>
  )
}
