"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, CheckCircle, Mail, BookOpen, Play } from "lucide-react"
import Link from "next/link"

const lessons = [
  {
    id: 1,
    title: "Bem-vinda ao Combo Alívio Mamãe 💗",
    content: `Você acaba de liberar acesso aos 4 pilares da sua Jornada Materna: Massagens, Amamentação (Método P.E.G.A), Recuperação Pós-Parto e Sono Tranquilo.

→ Você pode seguir na ordem sugerida ou ir direto ao que mais precisa agora.`,
    completed: false,
  },
  {
    id: 2,
    title: "Como usar o Combo",
    content: `Se estiver grávida → comece por Massagens.

Nas primeiras mamadas → vá para o Método P.E.G.A.

No retorno para casa → consulte Recuperação Pós-Parto.

Para noites melhores → acesse Sono Tranquilo.`,
    completed: false,
  },
]

export function WelcomeModule() {
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
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF2D84" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Módulo 1 - Boas-vindas</h1>
                  <p className="text-sm text-gray-500">2 aulas</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>{completedLessons.length}/2 concluídas</span>
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
                        <p className="font-medium text-sm">{lesson.title}</p>
                        <p className="text-xs opacity-75">Aula {lesson.id}</p>
                      </div>
                    </div>
                  </Button>
                ))}
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
                <p className="text-sm text-gray-600 mb-3">Precisa de ajuda? Entre em contato conosco.</p>
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
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                    {currentLessonData?.content}
                  </div>
                </div>

                {/* Special Content for Lesson 1 */}
                {currentLesson === 1 && (
                  <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Seus 4 Pilares da Jornada Materna</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-rose-600" />
                        </div>
                        <div>
                          <p className="font-medium">Massagens</p>
                          <p className="text-sm text-gray-600">Alívio na gestação</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-medium">Método P.E.G.A</p>
                          <p className="text-sm text-gray-600">Amamentação sem dor</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-rose-600" />
                        </div>
                        <div>
                          <p className="font-medium">Recuperação Pós-Parto</p>
                          <p className="text-sm text-gray-600">Cuidados essenciais</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Sono Tranquilo</p>
                          <p className="text-sm text-gray-600">Para bebê e mamãe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special Content for Lesson 2 */}
                {currentLesson === 2 && (
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Guia de Navegação</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-semibold text-sm">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-green-700">Se estiver grávida</p>
                          <p className="text-sm text-gray-600">Comece pelo Módulo 2 - Massagens na Gestação</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-600 font-semibold text-sm">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-pink-700">Nas primeiras mamadas</p>
                          <p className="text-sm text-gray-600">Vá para o Módulo 3 - Método P.E.G.A</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-rose-600 font-semibold text-sm">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-rose-700">No retorno para casa</p>
                          <p className="text-sm text-gray-600">Consulte o Módulo 4 - Recuperação Pós-Parto</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-semibold text-sm">4</span>
                        </div>
                        <div>
                          <p className="font-medium text-blue-700">Para noites melhores</p>
                          <p className="text-sm text-gray-600">Acesse o Módulo 5 - Sono Tranquilo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
