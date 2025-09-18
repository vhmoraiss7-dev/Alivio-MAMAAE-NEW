"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Home, Clock, Target, AlertCircle, Baby, BookOpen } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const chapters = [
  {
    id: 1,
    title: "P - Preparação para Amamentar",
    duration: "Leitura: 8 min",
    phase: "Pré-natal",
    difficulty: "Essencial",
    description: "Como se preparar física e mentalmente para uma amamentação bem-sucedida desde a gravidez.",
    benefits: ["Reduz ansiedade", "Prepara os seios", "Aumenta confiança"],
    instructions: [
      "Converse com seu obstetra sobre amamentação durante o pré-natal",
      "Participe de grupos de apoio à amamentação",
      "Prepare o ambiente em casa (cadeira confortável, almofadas)",
      "Invista em sutiãs de amamentação de qualidade",
      "Leia sobre os benefícios da amamentação para você e o bebê",
    ],
    precautions: "Evite produtos que prometem 'preparar' os mamilos - não são necessários e podem causar irritação.",
  },
  {
    id: 2,
    title: "E - Estabelecimento da Primeira Mamada",
    duration: "Prática: 15-30 min",
    phase: "Primeiras horas",
    difficulty: "Crítico",
    description: "Como iniciar a amamentação logo após o nascimento para estabelecer uma boa produção de leite.",
    benefits: ["Estimula produção de leite", "Fortalece vínculo", "Protege o bebê"],
    instructions: [
      "Solicite contato pele a pele imediatamente após o nascimento",
      "Ofereça o seio na primeira hora de vida do bebê",
      "Observe os sinais de que o bebê está pronto para mamar",
      "Peça ajuda da equipe de enfermagem para posicionamento",
      "Mantenha o bebê próximo (alojamento conjunto)",
    ],
    precautions: "Não se preocupe se o bebê não mamar imediatamente - alguns precisam de mais tempo para se adaptar.",
  },
  {
    id: 3,
    title: "G - Garantindo a Pega Correta",
    duration: "Prática: 5-10 min",
    phase: "Primeiros dias",
    difficulty: "Fundamental",
    description:
      "Técnicas para garantir que o bebê faça a pega correta, evitando dor e garantindo boa transferência de leite.",
    benefits: ["Evita dor nos mamilos", "Melhora transferência de leite", "Previne mastite"],
    instructions: [
      "Posicione o bebê barriga com barriga, nariz na altura do mamilo",
      "Espere o bebê abrir bem a boca antes de aproximá-lo do seio",
      "Certifique-se de que o bebê abocanha a aréola, não apenas o mamilo",
      "Observe se os lábios do bebê estão virados para fora",
      "Escute a deglutição - sinal de que está transferindo leite",
    ],
    precautions: "Se sentir dor, interrompa suavemente e reposicione. Amamentação não deve doer.",
  },
  {
    id: 4,
    title: "A - Aumentando a Produção de Leite",
    duration: "Aplicação: Todo o dia",
    phase: "Primeiras semanas",
    difficulty: "Importante",
    description: "Estratégias naturais e eficazes para aumentar e manter uma boa produção de leite materno.",
    benefits: ["Aumenta volume de leite", "Mantém produção estável", "Satisfaz o bebê"],
    instructions: [
      "Amamente em livre demanda - sempre que o bebê quiser",
      "Ofereça os dois seios a cada mamada",
      "Beba bastante água (pelo menos 2-3 litros por dia)",
      "Descanse sempre que possível",
      "Mantenha alimentação equilibrada e nutritiva",
    ],
    precautions: "Evite chás e medicamentos para 'aumentar o leite' sem orientação médica.",
  },
  {
    id: 5,
    title: "Posições para Amamentar",
    duration: "Prática: 10-15 min",
    phase: "Todas as fases",
    difficulty: "Versátil",
    description: "Diferentes posições para amamentar que proporcionam conforto para mãe e bebê.",
    benefits: ["Previne dores nas costas", "Varia estímulo nos seios", "Adapta-se a diferentes situações"],
    instructions: [
      "Posição tradicional: bebê de lado, barriga com barriga",
      "Posição cavalinho: bebê sentado de frente para o seio",
      "Posição deitada: mãe e bebê de lado na cama",
      "Posição invertida: bebê embaixo do braço como uma bola",
      "Use almofadas para apoio e conforto",
    ],
    precautions: "Mude de posição se sentir desconforto ou se o bebê não estiver mamando bem.",
  },
  {
    id: 6,
    title: "Sinais de Fome do Bebê",
    duration: "Observação: Contínua",
    phase: "Todas as fases",
    difficulty: "Observacional",
    description: "Como identificar quando o bebê está com fome, antes mesmo do choro.",
    benefits: ["Evita choro excessivo", "Facilita a pega", "Reduz estresse"],
    instructions: [
      "Observe movimentos de sucção mesmo dormindo",
      "Note quando o bebê leva as mãos à boca",
      "Perceba movimentos de procura com a cabeça",
      "Identifique sons suaves e gemidos",
      "O choro é o último sinal de fome",
    ],
    precautions: "Bebês muito sonolentos podem não mostrar sinais claros - ofereça o seio regularmente.",
  },
  {
    id: 7,
    title: "Cuidados com os Seios",
    duration: "Cuidado: 5 min/dia",
    phase: "Todas as fases",
    difficulty: "Preventivo",
    description: "Como cuidar dos seios durante a amamentação para prevenir problemas.",
    benefits: ["Previne rachaduras", "Evita infecções", "Mantém conforto"],
    instructions: [
      "Lave os seios apenas com água durante o banho",
      "Deixe secar ao ar livre após as mamadas",
      "Use o próprio leite materno para hidratar os mamilos",
      "Troque absorventes de seio regularmente",
      "Use sutiãs limpos e bem ajustados",
    ],
    precautions: "Evite sabonetes, cremes perfumados ou álcool nos mamilos.",
  },
  {
    id: 8,
    title: "Problemas Comuns e Soluções",
    duration: "Referência: Conforme necessário",
    phase: "Todas as fases",
    difficulty: "Solucionador",
    description: "Como identificar e resolver os problemas mais comuns da amamentação.",
    benefits: ["Resolve dificuldades rapidamente", "Evita desmame precoce", "Mantém confiança"],
    instructions: [
      "Mamilos doloridos: verifique a pega e posição",
      "Ingurgitamento: amamente frequentemente e use compressas",
      "Pouco leite: aumente frequência das mamadas",
      "Muito leite: amamente em uma posição mais reclinada",
      "Procure ajuda profissional quando necessário",
    ],
    precautions: "Não hesite em procurar ajuda de consultora em amamentação ou pediatra.",
  },
  {
    id: 9,
    title: "Amamentação e Trabalho",
    duration: "Planejamento: 30 min",
    phase: "Retorno ao trabalho",
    difficulty: "Organizacional",
    description: "Como manter a amamentação após o retorno ao trabalho.",
    benefits: ["Mantém amamentação", "Reduz custos", "Preserva vínculo"],
    instructions: [
      "Comece a ordenha 2-3 semanas antes de voltar ao trabalho",
      "Invista em uma bomba de leite de qualidade",
      "Congele o leite em porções pequenas (60-120ml)",
      "Negocie horários para ordenha no trabalho",
      "Mantenha mamadas diretas quando estiver em casa",
    ],
    precautions: "Leite materno dura 6 meses no freezer e 5 dias na geladeira.",
  },
  {
    id: 10,
    title: "Desmame Gradual e Respeitoso",
    duration: "Processo: Semanas/meses",
    phase: "Quando decidir",
    difficulty: "Emocional",
    description: "Como fazer o desmame de forma gradual e respeitosa para mãe e bebê.",
    benefits: ["Reduz desconforto", "Preserva vínculo", "Respeita o bebê"],
    instructions: [
      "Substitua uma mamada por vez, começando pela menos importante",
      "Ofereça muito carinho e atenção durante a transição",
      "Use distrações e atividades especiais nos horários das mamadas",
      "Seja paciente - o processo pode levar semanas ou meses",
      "Cuide da sua saúde emocional durante o processo",
    ],
    precautions: "Desmame abrupto pode causar ingurgitamento e mastite. Sempre faça gradualmente.",
  },
]

