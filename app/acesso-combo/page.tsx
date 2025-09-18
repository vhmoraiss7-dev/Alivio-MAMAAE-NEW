"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AcessoComboPage() {
  const [token, setToken] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam) {
      setToken(tokenParam)
    } else {
      // Se não tem token, redireciona para página principal
      router.push("/")
    }
  }, [searchParams, router])

  const guides = [
    {
      id: "massagens",
      title: "10 Massagens para Gestação",
      icon: "🤰",
      description: "Alívio completo para dores e desconfortos da gravidez",
      features: [
        "10 técnicas de massagem ilustradas",
        "Instruções passo a passo",
        "Alívio para dores nas costas",
        "Técnicas para pés inchados",
        "Massagem relaxante para ansiedade",
      ],
      path: "/guias/massagens",
    },
    {
      id: "amamentacao",
      title: "Mamãe Conectada: Método P.E.G.A",
      icon: "🤱",
      description: "Amamentação bem-sucedida com técnicas comprovadas",
      features: [
        "Método P.E.G.A completo",
        "Pega correta do bebê",
        "Posições ideais para amamentar",
        "Solução para fissuras e dor",
        "Aumentar produção de leite",
      ],
      path: "/guias/amamentacao",
    },
    {
      id: "recuperacao",
      title: "Recuperação Pós-Parto Completa",
      icon: "💪",
      description: "Corpo, mente e autoestima renovados",
      features: [
        "Cicatrização rápida (normal/cesárea)",
        "Exercícios para fortalecer o core",
        "Recuperação da autoestima",
        "Organização da rotina com bebê",
        "Retorno da libido",
      ],
      path: "/guias/recuperacao",
    },
    {
      id: "sono",
      title: "Sono Tranquilo para Bebê e Mãe",
      icon: "😴",
      description: "Técnicas simples para noites de sono reparador",
      features: [
        "Rotina de sono eficaz",
        "Técnicas de acalmar o bebê",
        "Ambiente ideal para dormir",
        "Solução para cólicas noturnas",
        "Sono seguro e tranquilo",
      ],
      path: "/guias/sono",
    },
  ]

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold mb-2">Acesso Restrito</h1>
          <p className="text-muted-foreground">Você precisa de um token válido para acessar este conteúdo.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header de boas-vindas */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold mb-4">
            🎉 PARABÉNS! SEU ACESSO ESTÁ LIBERADO
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Bem-vinda à <span className="text-primary">Jornada Materna Completa</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você agora tem acesso vitalício aos 4 guias mais completos para uma maternidade tranquila e feliz
          </p>
        </div>

        {/* Guias principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide) => (
            <Card
              key={guide.id}
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3">📋 O que você vai aprender:</h4>
                  <ul className="space-y-2">
                    {guide.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`${guide.path}?token=${token}`}>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    📖 Abrir Guia Completo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bônus exclusivos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎁 Bônus Exclusivos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="font-bold text-foreground mb-2">Playlist Relaxante</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Músicas especialmente selecionadas para relaxamento durante gestação e amamentação
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  🎧 Ouvir Playlist
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🍵</div>
                <h3 className="font-bold text-foreground mb-2">Receitas Nutritivas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Receitas saudáveis para cada fase: gestação, amamentação e recuperação
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  📄 Ver Receitas
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-foreground mb-2">Grupo VIP Telegram</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comunidade exclusiva com outras mães e suporte especializado
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  📱 Entrar no Grupo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Suporte */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">💝 Precisa de ajuda? Estamos aqui para você!</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada está pronta para tirar suas dúvidas e apoiar sua jornada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                📱 WhatsApp Suporte
              </Button>
              <Button size="lg" variant="outline">
                📧 Email Suporte
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
