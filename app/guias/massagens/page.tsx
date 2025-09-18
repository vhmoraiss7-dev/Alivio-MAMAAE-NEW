"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Home, Clock, Target, AlertCircle, Heart, BookOpen } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const chapters = [
  {
    id: 1,
    title: "Massagem Relaxante nos Ombros",
    duration: "5-10 min",
    trimester: "Todos",
    difficulty: "Fácil",
    description: "Técnica suave para aliviar tensão acumulada nos ombros e pescoço, comum durante a gestação.",
    benefits: ["Reduz dor no pescoço", "Alivia tensão muscular", "Melhora postura"],
    instructions: [
      "Sente-se confortavelmente com as costas apoiadas",
      "Use movimentos circulares suaves com as pontas dos dedos",
      "Aplique pressão leve, nunca force",
      "Respire profundamente durante a massagem",
    ],
    precautions: "Evite pressão excessiva. Pare se sentir desconforto.",
  },
  {
    id: 2,
    title: "Massagem para Dor Lombar",
    duration: "10-15 min",
    trimester: "2º e 3º",
    difficulty: "Médio",
    description: "Alívio específico para dores na região lombar, muito comum no segundo e terceiro trimestre.",
    benefits: ["Alivia dor lombar", "Melhora mobilidade", "Reduz rigidez"],
    instructions: [
      "Deite-se de lado com travesseiro entre as pernas",
      "Peça ajuda do parceiro para aplicar pressão suave",
      "Use movimentos longos e lentos",
      "Concentre-se na região lombar inferior",
    ],
    precautions: "Sempre de lado, nunca de barriga para cima após 20 semanas.",
  },
  {
    id: 3,
    title: "Massagem nos Pés e Tornozelos",
    duration: "8-12 min",
    trimester: "Todos",
    difficulty: "Fácil",
    description: "Reduz inchaço e melhora circulação nos pés e tornozelos inchados.",
    benefits: ["Reduz inchaço", "Melhora circulação", "Alivia peso nas pernas"],
    instructions: [
      "Eleve os pés em uma almofada",
      "Use movimentos ascendentes dos pés para os tornozelos",
      "Aplique pressão suave com os polegares",
      "Termine com movimentos circulares nos tornozelos",
    ],
    precautions: "Evite pontos de pressão específicos que podem induzir contrações.",
  },
  {
    id: 4,
    title: "Massagem Abdominal Suave",
    duration: "5-8 min",
    trimester: "1º e 2º",
    difficulty: "Fácil",
    description: "Técnica delicada para conectar-se com o bebê e aliviar desconfortos digestivos.",
    benefits: ["Melhora digestão", "Reduz gases", "Promove conexão com bebê"],
    instructions: [
      "Use óleo natural morno (coco ou amêndoas)",
      "Movimentos circulares muito suaves no sentido horário",
      "Pressão mínima, apenas deslizando as mãos",
      "Converse com seu bebê durante a massagem",
    ],
    precautions: "Apenas no 1º e 2º trimestre. Movimentos muito suaves.",
  },
  {
    id: 5,
    title: "Massagem para Dor de Cabeça",
    duration: "5-10 min",
    trimester: "Todos",
    difficulty: "Fácil",
    description: "Alívio natural para dores de cabeça tensionais comuns na gravidez.",
    benefits: ["Alivia dor de cabeça", "Reduz tensão", "Promove relaxamento"],
    instructions: [
      "Sente-se confortavelmente",
      "Massageie as têmporas com movimentos circulares",
      "Aplique pressão suave na base do crânio",
      "Termine massageando o couro cabeludo",
    ],
    precautions: "Pressão leve. Pare se a dor piorar.",
  },
  {
    id: 6,
    title: "Massagem nas Mãos e Punhos",
    duration: "6-10 min",
    trimester: "Todos",
    difficulty: "Fácil",
    description: "Alivia dormência e formigamento nas mãos, comum devido à retenção de líquidos.",
    benefits: ["Reduz dormência", "Melhora circulação", "Alivia síndrome do túnel do carpo"],
    instructions: [
      "Estenda uma mão de cada vez",
      "Massageie cada dedo individualmente",
      "Use movimentos circulares nos punhos",
      "Termine com alongamento suave dos dedos",
    ],
    precautions: "Movimentos suaves. Evite pressão excessiva nos punhos.",
  },
  {
    id: 7,
    title: "Massagem para Cãibras nas Pernas",
    duration: "8-15 min",
    trimester: "2º e 3º",
    difficulty: "Médio",
    description: "Prevenção e alívio de cãibras noturnas nas pernas, muito comuns no final da gestação.",
    benefits: ["Previne cãibras", "Melhora circulação", "Relaxa músculos"],
    instructions: [
      "Sente-se com as pernas estendidas",
      "Massageie da panturrilha para cima",
      "Use pressão firme mas confortável",
      "Termine com alongamento suave",
    ],
    precautions: "Se tiver cãibra ativa, alongue primeiro, depois massageie.",
  },
  {
    id: 8,
    title: "Massagem Relaxante Facial",
    duration: "5-8 min",
    trimester: "Todos",
    difficulty: "Fácil",
    description: "Promove relaxamento profundo e alivia tensão facial acumulada.",
    benefits: ["Promove relaxamento", "Melhora sono", "Reduz estresse"],
    instructions: [
      "Lave as mãos e use óleo facial suave",
      "Movimentos ascendentes da mandíbula para testa",
      "Massageie suavemente ao redor dos olhos",
      "Termine com pressão suave nas têmporas",
    ],
    precautions: "Use produtos seguros para gestantes. Evite óleos essenciais.",
  },
  {
    id: 9,
    title: "Massagem para Alívio do Estresse",
    duration: "10-20 min",
    trimester: "Todos",
    difficulty: "Médio",
    description: "Técnica completa para reduzir ansiedade e promover bem-estar emocional.",
    benefits: ["Reduz ansiedade", "Melhora humor", "Promove bem-estar"],
    instructions: [
      "Crie ambiente calmo com música suave",
      "Combine respiração profunda com toques suaves",
      "Foque em áreas de maior tensão",
      "Termine com relaxamento completo",
    ],
    precautions: "Ambiente seguro. Pare se sentir qualquer desconforto.",
  },
  {
    id: 10,
    title: "Massagem Preparatória para o Parto",
    duration: "15-25 min",
    trimester: "3º (após 36 semanas)",
    difficulty: "Avançado",
    description: "Técnica específica para preparar o corpo para o trabalho de parto.",
    benefits: ["Prepara para parto", "Reduz ansiedade", "Fortalece conexão"],
    instructions: [
      "Apenas após liberação médica (36+ semanas)",
      "Foque em relaxamento e respiração",
      "Massagem suave na região lombar",
      "Combine com exercícios de respiração",
    ],
    precautions: "APENAS após 36 semanas e com aprovação médica.",
  },
]

