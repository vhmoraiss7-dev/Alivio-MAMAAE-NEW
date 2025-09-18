"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft, Gift } from "lucide-react"
import Link from "next/link"

export default function MassagensBonusPage() {
  const bonusItems = [
    {
      id: 1,
      title: "Guia de Óleos Essenciais Seguros",
      description: "Lista completa de óleos seguros para gestação com receitas",
      type: "PDF",
      pages: "12 páginas",
    },
    {
      id: 2,
      title: "Playlist Relaxante",
      description: "30 músicas selecionadas para relaxamento durante massagens",
      type: "Playlist",
      duration: "2h 15min",
    },
    {
      id: 3,
      title: "Checklist de Preparação",
      description: "Lista completa para preparar o ambiente ideal para massagem",
      type: "Checklist",
      items: "15 itens",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6">
          <Link href="/guias/massagens">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Guia
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-2">🎁 Bônus - Massagens para Gestação</h1>
        <p className="text-muted-foreground mb-8">Materiais extras para complementar seu aprendizado</p>

        <div className="grid gap-6">
          {bonusItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>Tipo: {item.type}</span>
                      <span>•</span>
                      <span>{item.pages || item.duration || item.items}</span>
                    </div>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Baixar {item.type}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
