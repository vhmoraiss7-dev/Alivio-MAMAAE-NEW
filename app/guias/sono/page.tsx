"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Home, Clock, Target, AlertCircle, BookOpen, Moon, Star } from "lucide-react"

const chapters = [
  {
    id: 1,
    title: "Entendendo o Sono do Recém-Nascido",
    duration: "Leitura: 12 min",
    phase: "0-3 meses",
    difficulty: "Fundamental",
    description: "Como funciona o sono dos bebês nos primeiros meses e o que esperar.",
    benefits: ["Reduz ansiedade dos pais", "Cria expectativas realistas", "Melhora compreensão"],
    instructions: [
      "Bebês dormem 14-17 horas por dia, mas em períodos curtos (2-4 horas)",
      "O ciclo de sono do bebê é diferente do adulto - mais sono REM",
      "Nos primeiros meses, não há diferença entre dia e noite para o bebê",
      "É normal o bebê acordar frequentemente para mamar",
      "O sono mais longo (6-8 horas) geralmente começa entre 3-6 meses",
    ],
    precautions: "Cada bebê é único - não compare com outros bebês. Paciência é fundamental.",
  },
  {
    id: 2,
    title: "Criando o Ambiente Ideal para o Sono",
    duration: "Preparação: 30 min",
    phase: "Desde o nascimento",
    difficulty: "Prático",
    description: "Como preparar o quarto e ambiente para promover um sono seguro e tranquilo.",
    benefits: ["Melhora qualidade do sono", "Aumenta segurança", "Facilita rotina"],
    instructions: [
      "Mantenha o quarto em temperatura confortável (18-20°C)",
      "Use cortinas blackout para escurecer o ambiente",
      "Elimine ruídos excessivos ou use ruído branco suave",
      "Certifique-se de que o berço atende às normas de segurança",
      "Mantenha o ambiente limpo e livre de alérgenos",
    ],
    precautions: "Nunca coloque travesseiros, cobertores soltos ou brinquedos no berço de bebês menores de 1 ano.",
  },
  {
    id: 3,
    title: "Estabelecendo uma Rotina de Sono",
    duration: "Implementação: 1-2 semanas",
    phase: "2-4 meses",
    difficulty: "Consistente",
    description: "Como criar e manter uma rotina consistente que ajude o bebê a dormir melhor.",
    benefits: ["Previsibilidade para o bebê", "Melhora qualidade do sono", "Reduz resistência"],
    instructions: [
      "Estabeleça horários consistentes para dormir e acordar",
      "Crie uma sequência de atividades antes de dormir (banho, massagem, história)",
      "Diminua estímulos 1 hora antes do horário de dormir",
      "Use sinais visuais (luzes baixas) para indicar que é hora de dormir",
      "Seja consistente mesmo nos fins de semana",
    ],
    precautions: "Leva tempo para estabelecer uma rotina - seja paciente e consistente por pelo menos 2 semanas.",
  },
  {
    id: 4,
    title: "Técnicas de Acalmar o Bebê",
    duration: "Prática: 10-15 min",
    phase: "0-6 meses",
    difficulty: "Técnico",
    description: "Métodos eficazes para acalmar bebês agitados e ajudá-los a adormecer.",
    benefits: ["Reduz choro", "Acelera adormecer", "Fortalece vínculo"],
    instructions: [
      "Swaddling: enrole o bebê firmemente em uma manta",
      "Shushing: faça sons 'shhh' próximo ao ouvido do bebê",
      "Balanço suave: movimento rítmico e constante",
      "Sucção: ofereça chupeta ou dedo limpo",
      "Posição de lado: segure o bebê de lado (nunca deixe dormir assim)",
    ],
    precautions:
      "Use essas técnicas para acalmar, mas coloque o bebê no berço acordado para que aprenda a adormecer sozinho.",
  },
  {
    id: 5,
    title: "Diferenciando Dia e Noite",
    duration: "Aplicação: Diária",
    phase: "6 semanas - 4 meses",
    difficulty: "Educativo",
    description: "Como ensinar o bebê a diferença entre dia e noite para melhorar o sono noturno.",
    benefits: ["Melhora sono noturno", "Estabelece ritmo circadiano", "Reduz confusão dia/noite"],
    instructions: [
      "Durante o dia: mantenha ambiente claro, com atividades e interações",
      "Durante mamadas noturnas: use luz baixa, seja calma e silenciosa",
      "Exponha o bebê à luz natural durante o dia",
      "À noite: diminua estímulos, fale baixo, evite brincadeiras",
      "Seja consistente com essas diferenças todos os dias",
    ],
    precautions: "Esse processo leva tempo - geralmente entre 6-12 semanas para o bebê entender a diferença.",
  },
  {
    id: 6,
    title: "Lidando com Regressões do Sono",
    duration: "Gestão: Conforme necessário",
    phase: "4, 8-10, 12, 18 meses",
    difficulty: "Desafiador",
    description: "Como identificar e lidar com as regressões temporárias do sono.",
    benefits: ["Reduz frustração dos pais", "Mantém rotina", "Acelera recuperação"],
    instructions: [
      "Reconheça que regressões são temporárias (2-6 semanas)",
      "Mantenha a rotina estabelecida, mesmo que seja difícil",
      "Ofereça mais conforto durante o dia",
      "Seja paciente - não introduza novos hábitos ruins",
      "Lembre-se que geralmente coincidem com marcos de desenvolvimento",
    ],
    precautions: "Não mude drasticamente a rotina durante regressões - isso pode prolongar o problema.",
  },
  {
    id: 7,
    title: "Métodos de Treinamento do Sono",
    duration: "Implementação: 1-3 semanas",
    phase: "4-6 meses+",
    difficulty: "Intensivo",
    description: "Diferentes abordagens para ensinar o bebê a dormir sozinho.",
    benefits: ["Independência do sono", "Melhora sono da família", "Reduz dependências"],
    instructions: [
      "Método Ferber: deixe chorar por períodos graduais",
      "Método da cadeira: reduza gradualmente sua presença",
      "Método pick-up/put-down: console quando necessário",
      "Método sem lágrimas: mudanças muito graduais",
      "Escolha o método que se alinha com sua filosofia de criação",
    ],
    precautions: "Só inicie após 4-6 meses e quando o bebê estiver saudável. Seja consistente com o método escolhido.",
  },
  {
    id: 8,
    title: "Cochilos Diurnos Eficazes",
    duration: "Organização: Diária",
    phase: "3 meses+",
    difficulty: "Organizacional",
    description: "Como estruturar os cochilos diurnos para melhorar o sono noturno.",
    benefits: ["Melhora humor do bebê", "Facilita sono noturno", "Cria previsibilidade"],
    instructions: [
      "0-3 meses: cochilos a cada 1-2 horas acordado",
      "3-6 meses: 3-4 cochilos por dia",
      "6-12 meses: 2-3 cochilos por dia",
      "12+ meses: 1-2 cochilos por dia",
      "Observe sinais de sono e não deixe ficar muito cansado",
    ],
    precautions: "Cochilos muito longos ou muito tarde podem atrapalhar o sono noturno.",
  },
  {
    id: 9,
    title: "Sono Seguro: Prevenindo SMSI",
    duration: "Leitura: 15 min",
    phase: "0-12 meses",
    difficulty: "Crítico",
    description: "Diretrizes essenciais para um sono seguro e prevenção da Síndrome da Morte Súbita Infantil.",
    benefits: ["Máxima segurança", "Reduz riscos", "Tranquilidade dos pais"],
    instructions: [
      "Sempre coloque o bebê para dormir de barriga para cima",
      "Use colchão firme com lençol bem ajustado",
      "Mantenha o berço livre de objetos soltos",
      "Evite superaquecimento - vista o bebê levemente",
      "Não fume durante a gravidez ou perto do bebê",
    ],
    precautions: "NUNCA coloque o bebê para dormir de bruços ou de lado. Siga sempre as diretrizes de sono seguro.",
  },
  {
    id: 10,
    title: "Transições e Mudanças no Sono",
    duration: "Adaptação: 1-2 semanas",
    phase: "Conforme crescimento",
    difficulty: "Adaptativo",
    description: "Como lidar com mudanças naturais nos padrões de sono conforme o bebê cresce.",
    benefits: ["Facilita transições", "Mantém bons hábitos", "Reduz resistência"],
    instructions: [
      "Transição do moisés para berço: faça gradualmente",
      "Mudança de 3 para 2 cochilos: observe sinais de prontidão",
      "Transição para cama de criança: aguarde até 2-3 anos",
      "Mudanças de horário: ajuste gradualmente (15 min por dia)",
      "Mantenha elementos familiares durante mudanças",
    ],
    precautions: "Faça uma mudança por vez e aguarde adaptação antes de implementar outras mudanças.",
  },
]

export default function GuiaSonoPage() {
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
        <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" onClick={goHome} className="flex items-center gap-2 bg-transparent">
                <Home className="h-4 w-4" />
                Voltar ao Acesso
              </Button>
              <Badge className="bg-purple-500 text-white">Sono Tranquilo Garantido</Badge>
            </div>

            <div className="text-center space-y-4 mb-8">
              <div className="h-16 w-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto">
                <Moon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Sono Tranquilo do Bebê</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Métodos comprovados para estabelecer rotina de sono saudável desde o nascimento
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-center">🌙 Jornada do Sono</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto">
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Recém-nascido</h3>
                    <p className="text-sm text-muted-foreground">0-3 meses</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto">
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Estabelecimento</h3>
                    <p className="text-sm text-muted-foreground">3-6 meses</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto">
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Consolidação</h3>
                    <p className="text-sm text-muted-foreground">6-12 meses</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 w-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto">
                      <Star className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">Maturidade</h3>
                    <p className="text-sm text-muted-foreground">12+ meses</p>
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
                            <div className="h-8 w-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
      <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 py-4">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={() => setShowIndex(true)} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Índice
            </Button>
            <Badge className="bg-purple-500 text-white">
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
          <CardHeader className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="h-10 w-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
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
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
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
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