export default function GuiaAmamentacaoPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤱</div>
          <h1 className="text-2xl font-bold mb-2">Validando acesso...</h1>
          <p className="text-muted-foreground">Aguarde um momento</p>
        </div>
      </div>
    )
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex items-center justify-center">
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
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" onClick={goHome} className="flex items-center gap-2 bg-transparent">
                <Home className="h-4 w-4" />
                Voltar ao Acesso
              </Button>
              <Badge className="bg-blue-500 text-white">Método P.E.G.A Completo</Badge>
            </div>

            <div className="text-center space-y-4 mb-8">
              <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto">
                <Baby className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Mamãe Conectada - Amamentação</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Método P.E.G.A completo para uma amamentação de sucesso do início ao fim
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-center">🎯 O Método P.E.G.A</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                      P
                    </div>
                    <h3 className="font-semibold">Preparação</h3>
                    <p className="text-sm text-muted-foreground">Base sólida desde a gravidez</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                      E
                    </div>
                    <h3 className="font-semibold">Estabelecimento</h3>
                    <p className="text-sm text-muted-foreground">Primeiras mamadas cruciais</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                      G
                    </div>
                    <h3 className="font-semibold">Garantia</h3>
                    <p className="text-sm text-muted-foreground">Pega correta e eficiente</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                      A
                    </div>
                    <h3 className="font-semibold">Aumento</h3>
                    <p className="text-sm text-muted-foreground">Produção abundante de leite</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Índice Completo
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
                            <div className="h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                              {chapter.phase}
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
      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 py-4">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={() => setShowIndex(true)} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Índice
            </Button>
            <Badge className="bg-blue-500 text-white">
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
          <CardHeader className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
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
                <Badge variant="outline">{chapter.phase}</Badge>
                <Badge
                  variant={
                    chapter.difficulty === "Essencial"
                      ? "destructive"
                      : chapter.difficulty === "Crítico"
                        ? "destructive"
                        : "default"
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
                Benefícios
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {chapter.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 text-lg">Como Aplicar</h4>
              <div className="space-y-4">
                {chapter.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                Atenção Especial
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
              Capítulo {currentChapter + 1} de {chapters.length}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={nextChapter}
            disabled={currentChapter === chapters.length - 1}
            className="flex items-center gap-2 bg-transparent"
          >
            Próximo
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
