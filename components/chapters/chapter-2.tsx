"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Baby, Heart, Moon } from "lucide-react"
import Link from "next/link"

export function Chapter2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/members">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao Sumário</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FF2D84" }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 2 - Como usar o Combo</h1>
                  <p className="text-sm text-gray-500">Seu guia rápido de navegação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#FF2D84" }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Como usar o Combo</CardTitle>
            <p className="text-lg text-gray-600">Seu guia personalizado para cada momento</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Você não precisa ler tudo de uma vez. Use este Combo como uma bússola: vá ao capítulo que faz sentido
                  para o seu momento atual.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Cada capítulo foi pensado para uma fase específica da sua jornada. Escolha o que mais ressoa com você
                  agora e volte aos outros quando precisar.
                </p>
              </div>
            </div>

            {/* Navigation Guide */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Guia de Navegação</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Baby className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-green-700 text-lg mb-2">Se estiver grávida</p>
                    <p className="text-gray-600 mb-3">Comece pelo Capítulo 3 - Massagens na Gestação</p>
                    <p className="text-sm text-gray-500">
                      Técnicas seguras para alívio de desconfortos e conexão com seu bebê
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg mb-2">Nas primeiras mamadas</p>
                    <p className="text-gray-600 mb-3">Vá para o Capítulo 4 - Método P.E.G.A</p>
                    <p className="text-sm text-gray-500">
                      Técnica revolucionária para amamentação sem dor e com mais prazer
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-rose-700 text-lg mb-2">No retorno para casa</p>
                    <p className="text-gray-600 mb-3">Consulte o Capítulo 5 - Recuperação Pós-Parto</p>
                    <p className="text-sm text-gray-500">Cuidados essenciais para sua recuperação física e emocional</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Moon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-blue-700 text-lg mb-2">Para noites melhores</p>
                    <p className="text-gray-600 mb-3">Acesse o Capítulo 6 - Sono Tranquilo</p>
                    <p className="text-sm text-gray-500">Estratégias para noites mais leves para você e seu bebê</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Dicas de Uso</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Marque os capítulos que mais te ajudaram para consultar novamente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Use o Grupo VIP para tirar dúvidas e compartilhar experiências</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Não hesite em entrar em contato pelo suporte quando precisar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold">•</span>
                  <span>Lembre-se: cada jornada é única, vá no seu ritmo</span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/1">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/3">
                <Button className="text-white hover:opacity-90" style={{ backgroundColor: "#FF2D84" }}>
                  Próximo Capítulo →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
