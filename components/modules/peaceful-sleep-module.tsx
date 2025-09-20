"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Moon, Clock, Baby, Home, Lightbulb } from "lucide-react"

const lessons = [
  {
    id: 1,
    title: "Ambiente Ideal para o Sono",
    icon: Home,
    duration: "15 min",
    content: {
      intro: "O ambiente onde o bebê dorme é fundamental para um sono tranquilo e reparador.",
      topics: [
        {
          title: "Temperatura Ideal",
          content: [
            "Mantenha o quarto entre 18°C e 22°C",
            "Use roupas adequadas para a temperatura",
            "Evite cobertores soltos no berço",
            "Prefira sacos de dormir ou pijamas apropriados",
          ],
        },
        {
          title: "Iluminação",
          content: [
            "Escureça o ambiente durante a noite",
            "Use luz suave durante amamentações noturnas",
            "Mantenha claridade natural durante sonos diurnos",
            "Considere cortinas blackout para melhor escuridão",
          ],
        },
        {
          title: "Ruídos",
          content: [
            "Mantenha ambiente silencioso mas não completamente mudo",
            "Ruído branco pode ajudar alguns bebês",
            "Evite sons súbitos e altos",
            "Mantenha consistência nos sons ambientes",
          ],
        },
        {
          title: "Segurança do Berço",
          content: [
            "Colchão firme e bem ajustado",
            "Lençóis bem esticados",
            "Sem objetos soltos no berço",
            "Bebê sempre de barriga para cima",
          ],
        },
      ],
      tips: [
        "Teste diferentes configurações para encontrar o que funciona melhor",
        "Mantenha o ambiente consistente todas as noites",
        "Observe sinais de desconforto do bebê",
      ],
    },
  },
  {
    id: 2,
    title: "Rotina de Sono Eficaz",
    icon: Clock,
    duration: "20 min",
    content: {
      intro: "Uma rotina consistente ajuda o bebê a entender que é hora de dormir.",
      topics: [
        {
          title: "Horários Regulares",
          content: [
            "Estabeleça horários fixos para dormir e acordar",
            "Seja flexível mas mantenha consistência",
            "Ajuste gradualmente conforme o bebê cresce",
            "Observe os sinais naturais de sono do bebê",
          ],
        },
        {
          title: "Atividades Pré-Sono",
          content: ["Banho morno relaxante", "Massagem suave", "Leitura ou música calma", "Amamentação ou mamadeira"],
        },
        {
          title: "Sequência da Rotina",
          content: [
            "1. Banho (se for dia de banho)",
            "2. Troca de fralda e roupas de dormir",
            "3. Alimentação",
            "4. Atividade calma (música, leitura)",
            "5. Colocar no berço ainda acordado",
          ],
        },
        {
          title: "Duração da Rotina",
          content: [
            "30-45 minutos no total",
            "Não muito longa para não cansar",
            "Não muito curta para não ser eficaz",
            "Ajuste conforme a idade do bebê",
          ],
        },
      ],
      tips: [
        "Comece a rotina no mesmo horário todas as noites",
        "Envolva o parceiro para dividir responsabilidades",
        "Seja paciente - pode levar semanas para estabelecer",
      ],
    },
  },
  {
    id: 3,
    title: "Técnicas de Acalmar",
    icon: Baby,
    duration: "25 min",
    content: {
      intro: "Diferentes técnicas para acalmar o bebê e ajudá-lo a adormecer naturalmente.",
      topics: [
        {
          title: "Método do Embrulho",
          content: [
            "Use manta leve para envolver o bebê",
            "Deixe braços junto ao corpo",
            "Não aperte demais as pernas",
            "Pare quando o bebê começar a rolar",
          ],
        },
        {
          title: "Balanço Suave",
          content: [
            "Movimentos lentos e rítmicos",
            "No colo ou em cadeira de balanço",
            "Evite movimentos muito vigorosos",
            "Diminua gradualmente o movimento",
          ],
        },
        {
          title: "Sons Calmantes",
          content: [
            "Cantarolar ou sussurrar",
            "Ruído branco ou sons da natureza",
            "Música clássica suave",
            "Som do próprio coração da mãe",
          ],
        },
        {
          title: "Toque Reconfortante",
          content: [
            "Carícias suaves na testa",
            "Mão no peito do bebê",
            "Massagem leve nas costas",
            "Contato pele a pele",
          ],
        },
      ],
      tips: [
        "Combine diferentes técnicas conforme necessário",
        "Observe qual funciona melhor para seu bebê",
        "Seja consistente na aplicação",
      ],
    },
  },
  {
    id: 4,
    title: "Sono Diurno vs Noturno",
    icon: Moon,
    duration: "18 min",
    content: {
      intro: "Ensinar o bebê a diferenciar dia e noite é essencial para um bom padrão de sono.",
      topics: [
        {
          title: "Durante o Dia",
          content: [
            "Mantenha ambiente claro e com ruídos normais",
            "Interaja mais durante alimentações",
            "Sonecas em locais com luz natural",
            "Atividades estimulantes nos períodos acordados",
          ],
        },
        {
          title: "Durante a Noite",
          content: [
            "Ambiente escuro e silencioso",
            "Interações mínimas durante alimentações",
            "Voz baixa e movimentos calmos",
            "Evite brincadeiras ou estímulos",
          ],
        },
        {
          title: "Transição Gradual",
          content: [
            "Diminua estímulos progressivamente à tarde",
            "Comece rotina noturna sempre no mesmo horário",
            "Use luz mais fraca após o pôr do sol",
            "Mantenha consistência todos os dias",
          ],
        },
        {
          title: "Sinais de Sono",
          content: [
            "Bocejos e esfregar os olhos",
            "Ficar mais quietinho",
            "Perder interesse em brinquedos",
            "Ficar mais irritado ou choroso",
          ],
        },
      ],
      tips: [
        "Seja paciente - pode levar algumas semanas",
        "Mantenha rotina mesmo em fins de semana",
        "Observe e respeite os ritmos naturais do bebê",
      ],
    },
  },
  {
    id: 5,
    title: "Resolvendo Problemas Comuns",
    icon: Lightbulb,
    duration: "22 min",
    content: {
      intro: "Soluções práticas para os desafios mais comuns relacionados ao sono do bebê.",
      topics: [
        {
          title: "Bebê que Só Dorme no Colo",
          content: [
            "Diminua gradualmente o tempo no colo",
            "Coloque no berço ainda sonolento, não dormindo",
            "Use técnica do 'pick up, put down'",
            "Seja consistente e paciente",
          ],
        },
        {
          title: "Despertares Noturnos Frequentes",
          content: [
            "Verifique se não é fome ou fralda suja",
            "Aguarde alguns minutos antes de intervir",
            "Use técnicas de acalmar sem tirar do berço",
            "Considere se não está na fase de salto de desenvolvimento",
          ],
        },
        {
          title: "Resistência para Dormir",
          content: [
            "Revise a rotina - pode estar muito estimulante",
            "Verifique se o horário está adequado",
            "Considere se o bebê não está overtired",
            "Mantenha calma e consistência",
          ],
        },
        {
          title: "Regressões do Sono",
          content: [
            "São normais e temporárias",
            "Geralmente ocorrem aos 4, 8-10 e 18 meses",
            "Mantenha rotina mesmo durante regressões",
            "Ofereça mais conforto se necessário",
          ],
        },
      ],
      tips: [
        "Cada bebê é único - adapte as técnicas",
        "Mudanças levam tempo - seja paciente",
        "Procure ajuda se estiver muito cansada",
      ],
    },
  },
]

