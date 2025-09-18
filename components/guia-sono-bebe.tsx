import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, AlertCircle, Moon, Sun } from "lucide-react"

const sonoMethods = [
  {
    id: 1,
    title: "Estabelecendo Rotina de Sono (0-3 meses)",
    duration: "2-4 semanas",
    age: "0-3 meses",
    difficulty: "Fundamental",
    description: "Como criar uma rotina de sono saudável desde os primeiros dias de vida.",
    benefits: ["Melhora qualidade do sono", "Reduz choro noturno", "Facilita adaptação"],
    instructions: [
      "Estabeleça diferença entre dia e noite",
      "Crie ritual de sono consistente",
      "Mantenha ambiente calmo e escuro à noite",
      "Alimente o bebê antes de dormir",
    ],
    precautions: "Bebês muito pequenos ainda não têm ritmo circadiano estabelecido.",
  },
  {
    id: 2,
    title: "Método do Embrulho Seguro",
    duration: "Até 4 meses",
    age: "0-4 meses",
    difficulty: "Fácil",
    description: "Técnica de embrulhar o bebê para proporcionar segurança e melhor sono.",
    benefits: ["Reduz reflexo de Moro", "Aumenta tempo de sono", "Acalma o bebê"],
    instructions: [
      "Use manta leve e respirável",
      "Deixe espaço para as pernas se moverem",
      "Mantenha braços junto ao corpo",
      "Certifique-se que não está muito apertado",
    ],
    precautions: "Pare quando o bebê começar a rolar. Nunca cubra a cabeça.",
  },
  {
    id: 3,
    title: "Técnica do Ruído Branco",
    duration: "Conforme necessário",
    age: "0-12 meses",
    difficulty: "Fácil",
    description: "Como usar sons consistentes para acalmar e ajudar o bebê a dormir.",
    benefits: ["Mascara ruídos externos", "Acalma o bebê", "Melhora qualidade do sono"],
    instructions: [
      "Use som constante e suave",
      "Mantenha volume baixo a moderado",
      "Posicione longe do ouvido do bebê",
      "Use durante sonecas e sono noturno",
    ],
    precautions: "Volume não deve exceder 50 decibéis. Não use muito alto.",
  },
  {
    id: 4,
    title: "Método da Cadeira (4-6 meses)",
    duration: "1-2 semanas",
    age: "4-6 meses",
    difficulty: "Médio",
    description: "Técnica gradual para ensinar o bebê a dormir sozinho.",
    benefits: ["Ensina autodependência", "Reduz dependência dos pais", "Melhora sono da família"],
    instructions: [
      "Coloque uma cadeira ao lado do berço",
      "Sente-se na cadeira até o bebê dormir",
      "A cada 3 dias, afaste a cadeira",
      "Continue até sair completamente do quarto",
    ],
    precautions: "Requer consistência. Pode levar algumas semanas.",
  },
  {
    id: 5,
    title: "Rotina dos 5 S's",
    duration: "Conforme necessário",
    age: "0-6 meses",
    difficulty: "Médio",
    description: "Método que combina 5 técnicas para acalmar bebês agitados.",
    benefits: ["Acalma rapidamente", "Reduz choro", "Facilita o sono"],
    instructions: [
      "Swaddle (embrulhar) o bebê",
      "Side/Stomach (posição de lado para acalmar)",
      "Shush (fazer som 'shh')",
      "Swing (balançar suavemente)",
      "Suck (oferecer chupeta ou dedo)",
    ],
    precautions: "Sempre coloque para dormir de barriga para cima após acalmar.",
  },
  {
    id: 6,
    title: "Transição para Quarto Próprio",
    duration: "1-2 semanas",
    age: "3-6 meses",
    difficulty: "Médio",
    description: "Como fazer a transição do bebê do quarto dos pais para o próprio quarto.",
    benefits: ["Melhora sono de todos", "Desenvolve independência", "Reduz despertares"],
    instructions: [
      "Comece com sonecas no novo quarto",
      "Mantenha rotina de sono consistente",
      "Use monitor de bebê para segurança",
      "Seja paciente com o período de adaptação",
    ],
    precautions: "AAP recomenda quarto compartilhado até 6 meses para reduzir SMSI.",
  },
  {
    id: 7,
    title: "Lidando com Regressões do Sono",
    duration: "1-3 semanas",
    age: "4, 8, 12, 18 meses",
    difficulty: "Desafiador",
    description: "Como lidar com períodos em que o sono do bebê piora temporariamente.",
    benefits: ["Mantém progresso", "Reduz frustração", "Preserva rotina"],
    instructions: [
      "Mantenha rotina consistente",
      "Seja paciente - é temporário",
      "Não introduza novos hábitos ruins",
      "Ofereça conforto extra se necessário",
    ],
    precautions: "Regressões são normais e temporárias. Não desista da rotina.",
  },
  {
    id: 8,
    title: "Sono Seguro - Diretrizes Importantes",
    duration: "Sempre",
    age: "0-12 meses",
    difficulty: "Essencial",
    description: "Práticas essenciais para garantir que o bebê durma com segurança.",
    benefits: ["Previne SMSI", "Garante segurança", "Tranquiliza pais"],
    instructions: [
      "Sempre de barriga para cima",
      "Superfície firme e plana",
      "Sem objetos soltos no berço",
      "Temperatura ambiente confortável",
    ],
    precautions: "Nunca comprometa a segurança por conveniência.",
  },
]

