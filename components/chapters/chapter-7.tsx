"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Gift, Play, Coffee } from "lucide-react"
import Link from "next/link"

export function Chapter7() {
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
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 7 - Bônus</h1>
                  <p className="text-sm text-gray-500">Presentes extras especiais</p>
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
              <Gift className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Bônus Especiais</CardTitle>
            <p className="text-lg text-gray-600">Presentes extras para tornar sua jornada ainda mais especial</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Como um presente especial para você, preparamos alguns bônus que vão complementar sua jornada materna
                  com ainda mais carinho e cuidado.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Estes recursos foram pensados para momentos de relaxamento, nutrição e bem-estar durante toda sua
                  experiência como mamãe.
                </p>
              </div>
            </div>

            {/* Playlist */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Play className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">🎶 Playlist Relaxante</h3>
                  <p className="text-gray-600">Músicas especialmente selecionadas para você e seu bebê</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta playlist foi cuidadosamente criada para acompanhar você em diferentes momentos: durante as
                  massagens na gestação, nas mamadas tranquilas, nos momentos de relaxamento e até mesmo para ajudar o
                  bebê a adormecer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  São músicas suaves, instrumentais e canções de ninar que criam um ambiente de paz e conexão entre
                  vocês.
                </p>
              </div>

              <div className="text-center">
                <Button
                  className="text-white hover:opacity-90 text-lg px-8 py-3"
                  style={{ backgroundColor: "#1DB954" }}
                  onClick={() => window.open("https://open.spotify.com/playlist/1OUmCtvtAkSHvOjJg9G0sE", "_blank")}
                >
                  <Play className="w-5 h-5 mr-3" />🎵 Ouvir no Spotify
                </Button>
                <p className="text-sm text-gray-500 mt-2">Clique para acessar a playlist completa</p>
              </div>
            </div>

            {/* Tea Recipes */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">🍵 Receitas de Chás Especiais</h3>
                  <p className="text-gray-600">Chás naturais para cada momento da sua jornada</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Pregnancy Teas */}
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">🤰 Durante a Gestação</h4>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-purple-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá de Gengibre para Enjoos</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> 1 pedaço pequeno de gengibre fresco, 1 xícara de água, mel a
                        gosto
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Ferva a água com o gengibre por 5 minutos. Coe e adoce com mel. Tome
                        morno.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-purple-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá de Camomila para Relaxar</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> 1 colher de sopa de flores de camomila, 1 xícara de água quente
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Deixe em infusão por 10 minutos. Coe e tome antes de dormir.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Breastfeeding Teas */}
                <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">🤱 Durante a Amamentação</h4>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-pink-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá de Erva-doce para Produção de Leite</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> 1 colher de chá de sementes de erva-doce, 1 xícara de água quente
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Deixe em infusão por 15 minutos. Coe e tome 2-3 vezes ao dia.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-pink-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá de Hortelã para Digestão</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> Folhas frescas de hortelã, 1 xícara de água quente
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Infusão por 8 minutos. Tome após as refeições.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recovery Teas */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">💙 Para Recuperação Pós-Parto</h4>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá de Hibisco para Energia</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> 1 colher de sopa de hibisco seco, 1 xícara de água quente
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Infusão por 10 minutos. Pode ser tomado gelado. Rico em vitamina C.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                      <h5 className="font-semibold text-gray-900 mb-2">Chá Verde com Limão para Vitalidade</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Ingredientes:</strong> 1 sachê de chá verde, suco de meio limão, 1 xícara de água quente
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Preparo:</strong> Infusão por 3 minutos. Adicione o limão após esfriar um pouco.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mt-6">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Sempre consulte seu médico antes de consumir chás durante a gestação e
                  amamentação. Algumas ervas podem não ser adequadas para seu caso específico.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/6">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/8">
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
