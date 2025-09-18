import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, AlertCircle, Heart, Baby } from "lucide-react"

const amamentacaoTechniques = [
  {
    id: 1,
    title: "P - Posicionamento Correto",
    duration: "Sempre",
    phase: "Todas as fases",
    difficulty: "Fundamental",
    description: "A base do método P.E.G.A: posicionamento adequado para mãe e bebê.",
    benefits: ["Previne dor nos mamilos", "Melhora a pega", "Aumenta produção de leite"],
    instructions: [
      "Sente-se confortavelmente com as costas apoiadas",
      "Posicione o bebê barriga com barriga",
      "Alinhe orelha, ombro e quadril do bebê",
      "Apoie o bebê com travesseiros se necessário",
    ],
    precautions: "Nunca force a posição. Ajuste até ficar confortável para ambos.",
  },
  {
    id: 2,
    title: "E - Estímulo da Produção",
    duration: "2-3 min",
    phase: "Início da mamada",
    difficulty: "Fácil",
    description: "Técnicas para estimular a descida do leite e aumentar a produção.",
    benefits: ["Aumenta produção", "Facilita descida do leite", "Reduz ingurgitamento"],
    instructions: [
      "Massageie suavemente as mamas antes da mamada",
      "Use compressas mornas por 2-3 minutos",
      "Faça movimentos circulares do centro para fora",
      "Estimule os mamilos delicadamente",
    ],
    precautions: "Movimentos sempre suaves. Pare se sentir dor.",
  },
  {
    id: 3,
    title: "G - Garantia da Pega Correta",
    duration: "Até acertar",
    phase: "Início da mamada",
    difficulty: "Médio",
    description: "Como garantir que o bebê faça a pega correta para mamada eficiente.",
    benefits: ["Evita dor", "Melhora transferência de leite", "Previne fissuras"],
    instructions: [
      "Espere o bebê abrir bem a boca",
      "Direcione o mamilo para o céu da boca",
      "Certifique-se que o bebê abocanha a aréola",
      "Verifique se os lábios estão virados para fora",
    ],
    precautions: "Se doer, interrompa e reposicione. Dor não é normal.",
  },
  {
    id: 4,
    title: "A - Acompanhamento da Mamada",
    duration: "Durante toda mamada",
    phase: "Mamada ativa",
    difficulty: "Fácil",
    description: "Como acompanhar e garantir uma mamada eficiente e satisfatória.",
    benefits: ["Garante saciedade do bebê", "Monitora transferência", "Previne problemas"],
    instructions: [
      "Observe os movimentos de sucção do bebê",
      "Escute os sons de deglutição",
      "Mantenha contato visual e carinho",
      "Troque de mama quando necessário",
    ],
    precautions: "Cada bebê tem seu ritmo. Não apresse o processo.",
  },
  {
    id: 5,
    title: "Preparação das Mamas",
    duration: "5-10 min",
    phase: "Pré-natal",
    difficulty: "Fácil",
    description: "Como preparar as mamas durante a gravidez para facilitar a amamentação.",
    benefits: ["Prepara os mamilos", "Reduz sensibilidade", "Facilita início"],
    instructions: [
      "Massageie suavemente com óleo natural",
      "Exponha os mamilos ao ar livre",
      "Use sutiãs adequados sem aros",
      "Hidrate a pele regularmente",
    ],
    precautions: "Apenas após 36 semanas. Movimentos muito suaves.",
  },
  {
    id: 6,
    title: "Primeiras 24 Horas",
    duration: "Contínuo",
    phase: "Pós-parto imediato",
    difficulty: "Médio",
    description: "Estratégias para estabelecer a amamentação nas primeiras horas de vida.",
    benefits: ["Estabelece vínculo", "Estimula produção", "Fortalece imunidade"],
    instructions: [
      "Inicie na primeira hora após o parto",
      "Mantenha contato pele a pele",
      "Ofereça o peito em livre demanda",
      "Peça ajuda da equipe médica",
    ],
    precautions: "Não desista se não der certo imediatamente. É um aprendizado.",
  },
  {
    id: 7,
    title: "Resolução de Problemas Comuns",
    duration: "Conforme necessário",
    phase: "Qualquer momento",
    difficulty: "Avançado",
    description: "Como lidar com fissuras, ingurgitamento e outros problemas comuns.",
    benefits: ["Resolve dificuldades", "Mantém amamentação", "Reduz desconforto"],
    instructions: [
      "Identifique o problema específico",
      "Aplique a solução adequada",
      "Procure ajuda profissional se necessário",
      "Mantenha a persistência e paciência",
    ],
    precautions: "Problemas persistentes requerem avaliação profissional.",
  },
  {
    id: 8,
    title: "Amamentação e Trabalho",
    duration: "Planejamento",
    phase: "Retorno ao trabalho",
    difficulty: "Médio",
    description: "Como manter a amamentação após retornar ao trabalho.",
    benefits: ["Mantém amamentação", "Facilita transição", "Preserva vínculo"],
    instructions: [
      "Comece a ordenha algumas semanas antes",
      "Estabeleça rotina de extração no trabalho",
      "Armazene o leite adequadamente",
      "Mantenha mamadas diretas quando possível",
    ],
    precautions: "Planeje com antecedência. Conheça seus direitos trabalhistas.",
  },
]

export function GuiaAmamentacao() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <div className="flex justify-center mb-4">
          <Baby className="h-16 w-16 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold text-blue-600">Mamãe Conectada</h1>
        <h2 className="text-2xl font-semibold text-primary">Método P.E.G.A para Amamentação de Sucesso</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Guia completo com o método comprovado para estabelecer e manter uma amamentação tranquila e eficiente
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          🤱 Método P.E.G.A Completo
        </div>
      </div>

      <Card className="mb-8 border-blue-200">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-center text-blue-700">🔤 O Método P.E.G.A</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">P</div>
              <div className="font-semibold">Posicionamento</div>
              <div className="text-sm text-muted-foreground">Correto para mãe e bebê</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">E</div>
              <div className="font-semibold">Estímulo</div>
              <div className="text-sm text-muted-foreground">Da produção de leite</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">G</div>
              <div className="font-semibold">Garantia</div>
              <div className="text-sm text-muted-foreground">Da pega correta</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">A</div>
              <div className="font-semibold">Acompanhamento</div>
              <div className="text-sm text-muted-foreground">Da mamada eficiente</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8">
        {amamentacaoTechniques.map((technique) => (
          <Card key={technique.id} className="overflow-hidden border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-blue-700">
                    {technique.id}. {technique.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{technique.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-100 text-blue-700">
                    <Clock className="h-3 w-3" />
                    {technique.duration}
                  </Badge>
                  <Badge variant="outline" className="border-blue-200">
                    {technique.phase}
                  </Badge>
                  <Badge className="bg-blue-600">{technique.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Benefícios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {technique.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600 mb-3">Como Fazer</h4>
                <ol className="space-y-2">
                  {technique.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
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
                  Dicas Importantes
                </h4>
                <p className="text-amber-700 text-sm">{technique.precautions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">Lembre-se: Amamentação é Aprendizado</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <p className="font-medium">Seja paciente</p>
            <p className="text-muted-foreground">Tanto você quanto seu bebê estão aprendendo</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Baby className="h-6 w-6 text-blue-600" />
            </div>
            <p className="font-medium">Procure ajuda</p>
            <p className="text-muted-foreground">Consultores em amamentação podem fazer a diferença</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <p className="font-medium">Confie em você</p>
            <p className="text-muted-foreground">Seu corpo foi feito para isso, você consegue!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
