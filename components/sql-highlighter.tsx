"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function SqlHighlighter({ sql }: { sql: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sql)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Função simples para destacar palavras-chave SQL
  const highlightSql = (code: string) => {
    const keywords = [
      "SELECT",
      "FROM",
      "WHERE",
      "JOIN",
      "LEFT",
      "RIGHT",
      "INNER",
      "OUTER",
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "LIMIT",
      "OFFSET",
      "INSERT",
      "UPDATE",
      "DELETE",
      "CREATE",
      "ALTER",
      "DROP",
      "TABLE",
      "VIEW",
      "INDEX",
      "AS",
      "ON",
      "AND",
      "OR",
      "NOT",
      "NULL",
      "IS",
      "IN",
      "BETWEEN",
      "LIKE",
      "DISTINCT",
      "COUNT",
      "SUM",
      "AVG",
      "MIN",
      "MAX",
      "CASE",
      "WHEN",
      "THEN",
      "ELSE",
      "END",
    ]

    let highlightedCode = code

    // Destacar palavras-chave
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi")
      highlightedCode = highlightedCode.replace(
        regex,
        (match) => `<span class="text-blue-400 font-semibold">${match}</span>`,
      )
    })

    // Destacar strings
    highlightedCode = highlightedCode.replace(/'([^']*)'/g, "<span class=\"text-green-400\">'$1'</span>")

    // Destacar números
    highlightedCode = highlightedCode.replace(/\b(\d+)\b/g, '<span class="text-yellow-400">$1</span>')

    // Destacar comentários
    highlightedCode = highlightedCode.replace(/--.*$/gm, '<span class="text-gray-400 italic">$&</span>')

    return highlightedCode
  }

  return (
    <div className="relative group">
      <div className="absolute right-3 top-3 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 hover:bg-gray-700 text-white border-gray-600"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copiar
            </>
          )}
        </Button>
      </div>
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">SQL Query</span>
          </div>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code
            dangerouslySetInnerHTML={{ __html: highlightSql(sql) }}
            className="text-sm font-mono text-gray-100 leading-relaxed"
          />
        </pre>
      </div>
    </div>
  )
}
