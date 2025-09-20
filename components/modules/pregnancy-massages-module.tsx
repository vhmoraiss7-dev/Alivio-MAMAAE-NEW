"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, CheckCircle, Mail, BookOpen, Play, AlertTriangle, Clock, Target } from "lucide-react"
import Link from "next/link"

const lessons = [
  {
    id: 1,
    title: "Segurança e cuidados — quando aplicar, intensidade e frequência",
    content: `## Segurança em Primeiro Lugar

### Quando Aplicar Massagens:
• **A partir do 2º trimestre** (após 12 semanas)
• **Quando não há contraindicações médicas**
• **Em momentos de relaxamento** (não durante estresse)
• **Preferencialmente no final do dia**

### Intensidade Adequada:
• **Pressão leve a moderada** - nunca forte
• **Movimentos suaves e circulares**
• **Evitar pressão direta na barriga**
• **Parar se houver qualquer desconforto**

### Frequência Recomendada:
• **2-3 vezes por semana** para melhores resultados
• **10-15 minutos por sessão**
• **Pode ser diária se for muito suave**
• **Sempre respeitar os limites do corpo**

### Sinais para Parar Imediatamente:
⚠️ Dor ou desconforto
⚠️ Contrações
⚠️ Sangramento
⚠️ Tontura ou mal-estar`,
    completed: false,
  },
  {
    id: 2,
    title: "Massagem lombar — alivie tensão nas costas",
    content: `## Técnica de Massagem Lombar

### Posição Ideal:
• **Sentada em uma cadeira** com apoio
• **Deitada de lado** com travesseiros
• **Nunca de barriga para baixo**

### Passo a Passo:

#### 1. Preparação (2 minutos)
• Aqueça as mãos esfregando-as
• Use óleo ou creme neutro
• Respire profundamente para relaxar

#### 2. Movimentos Circulares (5 minutos)
• Faça círculos suaves na região lombar
• Use a palma das mãos
• Pressão leve, movimento constante
• Siga o ritmo da respiração

#### 3. Movimentos Verticais (3 minutos)
• Deslize as mãos de baixo para cima
• Ao longo da coluna (sem pressionar diretamente)
• Retorne com pressão mais leve

#### 4. Finalização (2 minutos)
• Movimentos ainda mais suaves
• Respiração profunda
• Hidrate a pele

### Benefícios:
✅ Reduz tensão muscular
✅ Melhora a postura
✅ Alivia dor lombar
✅ Promove relaxamento`,
    completed: false,
  },
  {
    id: 3,
    title: "Pernas e panturrilhas — melhore circulação e reduza inchaço",
    content: `## Massagem para Pernas e Panturrilhas

### Posição Recomendada:
• **Sentada confortavelmente**
• **Pernas elevadas** (use almofadas)
• **Ou deitada de lado**

### Técnica Completa:

#### 1. Aquecimento (2 minutos)
• Movimentos suaves de aquecimento
• Das coxas até os tornozelos
• Pressão muito leve

#### 2. Panturrilhas (4 minutos)
• **Movimentos ascendentes** (de baixo para cima)
• Use ambas as mãos
• Pressão moderada, mas confortável
• Foque nas laterais da panturrilha

#### 3. Coxas (4 minutos)
• Movimentos circulares amplos
• Evite a parte interna da coxa
• Pressão leve e constante
• Sempre em direção ao coração

#### 4. Tornozelos e Pés (3 minutos)
• Movimentos circulares nos tornozelos
• Massagem suave na sola dos pés
• Evite pontos de pressão específicos

### Dicas Importantes:
💡 **Sempre massageie em direção ao coração**
💡 **Use creme ou óleo para facilitar**
💡 **Pare se sentir dor ou desconforto**
💡 **Eleve as pernas após a massagem**

### Benefícios:
✅ Melhora circulação sanguínea
✅ Reduz inchaço (edema)
✅ Alivia peso nas pernas
✅ Previne varizes`,
    completed: false,
  },
  {
    id: 4,
    title: "Massagem nos pés — relaxamento e conforto",
    content: `## Massagem Relaxante nos Pés

### Preparação:
• **Lave os pés** com água morna
• **Seque bem** entre os dedos
• **Use creme hidratante** ou óleo
• **Sente-se confortavelmente**

### Técnica Detalhada:

#### 1. Sola dos Pés (4 minutos)
• Use os polegares em movimentos circulares
• Comece pelo calcanhar
• Suba gradualmente até os dedos
• Pressão moderada e constante

#### 2. Dedos dos Pés (3 minutos)
• Massageie cada dedo individualmente
• Movimentos suaves de rotação
• Pressione levemente a ponta de cada dedo
• Finalize com alongamento suave

#### 3. Peito do Pé (2 minutos)
• Movimentos circulares com as palmas
• Pressão muito leve
• Evite pressionar veias visíveis

#### 4. Tornozelos (3 minutos)
• Rotações suaves do tornozelo
• Movimentos circulares ao redor do osso
• Flexione e estenda suavemente

### Pontos de Atenção:
⚠️ **Evite pontos de acupuntura** específicos
⚠️ **Não pressione se houver varizes**
⚠️ **Pare se sentir contrações**

### Benefícios:
✅ Relaxamento profundo
✅ Melhora do sono
✅ Redução do estresse
✅ Alívio de tensões`,
    completed: false,
  },
  {
    id: 5,
    title: "Ombros e nuca — aliviar peso da tensão",
    content: `## Massagem para Ombros e Nuca

### Posição Ideal:
• **Sentada em cadeira** com encosto
• **Ombros relaxados**
• **Cabeça ligeiramente inclinada para frente**

### Sequência Completa:

#### 1. Aquecimento da Nuca (2 minutos)
• Movimentos circulares suaves
• Use as pontas dos dedos
• Comece na base do crânio
• Desça até a base do pescoço

#### 2. Ombros - Parte Superior (4 minutos)
• Use as palmas das mãos
• Movimentos circulares amplos
• Pressão moderada
• Foque nos músculos tensos

#### 3. Trapézio (4 minutos)
• Músculo entre pescoço e ombro
• Movimentos de "amassamento" suave
• Use polegar e indicador
• Trabalhe toda a extensão do músculo

#### 4. Base do Pescoço (3 minutos)
• Movimentos verticais suaves
• Das orelhas até os ombros
• Pressão leve e constante
• Finalize com movimentos circulares

### Técnicas Especiais:

#### Liberação de Tensão:
• **Pressione suavemente** pontos mais tensos
• **Mantenha por 10-15 segundos**
• **Respire profundamente** durante
• **Solte gradualmente**

### Benefícios:
✅ Alívio de dores de cabeça
✅ Redução da tensão cervical
✅ Melhora da postura
✅ Relaxamento geral`,
    completed: false,
  },
  {
    id: 6,
    title: "Respiração guiada com toque — acalmar ansiedade",
    content: `## Respiração Guiada com Toque Terapêutico

### Preparação do Ambiente:
• **Local silencioso** e confortável
• **Temperatura agradável**
• **Iluminação suave**
• **Posição confortável** (sentada ou deitada de lado)

### Técnica Completa:

#### 1. Posicionamento das Mãos (1 minuto)
• **Uma mão no peito** (região do coração)
• **Outra mão na barriga** (acima do umbigo)
• **Toque suave**, sem pressão
• **Feche os olhos** ou mantenha olhar suave

#### 2. Respiração Base (5 minutos)
• **Inspire lentamente** pelo nariz (4 segundos)
• **Segure** a respiração (2 segundos)
• **Expire lentamente** pela boca (6 segundos)
• **Sinta o movimento** sob suas mãos

#### 3. Toque Consciente (4 minutos)
• **Movimentos circulares** muito suaves
• **Sincronize** com a respiração
• **Inspire**: mão sobe suavemente
• **Expire**: mão desce acompanhando

#### 4. Visualização (3 minutos)
• **Imagine** uma luz dourada
• **Entrando** a cada inspiração
• **Espalhando calma** pelo corpo
• **Saindo tensões** a cada expiração

### Frases de Apoio:
💭 "Estou segura e protegida"
💭 "Meu bebê está bem"
💭 "Cada respiração me traz paz"
💭 "Sou forte e capaz"

### Sinais de Sucesso:
✅ Respiração mais lenta e profunda
✅ Músculos relaxados
✅ Mente mais calma
✅ Sensação de bem-estar`,
    completed: false,
  },
  {
    id: 7,
    title: "Rotina de 10 minutos — protocolo prático diário",
    content: `## Rotina Diária de 10 Minutos

### Cronograma Otimizado:

#### Minutos 1-2: Preparação
• **Encontre posição confortável**
• **Aqueça as mãos** esfregando
• **Aplique óleo ou creme**
• **3 respirações profundas**

#### Minutos 3-4: Ombros e Nuca
• **Movimentos circulares** nos ombros
• **Massagem suave** na nuca
• **Foque em pontos tensos**

#### Minutos 5-6: Região Lombar
• **Círculos suaves** na lombar
• **Movimentos verticais** ao longo da coluna
• **Pressão leve e constante**

#### Minutos 7-8: Pernas (Foco Principal)
• **Panturrilhas**: movimentos ascendentes
• **Coxas**: círculos amplos
• **Sempre em direção ao coração**

#### Minutos 9-10: Finalização
• **Pés**: massagem relaxante
• **Respiração guiada** (30 segundos)
• **Hidratação** da pele

### Adaptações por Trimestre:

#### 2º Trimestre:
• **Foque mais** em lombar e pernas
• **Pressão moderada** é segura
• **Pode incluir** barriga suavemente

#### 3º Trimestre:
• **Priorize** pernas e pés
• **Pressão mais leve**
• **Posições laterais** preferencialmente

### Dicas para Consistência:
📅 **Mesmo horário** todos os dias
📅 **Preferencialmente à noite**
📅 **Crie um ritual** relaxante
📅 **Use música suave** se desejar

### Benefícios da Rotina Diária:
✅ Melhora progressiva dos sintomas
✅ Maior conexão com o bebê
✅ Redução do estresse acumulado
✅ Melhor qualidade do sono`,
    completed: false,
  },
  {
    id: 8,
    title: "Contraindicações e sinais de alerta — quando evitar",
    content: `## Contraindicações Absolutas

### NUNCA faça massagem se tiver:
🚫 **Sangramento vaginal** de qualquer intensidade
🚫 **Contrações regulares** ou dor abdominal
🚫 **Placenta prévia** (diagnosticada pelo médico)
🚫 **Risco de parto prematuro**
🚫 **Hipertensão grave** não controlada
🚫 **Pré-eclâmpsia** ou eclâmpsia

### Contraindicações Relativas (Consulte o Médico):
⚠️ **Diabetes gestacional** descontrolada
⚠️ **Varizes** muito pronunciadas
⚠️ **Edema** excessivo
⚠️ **Histórico** de aborto espontâneo
⚠️ **Gravidez** de alto risco

### Sinais de Alerta Durante a Massagem:

#### PARE IMEDIATAMENTE se sentir:
🛑 **Dor** de qualquer tipo
🛑 **Contrações** ou endurecimento da barriga
🛑 **Tontura** ou mal-estar
🛑 **Náusea** intensa
🛑 **Falta de ar** ou palpitações
🛑 **Sangramento** após a massagem

### Áreas a Evitar Completamente:
❌ **Barriga** no 1º trimestre
❌ **Pontos de acupuntura** específicos
❌ **Parte interna** das coxas
❌ **Região** entre polegar e indicador
❌ **Tornozelos** (pontos específicos)

### Quando Procurar Ajuda Médica:

#### Procure seu médico SE:
📞 **Qualquer sangramento** após massagem
📞 **Contrações** que não param
📞 **Dor persistente** em qualquer região
📞 **Mudanças** nos movimentos do bebê
📞 **Qualquer sintoma** que te preocupe

### Orientações Gerais de Segurança:
✅ **Sempre** informe seu médico sobre as massagens
✅ **Comece devagar** e aumente gradualmente
✅ **Confie** nos sinais do seu corpo
✅ **Quando em dúvida**, não faça
✅ **Prefira** orientação profissional

### Lembre-se:
💡 **Cada gravidez é única**
💡 **O que é seguro** para uma pode não ser para outra
💡 **Seu bem-estar** e do bebê vem primeiro
💡 **Não hesite** em parar se algo não parecer certo`,
    completed: false,
  },
]

