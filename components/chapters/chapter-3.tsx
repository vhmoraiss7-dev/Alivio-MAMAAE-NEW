"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Baby, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Chapter3() {
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
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 3 - Massagens na Gestação</h1>
                  <p className="text-sm text-gray-500">Alívio e conexão com seu bebê</p>
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
              <Baby className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Massagens na Gestação</CardTitle>
            <p className="text-lg text-gray-600">Alívio natural e conexão especial com seu bebê</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  A gestação é um período de transformações intensas no seu corpo. As massagens podem ser suas grandes
                  aliadas para alívio de desconfortos e para criar momentos especiais de conexão com seu bebê.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Neste capítulo, você encontrará técnicas seguras e eficazes para cada trimestre da gestação.
                </p>
              </div>
            </div>

            {/* Safety First */}
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante</h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Sempre consulte seu obstetra antes de iniciar qualquer técnica de massagem. Cada gestação é única e
                    algumas condições podem requerer cuidados especiais.
                  </p>
                </div>
              </div>
            </div>

            {/* Massage Techniques */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Técnicas por Trimestre</h3>

              {/* First Trimester */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3">
                    1º
                  </span>
                  Primeiro Trimestre (1-12 semanas)
                </h4>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">💆‍♀️ Massagem nos Pés</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Com movimentos circulares suaves, massageie a sola dos pés por 5-10 minutos. Isso ajuda com o
                        inchaço inicial e promove relaxamento.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">🤲 Massagem nas Mãos</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Pressione suavemente os pontos entre os dedos e massageie as palmas. Ideal para momentos de
                        ansiedade ou enjoo matinal.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">💆‍♀️ Massagem no Pescoço</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Movimentos circulares na base do pescoço ajudam a aliviar a tensão causada pelas mudanças
                        hormonais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Trimester */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3">
                    2º
                  </span>
                  Segundo Trimestre (13-27 semanas)
                </h4>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">🤰 Massagem na Lombar</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Com a palma da mão, faça movimentos circulares na região lombar. Use uma almofada para apoio
                        lateral ao deitar.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">🦵 Massagem nas Pernas</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Movimentos ascendentes dos tornozelos até as coxas ajudam na circulação e previnem varizes.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">💝 Massagem na Barriga</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Movimentos suaves e circulares no sentido horário. Momento perfeito para conversar com seu bebê.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Trimester */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold mr-3">
                    3º
                  </span>
                  Terceiro Trimestre (28-40 semanas)
                </h4>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">🛌 Massagem de Relaxamento</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Deitada de lado, peça para alguém fazer movimentos suaves nas costas e ombros. Essencial para o
                        descanso.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">🦶 Massagem nos Pés Inchados</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Eleve os pés e faça movimentos de drenagem, sempre dos pés em direção ao coração.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">💆‍♀️ Massagem no Couro Cabeludo</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Movimentos circulares suaves ajudam a relaxar e podem aliviar dores de cabeça da gestação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Dicas Especiais</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Use óleos naturais como óleo de coco ou amêndoas (teste antes para alergias)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Crie um ambiente relaxante com música suave e iluminação baixa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Aproveite para conversar com seu bebê durante as massagens na barriga</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Pare imediatamente se sentir qualquer desconforto</span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/2">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/4">
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
