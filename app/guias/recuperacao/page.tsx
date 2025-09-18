"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Home, Clock, Target, AlertCircle, BookOpen, Activity } from "lucide-react"

const chapters = [
  {
    id: 1,
    title: "Primeiros Dias: Cuidados Essenciais",
    duration: "Leitura: 10 min",
    phase: "0-7 dias",
    difficulty: "Fundamental",
    description: "Cuidados básicos e essenciais para os primeiros dias após o parto.",
    benefits: ["Acelera cicatrização", "Previne complicações", "Promove bem-estar"],
    instructions: [
      "Descanse sempre que o bebê dormir - seu corpo precisa se recuperar",
      "Mantenha higiene íntima com água morna, sem sabonetes perfumados",
      "Use absorventes pós-parto específicos, trocando frequentemente",
      "Aplique compressas frias na região perineal para reduzir inchaço",
      "Tome banhos mornos para relaxar e acelerar a cicatrização",
    ],
    precautions: "Procure ajuda médica imediatamente se tiver febre, sangramento excessivo ou dor intensa.",
  },
  {
    id: 2,
    title: "Recuperação Física: Exercícios Seguros",
    duration: "Prática: 15-20 min/dia",
    phase: "1-6 semanas",
    difficulty: "Progressivo",
    description: "Exercícios seguros e graduais para fortalecer o corpo após o parto.",
    benefits: ["Fortalece músculos", "Melhora postura", "Aumenta energia"],
    instructions: [
      "Comece com exercícios respiratórios profundos",
      "Pratique contrações do assoalho pélvico (exercícios de Kegel)",
      "Faça caminhadas leves, aumentando gradualmente a distância",
      "Exercite músculos abdominais com movimentos suaves",
      "Alongue pescoço e ombros para aliviar tensão da amamentação",
    ],
    precautions: "Aguarde liberação médica antes de iniciar exercícios mais intensos (geralmente 6-8 semanas).",
  },
  {
    id: 3,
    title: "Alimentação para Recuperação",
    duration: "Aplicação: Diária",
    phase: "Todas as fases",
    difficulty: "Nutritivo",
    description: "Como nutrir seu corpo adequadamente para uma recuperação mais rápida e saudável.",
    benefits: ["Acelera cicatrização", "Aumenta energia", "Melhora humor"],
    instructions: [
      "Consuma proteínas magras (frango, peixe, ovos, leguminosas)",
      "Inclua ferro na dieta (carnes vermelhas, espinafre, feijão)",
      "Coma frutas ricas em vitamina C (laranja, morango, kiwi)",
      "Beba pelo menos 2-3 litros de água por dia",
      "Evite dietas restritivas - seu corpo precisa de nutrientes",
    ],
    precautions: "Se estiver amamentando, suas necessidades calóricas são ainda maiores - não faça dietas.",
  },
  {
    id: 4,
    title: "Cuidados com Cesárea",
    duration: "Cuidado: Diário",
    phase: "Pós-cesárea",
    difficulty: "Específico",
    description: "Cuidados especiais para quem teve parto cesárea, focando na cicatrização da incisão.",
    benefits: ["Previne infecções", "Acelera cicatrização", "Reduz cicatrizes"],
    instructions: [
      "Mantenha a incisão limpa e seca",
      "Use roupas largas que não apertem a cicatriz",
      "Evite carregar peso por pelo menos 6 semanas",
      "Observe sinais de infecção (vermelhidão, calor, secreção)",
      "Faça curativos conforme orientação médica",
    ],
    precautions: "Não molhe a cicatriz nos primeiros dias e procure ajuda se notar sinais de infecção.",
  },
  {
    id: 5,
    title: "Saúde Mental e Emocional",
    duration: "Reflexão: 20-30 min",
    phase: "Todas as fases",
    difficulty: "Emocional",
    description: "Como cuidar da saúde mental durante o período de recuperação pós-parto.",
    benefits: ["Reduz ansiedade", "Melhora humor", "Fortalece vínculo"],
    instructions: [
      "Aceite ajuda de familiares e amigos",
      "Converse sobre seus sentimentos com pessoas de confiança",
      "Pratique técnicas de relaxamento e meditação",
      "Mantenha contato social, mesmo que virtual",
      "Procure ajuda profissional se sentir tristeza persistente",
    ],
    precautions: "Baby blues é normal até 2 semanas. Sintomas persistentes podem indicar depressão pós-parto.",
  },
  {
    id: 6,
    title: "Sono e Descanso Reparador",
    duration: "Aplicação: Noturna",
    phase: "Todas as fases",
    difficulty: "Adaptativo",
    description: "Estratégias para conseguir descanso adequado mesmo com um recém-nascido.",
    benefits: ["Melhora recuperação", "Aumenta energia", "Reduz estresse"],
    instructions: [
      "Durma quando o bebê dormir, mesmo durante o dia",
      "Crie um ambiente propício ao sono (escuro, silencioso, fresco)",
      "Peça ao parceiro para dividir os cuidados noturnos",
      "Evite cafeína após 14h",
      "Estabeleça uma rotina relaxante antes de dormir",
    ],
    precautions: "Privação de sono pode afetar sua recuperação e saúde mental - priorize o descanso.",
  },
  {
    id: 7,
    title: "Retorno à Intimidade",
    duration: "Conversa: 30 min",
    phase: "6+ semanas",
    difficulty: "Delicado",
    description: "Como retomar a intimidade física e emocional com o parceiro após o parto.",
    benefits: ["Fortalece relacionamento", "Melhora autoestima", "Reduz ansiedade"],
    instructions: [
      "Aguarde liberação médica (geralmente 6 semanas)",
      "Converse abertamente com seu parceiro sobre expectativas",
      "Use lubrificante - a amamentação pode causar ressecamento",
      "Comece devagar e pare se sentir desconforto",
      "Lembre-se que é normal não ter libido inicialmente",
    ],
    precautions: "Não se pressione - cada mulher tem seu tempo para se sentir pronta novamente.",
  },
  {
    id: 8,
    title: "Fortalecimento do Assoalho Pélvico",
    duration: "Exercício: 10-15 min/dia",
    phase: "2+ semanas",
    difficulty: "Técnico",
    description: "Exercícios específicos para fortalecer os músculos do assoalho pélvico.",
    benefits: ["Previne incontinência", "Melhora função sexual", "Fortalece core"],
    instructions: [
      "Identifique os músculos corretos (como se fosse segurar a urina)",
      "Contraia por 3-5 segundos, depois relaxe por 3-5 segundos",
      "Faça 10-15 repetições, 3 vezes ao dia",
      "Respire normalmente durante os exercícios",
      "Seja consistente - resultados aparecem em 6-8 semanas",
    ],
    precautions: "Se tiver dificuldades, procure um fisioterapeuta especializado em saúde da mulher.",
  },
  {
    id: 9,
    title: "Volta ao Trabalho",
    duration: "Planejamento: 1-2 semanas",
    phase: "3-4 meses",
    difficulty: "Organizacional",
    description: "Como se preparar física e emocionalmente para o retorno ao trabalho.",
    benefits: ["Reduz ansiedade", "Facilita transição", "Mantém amamentação"],
    instructions: [
      "Organize cuidados para o bebê com antecedência",
      "Pratique separações curtas antes do retorno definitivo",
      "Prepare um estoque de leite materno se estiver amamentando",
      "Converse com seu empregador sobre flexibilidade de horários",
      "Cuide da sua saúde mental durante a transição",
    ],
    precautions: "É normal sentir culpa e ansiedade - seja paciente consigo mesma durante a adaptação.",
  },
  {
    id: 10,
    title: "Planejamento Familiar Futuro",
    duration: "Reflexão: 45 min",
    phase: "6+ meses",
    difficulty: "Decisório",
    description: "Considerações sobre contracepção e planejamento de futuras gestações.",
    benefits: ["Evita gravidez não planejada", "Permite recuperação completa", "Facilita planejamento"],
    instructions: [
      "Discuta métodos contraceptivos com seu médico",
      "Considere métodos compatíveis com amamentação",
      "Reflita sobre o espaçamento ideal entre filhos (recomendado: 18-24 meses)",
      "Avalie sua situação financeira e emocional",
      "Converse com seu parceiro sobre planos futuros",
    ],
    precautions: "A ovulação pode retornar antes da primeira menstruação - use contraceptivos desde o início.",
  },
]