export function PregnancyMassagesModule() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const markAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const currentLessonData = lessons.find((lesson) => lesson.id === currentLesson)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/members">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-100">
                  <BookOpen className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Módulo 2 - Massagens na Gestação</h1>
                  <p className="text-sm text-gray-500">8 aulas</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>{completedLessons.length}/8 concluídas</span>
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Aulas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {lessons.map((lesson) => (
                  <Button
                    key={lesson.id}
                    variant={currentLesson === lesson.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-3 ${
                      currentLesson === lesson.id ? "" : "hover:bg-gray-100"
                    }`}
                    style={currentLesson === lesson.id ? { backgroundColor: "#FF2D84" } : {}}
                    onClick={() => setCurrentLesson(lesson.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {completedLessons.includes(lesson.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm line-clamp-2">{lesson.title}</p>
                        <p className="text-xs opacity-75">Aula {lesson.id}</p>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Dicas Rápidas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>10-15 min por sessão</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Pressão sempre leve</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span>Pare se sentir dor</span>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Suporte</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Dúvidas sobre as técnicas?</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  suportealiviomamae@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{currentLessonData?.title}</CardTitle>
                  <Badge variant="outline">Aula {currentLesson}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Educational Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Aviso:</strong> Este conteúdo é educativo e não substitui acompanhamento profissional.
                  </p>
                </div>

                {/* Lesson Content */}
                <div className="prose max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                    {currentLessonData?.content}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    {currentLesson > 1 && (
                      <Button variant="outline" onClick={() => setCurrentLesson(currentLesson - 1)}>
                        Aula Anterior
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    {!completedLessons.includes(currentLesson) && (
                      <Button onClick={() => markAsCompleted(currentLesson)} style={{ backgroundColor: "#FF2D84" }}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Marcar como Concluída
                      </Button>
                    )}

                    {currentLesson < lessons.length && (
                      <Button
                        variant="outline"
                        onClick={() => setCurrentLesson(currentLesson + 1)}
                        style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
                      >
                        Próxima Aula
                      </Button>
                    )}

                    {currentLesson === lessons.length && (
                      <Link href="/members">
                        <Button style={{ backgroundColor: "#FF2D84" }}>Voltar ao Dashboard</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
