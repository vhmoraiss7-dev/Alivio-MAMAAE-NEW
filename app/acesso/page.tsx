"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Users, MessageCircle, Gift, BookOpen, Baby, Heart, Moon } from "lucide-react"

export default function AcessoPage() {
  const [purchaseType, setPurchaseType] = useState("combo") // combo, massagem, amamentacao, recuperacao, sono

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const plan = params.get("plan") || params.get("purchase_type") || "combo"
    setPurchaseType(plan)
  }, [])

  const mainGuides = [
    {
      id: "massagens",
      title: "10 Massagens para Gestação",
      description: "Técnicas seguras e eficazes para alívio de dores e relaxamento",
      icon: <Heart className="h-6 w-6" />,
      pages: "45 páginas",
      color: "bg-pink-500",
      filename: "guia-massagens-gestacao.pdf",
    },
    {
      id: "amamentacao",
      title: "Mamãe Conectada - Amamentação",
      description: "Método P.E.G.A completo para amamentação de sucesso",
      icon: <Baby className="h-6 w-6" />,
      pages: "38 páginas",
      color: "bg-blue-500",
      filename: "guia-mamae-conectada.pdf",
    },
    {
      id: "recuperacao",
      title: "Recuperação Pós-Parto",
      description: "Guia completo para recuperação física e emocional",
      icon: <BookOpen className="h-6 w-6" />,
      pages: "32 páginas",
      color: "bg-green-500",
      filename: "guia-recuperacao-pos-parto.pdf",
    },
    {
      id: "sono",
      title: "Sono Tranquilo do Bebê",
      description: "Métodos comprovados para estabelecer rotina de sono",
      icon: <Moon className="h-6 w-6" />,
      pages: "28 páginas",
      color: "bg-purple-500",
      filename: "guia-sono-bebe.pdf",
    },
  ]

  const handleDownloadGuide = (guideId: string, title: string) => {
    // window.print()
  }

  const handleWatchVideos = () => {
    window.location.href = `/guias/${purchaseType}/videos`
  }

  const handleAccessBonus = () => {
    window.location.href = `/guias/${purchaseType}/bonus`
  }

  const handleJoinVIPGroup = () => {
    window.location.href = "/comunidade"
  }

  const handleWhatsAppSupport = () => {
    window.location.href = "/suporte"
  }

  const renderSpecificGuide = (guideId: string) => {
    const guide = mainGuides.find((g) => g.id === guideId)
    if (!guide) return null

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">📚 Seu Guia Completo</h2>
        <div className="max-w-md mx-auto">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className={`${guide.color} text-white p-4 rounded-full w-fit mx-auto mb-6`}>{guide.icon}</div>
              <h3 className="font-bold text-xl mb-4">{guide.title}</h3>
              <p className="text-muted-foreground mb-6">{guide.description}</p>
              <Badge variant="outline" className="mb-6">
                {guide.pages}
              </Badge>
              <Button size="lg" className="w-full mb-4" onClick={() => (window.location.href = `/guias/${guideId}`)}>
                <BookOpen className="h-4 w-4 mr-2" />
                Abrir Guia Completo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-bold">
              {purchaseType === "combo"
                ? "COMBO COMPLETO"
                : purchaseType === "amamentacao"
                  ? "MÉTODO P.E.G.A"
                  : purchaseType === "massagem"
                    ? "MASSAGENS GESTAÇÃO"
                    : purchaseType === "recuperacao"
                      ? "RECUPERAÇÃO PÓS-PARTO"
                      : "SONO TRANQUILO DO BEBÊ"}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-4">🎉 Parabéns! Seu acesso está liberado</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {purchaseType === "combo"
              ? "Bem-vinda à Jornada Materna Completa! Você tem acesso aos 4 guias + bônus exclusivos."
              : "Bem-vinda! Agora você tem acesso completo ao seu material digital."}
          </p>

          {purchaseType === "combo" ? (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">📚 Seus 4 Guias Completos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mainGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className={`${guide.color} text-white p-3 rounded-full w-fit mx-auto mb-4`}>
                        {guide.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-2 leading-tight">{guide.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{guide.description}</p>
                      <Badge variant="outline" className="text-xs mb-4">
                        {guide.pages}
                      </Badge>
                      <Button
                        size="sm"
                        className="w-full mb-2"
                        onClick={() => (window.location.href = `/guias/${guide.id}`)}
                      >
                        <BookOpen className="h-3 w-3 mr-1" />
                        Abrir Guia
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <>
              {purchaseType === "massagem" && renderSpecificGuide("massagens")}
              {purchaseType === "amamentacao" && renderSpecificGuide("amamentacao")}
              {purchaseType === "recuperacao" && renderSpecificGuide("recuperacao")}
              {purchaseType === "sono" && renderSpecificGuide("sono")}
            </>
          )}

          <Tabs defaultValue="recursos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recursos">Recursos</TabsTrigger>
              <TabsTrigger value="bonus">Bônus</TabsTrigger>
              <TabsTrigger value="comunidade">Comunidade</TabsTrigger>
            </TabsList>

            <TabsContent value="recursos" className="mt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Play className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Vídeos HD</h3>
                    <p className="text-xs text-muted-foreground mb-4">Demonstrações práticas</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent" onClick={handleWatchVideos}>
                      Assistir
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Bônus Exclusivos</h3>
                    <p className="text-xs text-muted-foreground mb-4">Materiais extras</p>
                    <Button size="sm" className="w-full bg-transparent" onClick={handleAccessBonus}>
                      Acessar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Suporte VIP</h3>
                    <p className="text-xs text-muted-foreground mb-4">WhatsApp direto</p>
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={handleWhatsAppSupport}
                    >
                      Falar Agora
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bonus" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🎁 Bônus Inclusos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Guia de Óleos Essenciais Seguros</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Playlist Relaxante (30 músicas)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Checklist de Preparação para o Parto</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Receitas de Chás Calmantes</span>
                    </div>
                    <Button className="w-full mt-4" onClick={handleAccessBonus}>
                      Acessar Todos os Bônus
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">💎 Valor Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Se vendidos separadamente:</p>
                      <p className="text-2xl font-bold text-primary mb-2">R$ 380,60</p>
                      <p className="text-sm text-accent font-semibold">Você pagou apenas R$ 67,90</p>
                      <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mt-4">
                        💰 ECONOMIA DE 82%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="comunidade" className="mt-6">
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Comunidade VIP</h3>
                  <p className="text-muted-foreground mb-6">
                    Faça parte do nosso grupo exclusivo no Telegram com mais de 800 mamães!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Troca de experiências diárias</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Dicas exclusivas da especialista</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Suporte 24/7 da comunidade</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Lives mensais com Q&A</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Descontos em produtos parceiros</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Conteúdo exclusivo semanal</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleJoinVIPGroup}>
                    <Users className="h-4 w-4 mr-2" />
                    Entrar no Grupo VIP
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="bg-muted/30 py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🛡️ Sua Garantia de Satisfação</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Você tem <strong>15 dias</strong> para testar todo o material
            </p>
            <p className="text-sm text-muted-foreground">
              Se não ficar 100% satisfeita, devolvemos seu dinheiro sem perguntas
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