export default function GuiaRecuperacaoPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showIndex, setShowIndex] = useState(true)

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
    window.location.href = "/acesso"
  }

  if (showIndex) {
    return (
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" onClick={goHome} className="flex items-center gap-2 bg-transparent">
                <Home className="h-4 w-4" />
                Voltar ao Acesso
              </Button>
              <Badge className="bg-green-500 text-white">Guia Completo de Recuperação</Badge>
            </div>

            <div className="text-center space-y-4 mb-8">
              <div className="h-16 w-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
                <Activity className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Recuperação Pós-Parto</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guia completo para recuperação física e emocional após o nascimento do seu bebê
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-center">🌱 Fases da Recuperação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                      1
                    </div>
                    <h3 className="font-semibold">Primeiros Dias</h3>
                    <p className="text-sm text-muted-foreground">Cuidados essenciais</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                      2
                    </div>
                    <h3 className="font-semibold">Primeiras Semanas</h3>
                    <p className="text-sm text-muted-foreground">Recuperação física</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                      3
                    </div>
                    <h3 className="font-semibold">Primeiros Meses</h3>
                    <p className="text-sm text-muted-foreground">Adaptação e rotina</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                      4
                    </div>
                    <h3 className="font-semibold">Longo Prazo</h3>
                    <p className="text-sm text-muted-foreground">Nova normalidade</p>
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
                            <div className="h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 py-4">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={() => setShowIndex(true)} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Índice
            </Button>
            <Badge className="bg-green-500 text-white">
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
          <CardHeader className="bg-gradient-to-r from-green-500/5 to-emerald-500/5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
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
                    chapter.difficulty === "Fundamental"
                      ? "destructive"
                      : chapter.difficulty === "Emocional"
                        ? "secondary"
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
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
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
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