export default function PeacefulSleepModule() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [currentLesson, setCurrentLesson] = useState<number | null>(null)

  const toggleLessonComplete = (lessonId: number) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId],
    )
  }

  const progress = (completedLessons.length / lessons.length) * 100

  return (
    <div className="space-y-8">
      {/* Progress Section */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-600">
            <Moon className="w-5 h-5" />
            Progresso do Módulo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Lições Concluídas</span>
              <span>
                {completedLessons.length}/{lessons.length}
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Sleep Tips Sidebar */}
      <Card className="border-pink-200 bg-pink-50">
        <CardHeader>
          <CardTitle className="text-pink-600">💡 Dicas Rápidas para o Sono</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Bebês dormem melhor em ambiente fresco (18-22°C)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Rotina consistente é mais importante que horário exato</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Coloque o bebê no berço ainda acordado</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              <span>Seja paciente - mudanças levam 2-3 semanas</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lessons */}
      <div className="space-y-6">
        {lessons.map((lesson) => {
          const Icon = lesson.icon
          const isCompleted = completedLessons.includes(lesson.id)
          const isOpen = currentLesson === lesson.id

          return (
            <Card key={lesson.id} className="border-pink-200">
              <CardHeader
                className="cursor-pointer hover:bg-pink-50 transition-colors"
                onClick={() => setCurrentLesson(isOpen ? null : lesson.id)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLessonComplete(lesson.id)
                        }}
                        className="text-pink-500 hover:text-pink-600"
                      >
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </button>
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Lição {lesson.id}: {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {isOpen ? "Fechar" : "Abrir"}
                  </Button>
                </CardTitle>
              </CardHeader>

              {isOpen && (
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <p className="text-gray-700 bg-pink-50 p-4 rounded-lg">{lesson.content.intro}</p>

                    {lesson.content.topics.map((topic, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-800 border-l-4 border-pink-500 pl-3">
                          {topic.title}
                        </h4>
                        <ul className="space-y-2 ml-4">
                          {topic.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                              <span className="text-pink-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">💡 Dicas Importantes:</h4>
                      <ul className="space-y-1">
                        {lesson.content.tips.map((tip, index) => (
                          <li key={index} className="text-yellow-700 text-sm">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-red-700 text-sm">
                        <strong>⚠️ Aviso Educacional:</strong> Este conteúdo é apenas informativo. Sempre consulte o
                        pediatra para orientações específicas sobre o sono do seu bebê, especialmente se houver
                        preocupações persistentes.
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <Button
                        onClick={() => toggleLessonComplete(lesson.id)}
                        variant={isCompleted ? "secondary" : "default"}
                        className={isCompleted ? "bg-green-100 text-green-700" : "bg-pink-500 hover:bg-pink-600"}
                      >
                        {isCompleted ? "✓ Concluída" : "Marcar como Concluída"}
                      </Button>

                      <div className="text-sm text-gray-500">
                        Lição {lesson.id} de {lessons.length}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* Support Contact */}
      <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-white">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Precisa de Ajuda com o Sono do Seu Bebê?</h3>
            <p className="text-gray-600 mb-4">Nossa equipe está aqui para apoiar você nessa jornada</p>
            <Button className="bg-pink-500 hover:bg-pink-600">Falar com Suporte</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
