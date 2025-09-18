import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, AlertCircle, Heart, Zap } from "lucide-react"

const recuperacaoPhases = [
  {
    id: 1,
    title: "Primeiros 7 Dias - Repouso Ativo",
    duration: "1 semana",
    phase: "Pós-parto imediato",
    difficulty: "Fundamental",
    description: "Foco na recuperação inicial, cicatrização e estabelecimento da amamentação.",
    benefits: ["Acelera cicatrização", "Previne complicações", "Estabelece rotina"],
    instructions: [
      "Descanse sempre que o bebê dormir",
      "Aceite ajuda para tarefas domésticas",
      "Mantenha higiene íntima adequada",
      "Hidrate-se abundantemente",
    ],
    precautions: "Evite esforços físicos. Observe sinais de infecção.",
  },
  {
    id: 2,
    title: "Semanas 2-6 - Recuperação Gradual",
    duration: "4 semanas",
    phase: "Pós-parto inicial",
    difficulty: "Moderado",
    description: "Retomada gradual das atividades com foco na recuperação física e emocional.",
    benefits: ["Fortalece músculos", "Melhora disposição", "Reduz ansiedade"],
    instructions: [
      "Inicie caminhadas leves de 10-15 minutos",
      "Pratique exercícios respiratórios",
      "Mantenha alimentação nutritiva",
      "Durma quando possível",
    ],
    precautions: "Respeite os limites do seu corpo. Pare se sentir dor.",
  },
  {
    id: 3,
    title: "Exercícios para o Assoalho Pélvico",
    duration: "5-10 min diários",
    phase: "A partir da 2ª semana",
    difficulty: "Fácil",
    description: "Fortalecimento dos músculos do assoalho pélvico para prevenir incontinência.",
    benefits: ["Previne incontinência", "Melhora função sexual", "Fortalece core"],
    instructions: [
      "Contraia os músculos como se fosse interromper o xixi",
      "Mantenha por 5 segundos, relaxe por 5",
      "Repita 10 vezes, 3 séries por dia",
      "Respire normalmente durante o exercício",
    ],
    precautions: "Não prenda a respiração. Seja consistente.",
  },
  {
    id: 4,
    title: "Alimentação para Recuperação",
    duration: "Contínuo",
    phase: "Todo período",
    difficulty: "Fácil",
    description: "Nutrição adequada para acelerar a recuperação e manter energia.",
    benefits: ["Acelera cicatrização", "Aumenta energia", "Melhora humor"],
    instructions: [
      "Consuma proteínas em todas as refeições",
      "Inclua ferro (carnes, feijão, espinafre)",
      "Beba pelo menos 2-3 litros de água por dia",
      "Evite dietas restritivas",
    ],
    precautions: "Se amamentando, precisa de 500 calorias extras por dia.",
  },
  {
    id: 5,
    title: "Cuidados com Cicatrizes",
    duration: "Até cicatrização",
    phase: "Primeiras semanas",
    difficulty: "Importante",
    description: "Como cuidar adequadamente de cicatrizes de cesárea ou episiotomia.",
    benefits: ["Previne infecção", "Melhora cicatrização", "Reduz dor"],
    instructions: [
      "Mantenha a área limpa e seca",
      "Use roupas íntimas de algodão",
      "Evite produtos perfumados na região",
      "Observe sinais de infecção",
    ],
    precautions: "Vermelhidão, calor ou secreção podem indicar infecção.",
  },
  {
    id: 6,
    title: "Saúde Mental e Emocional",
    duration: "Contínuo",
    phase: "Todo período",
    difficulty: "Essencial",
    description: "Cuidados com o bem-estar emocional e prevenção da depressão pós-parto.",
    benefits: ["Previne depressão", "Melhora vínculo", "Aumenta confiança"],
    instructions: [
      "Converse sobre seus sentimentos",
      "Mantenha contato com amigos e família",
      "Pratique atividades prazerosas",
      "Procure ajuda profissional se necessário",
    ],
    precautions: "Tristeza persistente por mais de 2 semanas requer atenção.",
  },
  {
    id: 7,
    title: "Retorno à Atividade Sexual",
    duration: "Após liberação médica",
    phase: "6-8 semanas pós-parto",
    difficulty: "Delicado",
    description: "Como retomar a intimidade de forma segura e confortável.",
    benefits: ["Fortalece relacionamento", "Melhora autoestima", "Reduz tensão"],
    instructions: [
      "Aguarde liberação médica (6-8 semanas)",
      "Use lubrificante se necessário",
      "Comunique-se abertamente com o parceiro",
      "Vá devagar e respeite seus limites",
    ],
    precautions: "Dor não é normal. Procure orientação médica se persistir.",
  },
  {
    id: 8,
    title: "Exercícios de Fortalecimento",
    duration: "20-30 min",
    phase: "Após 6 semanas",
    difficulty: "Progressivo",
    description: "Programa de exercícios para recuperar força e condicionamento físico.",
    benefits: ["Recupera força", "Melhora postura", "Aumenta energia"],
    instructions: [
      "Comece com exercícios leves",
      "Progrida gradualmente",
      "Foque em core e postura",
      "Inclua exercícios cardiovasculares leves",
    ],
    precautions: "Sempre com liberação médica. Pare se sentir dor abdominal.",
  },
]

export function GuiaRecuperacao() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <div className="flex justify-center mb-4">
          <Zap className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-green-600">Recuperação Pós-Parto</h1>
        <h2 className="text-2xl font-semibold text-primary">Guia Completo para Recuperação Física e Emocional</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Seu roteiro completo para uma recuperação saudável, segura e eficiente após o parto
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          💪 Recuperação Completa
        </div>
      </div>

      <Card className="mb-8 border-green-200">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-center text-green-700">📅 Linha do Tempo da Recuperação</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                1-7
              </div>
              <div>
                <div className="font-semibold">Primeiros 7 dias</div>
                <div className="text-sm text-muted-foreground">Repouso, cicatrização e adaptação</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                2-6
              </div>
              <div>
                <div className="font-semibold">Semanas 2-6</div>
                <div className="text-sm text-muted-foreground">Recuperação gradual e fortalecimento</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                6+
              </div>
              <div>
                <div className="font-semibold">Após 6 semanas</div>
                <div className="text-sm text-muted-foreground">Retorno às atividades normais</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8">
        {recuperacaoPhases.map((phase) => (
          <Card key={phase.id} className="overflow-hidden border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-green-700">
                    {phase.id}. {phase.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-700">
                    <Clock className="h-3 w-3" />
                    {phase.duration}
                  </Badge>
                  <Badge variant="outline" className="border-green-200">
                    {phase.phase}
                  </Badge>
                  <Badge className="bg-green-600">{phase.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Benefícios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {phase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-600 mb-3">Como Fazer</h4>
                <ol className="space-y-2">
                  {phase.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-medium">
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
                  Atenção Especial
                </h4>
                <p className="text-amber-700 text-sm">{phase.precautions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-green-700">Sua Recuperação é Única</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <p className="font-medium">Respeite seu ritmo</p>
            <p className="text-muted-foreground">Cada mulher se recupera de forma diferente</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-6 w-6 text-green-600" />
            </div>
            <p className="font-medium">Procure ajuda</p>
            <p className="text-muted-foreground">Não hesite em buscar apoio profissional</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <p className="font-medium">Seja paciente</p>
            <p className="text-muted-foreground">A recuperação completa leva tempo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
