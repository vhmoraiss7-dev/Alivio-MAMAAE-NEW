"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MassagensVideosPage() {
  const videos = [
    {
      id: 1,
      title: "Massagem para Dor nas Costas",
      duration: "8:45",
      description: "Técnica completa para alívio da dor lombar",
      thumbnail: "/pregnant-woman-back-massage.jpg",
    },
    {
      id: 2,
      title: "Massagem nos Pés e Pernas",
      duration: "6:30",
      description: "Reduz inchaço e melhora circulação",
      thumbnail: "/pregnant-woman-foot-massage.jpg",
    },
    {
      id: 3,
      title: "Massagem Relaxante Completa",
      duration: "12:15",
      description: "Sequência completa para relaxamento total",
      thumbnail: "/pregnant-woman-relaxing-massage.jpg",
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

        <h1 className="text-3xl font-bold text-primary mb-2">🎥 Vídeos - Massagens para Gestação</h1>
        <p className="text-muted-foreground mb-8">Demonstrações práticas das técnicas de massagem</p>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-lg">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Assistir Vídeo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
