import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, AlertCircle, Heart } from "lucide-react"

const massageTechniques = [
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

export function EbookContent() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-primary">10 Massagens para Alívio Total na Gestação</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Guia completo com técnicas seguras e eficazes para cada fase da sua gravidez
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          ✅ Acesso Completo Liberado
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center">📋 Índice das Técnicas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-2">
            {massageTechniques.map((technique) => (
              <a
                key={technique.id}
                href={`#tecnica-${technique.id}`}
                className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 transition-colors text-sm"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                  {technique.id}
                </span>
                {technique.title}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8">
        {massageTechniques.map((technique) => (
          <Card key={technique.id} id={`tecnica-${technique.id}`} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-primary">
                    {technique.id}. {technique.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{technique.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {technique.duration}
                  </Badge>
                  <Badge variant="outline">{technique.trimester} trimestre</Badge>
                  <Badge
                    variant={
                      technique.difficulty === "Fácil"
                        ? "default"
                        : technique.difficulty === "Médio"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {technique.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Benefícios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {technique.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Como Fazer</h4>
                <ol className="space-y-2">
                  {technique.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Precauções Importantes
                </h4>
                <p className="text-amber-700 text-sm">{technique.precautions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-primary">Lembre-se Sempre</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium">Consulte seu médico</p>
            <p className="text-muted-foreground">Sempre informe seu obstetra sobre as técnicas utilizadas</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium">Escute seu corpo</p>
            <p className="text-muted-foreground">Pare imediatamente se sentir qualquer desconforto</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium">Seja consistente</p>
            <p className="text-muted-foreground">Pratique regularmente para melhores resultados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