export function GuiaSonoBebe() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <div className="flex justify-center mb-4">
          <Moon className="h-16 w-16 text-purple-500" />
        </div>
        <h1 className="text-4xl font-bold text-purple-600">Sono Tranquilo do Bebê</h1>
        <h2 className="text-2xl font-semibold text-primary">Métodos Comprovados para Estabelecer Rotina de Sono</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Guia completo com técnicas eficazes para ajudar seu bebê (e você!) a ter noites tranquilas
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
          😴 Noites Tranquilas Garantidas
        </div>
      </div>

      <Card className="mb-8 border-purple-200">
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-center text-purple-700">🌙 Fases do Sono do Bebê</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Moon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold">0-3 meses</div>
              <div className="text-sm text-muted-foreground">Estabelecimento de rotina</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Sun className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold">3-6 meses</div>
              <div className="text-sm text-muted-foreground">Consolidação do sono</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold">6+ meses</div>
              <div className="text-sm text-muted-foreground">Sono independente</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8">
        {sonoMethods.map((method) => (
          <Card key={method.id} className="overflow-hidden border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-purple-700">
                    {method.id}. {method.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1 bg-purple-100 text-purple-700">
                    <Clock className="h-3 w-3" />
                    {method.duration}
                  </Badge>
                  <Badge variant="outline" className="border-purple-200">
                    {method.age}
                  </Badge>
                  <Badge className="bg-purple-600">{method.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-purple-600 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Benefícios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {method.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-600 mb-3">Como Aplicar</h4>
                <ol className="space-y-2">
                  {method.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium">
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
                  Importante Lembrar
                </h4>
                <p className="text-amber-700 text-sm">{method.precautions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-purple-700">Lembre-se: Paciência é Fundamental</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Moon className="h-6 w-6 text-purple-600" />
            </div>
            <p className="font-medium">Seja consistente</p>
            <p className="text-muted-foreground">Rotinas levam tempo para se estabelecer</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-6 w-6 text-purple-600" />
            </div>
            <p className="font-medium">Segurança primeiro</p>
            <p className="text-muted-foreground">Sempre siga as diretrizes de sono seguro</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <p className="font-medium">Cada bebê é único</p>
            <p className="text-muted-foreground">Adapte os métodos ao seu filho</p>
          </div>
        </div>
      </div>
    </div>
  )
}