export default function GuiaMassagensPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showIndex, setShowIndex] = useState(true)
  const [token, setToken] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam) {
      setToken(tokenParam)
      setIsValidating(false)
    } else {
      router.push("/")
    }
  }, [searchParams, router])

  if (isValidating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500/5 to-rose-500/5 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤰</div>
          <h1 className="text-2xl font-bold mb-2">Validando acesso...</h1>
          <p className="text-muted-foreground">Aguarde um momento</p>
        </div>
      </div>
    )
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500/5 to-rose-500/5 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold mb-2">Acesso Restrito</h1>
          <p className="text-muted-foreground mb-6">Você precisa de um token válido para acessar este guia.</p>
          <Button onClick={() => router.push("/")}>Voltar ao Início</Button>
        </div>
      </div>
    )
  }

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
      setShowIndex(false)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
      setShowIndex(false)
    }
  }

  const goToChapter = (index: number) => {
    setCurrentChapter(index)
    setShowIndex(false)
  }

  const goHome = () => {
    router.push(`/acesso-combo?token=${token}`)
  }

  if (showIndex) {
    return (
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" onClick={goHome} className="flex items-center gap-2 bg-transparent">
                <Home className="h-4 w-4" />
                Voltar ao Acesso
              </Button>
              <Badge className="bg-pink-500 text-white">10 Técnicas Completas</Badge>
            </div>

            <div className="text-center space-y-4 mb-8">
              <div className="h-16 w-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-primary">10 Massagens para Gestação</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Técnicas seguras e eficazes para alívio de dores e relaxamento durante toda a gravidez
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Índice de Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {chapters.map((chapter, index) => (
                    <Card
                      key={chapter.id}
                      className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                      onClick={() => goToChapter(index)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {chapter.id}
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary">{chapter.title}</h3>
                              <p className="text-sm text-muted-foreground">{chapter.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 text-right">
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {chapter.duration}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {chapter.trimester}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    )
  }

  const chapter = chapters[currentChapter]

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 py-4">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={() => setShowIndex(true)} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Índice
            </Button>
            <Badge className="bg-pink-500 text-white">
              {currentChapter + 1} de {chapters.length}
            </Badge>
            <Button variant="outline" onClick={goHome} className="flex items-center gap-2 bg-transparent">
              <Home className="h-4 w-4" />
              Acesso
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pink-500/5 to-rose-500/5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="h-10 w-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                    {chapter.id}
                  </div>
                  {chapter.title}
                </CardTitle>
                <p className="text-muted-foreground text-lg">{chapter.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {chapter.duration}
                </Badge>
                <Badge variant="outline">{chapter.trimester} trimestre</Badge>
                <Badge
                  variant={
                    chapter.difficulty === "Fácil"
                      ? "default"
                      : chapter.difficulty === "Médio"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {chapter.difficulty}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            <div>
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2 text-lg">
                <Target className="h-5 w-5" />
                Benefícios desta Técnica
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {chapter.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                    <div className="h-2 w-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 text-lg">Passo a Passo</h4>
              <div className="space-y-4">
                {chapter.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5" />
                Precauções Importantes
              </h4>
              <p className="text-amber-700">{chapter.precautions}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevChapter}
            disabled={currentChapter === 0}
            className="flex items-center gap-2 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Técnica {currentChapter + 1} de {chapters.length}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={nextChapter}
            disabled={currentChapter === chapters.length - 1}
            className="flex items-center gap-2 bg-transparent"
          >
            Próxima
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
