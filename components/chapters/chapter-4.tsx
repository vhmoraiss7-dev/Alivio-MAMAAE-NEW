"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Chapter4() {
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
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 4 - Método P.E.G.A</h1>
                  <p className="text-sm text-gray-500">Amamentação sem dor</p>
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
              <Heart className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Método P.E.G.A</CardTitle>
            <p className="text-lg text-gray-600">A técnica revolucionária para amamentação sem dor</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  O Método P.E.G.A é uma técnica revolucionária que transforma a amamentação em um momento de prazer e
                  conexão, eliminando a dor e o desconforto.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Desenvolvido especialmente para mamães que querem amamentar com confiança e tranquilidade.
                </p>
              </div>
            </div>

            {/* What is PEGA */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que significa P.E.G.A?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                    <span className="text-pink-600 font-bold text-xl">P</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Posicionamento</h4>
                  <p className="text-gray-700">
                    A base de tudo: como posicionar você e seu bebê para o máximo conforto.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <span className="text-rose-600 font-bold text-xl">E</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Encaixe</h4>
                  <p className="text-gray-700">
                    Como garantir que seu bebê faça a pega correta desde a primeira tentativa.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">G</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gestão</h4>
                  <p className="text-gray-700">Como gerenciar o tempo, a frequência e os sinais do seu bebê.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">A</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Acompanhamento</h4>
                  <p className="text-gray-700">
                    Como acompanhar o desenvolvimento e ajustar a técnica conforme necessário.
                  </p>
                </div>
              </div>
            </div>

            {/* Step by Step */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Passo a Passo do Método</h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </span>
                    Posicionamento Perfeito
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• Sente-se confortavelmente com as costas bem apoiadas</p>
                    <p>• Use almofadas para apoiar os braços e elevar o bebê até a altura do seio</p>
                    <p>• O bebê deve estar de frente para você, barriga com barriga</p>
                    <p>• A cabeça, pescoço e corpo do bebê devem estar alinhados</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 border border-rose-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </span>
                    Encaixe Correto
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• Toque o lábio inferior do bebê com o mamilo para estimular o reflexo</p>
                    <p>• Espere o bebê abrir bem a boca (como um bocejo)</p>
                    <p>• Aproxime o bebê rapidamente ao seio, não leve o seio ao bebê</p>
                    <p>• O queixo do bebê deve tocar o seio primeiro</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </span>
                    Gestão da Mamada
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• Observe os sinais de fome do bebê (não espere o choro)</p>
                    <p>• Deixe o bebê mamar até se soltar naturalmente do primeiro seio</p>
                    <p>• Ofereça o segundo seio se o bebê ainda demonstrar interesse</p>
                    <p>• Alterne o seio de início a cada mamada</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold mr-3">
                      4
                    </span>
                    Acompanhamento Contínuo
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• Observe o ganho de peso regular do bebê</p>
                    <p>• Conte as fraldas molhadas (pelo menos 6 por dia após o 5º dia)</p>
                    <p>• Ajuste a técnica conforme o bebê cresce</p>
                    <p>• Procure ajuda profissional se houver dificuldades persistentes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Problems */}
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">Problemas Comuns e Soluções</h3>
                  <div className="space-y-3 text-yellow-700">
                    <p>
                      <strong>Dor no mamilo:</strong> Geralmente indica pega incorreta. Retire o bebê suavemente e tente
                      novamente.
                    </p>
                    <p>
                      <strong>Bebê adormece no seio:</strong> Faça cócegas nos pés ou troque a fralda para despertar.
                    </p>
                    <p>
                      <strong>Pouco leite:</strong> Aumente a frequência das mamadas e mantenha-se hidratada.
                    </p>
                    <p>
                      <strong>Seios muito cheios:</strong> Retire um pouco de leite antes da mamada para facilitar a
                      pega.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/3">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/5">
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
