"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Mail, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export function Chapter1() {
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
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 1 - Boas-vindas</h1>
                  <p className="text-sm text-gray-500">Este espaço é só seu 💕</p>
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
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Bem-vinda ao Combo Alívio Mamãe 💗</CardTitle>
            <p className="text-lg text-gray-600">Este espaço foi criado especialmente para você</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Welcome Message */}
            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">Querida mamãe, seja muito bem-vinda! 💕</p>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Você acaba de liberar acesso aos 4 pilares da sua Jornada Materna: <strong>Massagens</strong>,{" "}
                  <strong>Amamentação (Método P.E.G.A)</strong>, <strong>Recuperação Pós-Parto</strong> e{" "}
                  <strong>Sono Tranquilo</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Este Combo foi pensado para te acompanhar em cada momento especial da sua jornada. Desde os primeiros
                  chutes do bebê até as noites mais tranquilas depois do nascimento.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  → Você pode seguir na ordem sugerida ou ir direto ao que mais precisa agora. Este é o seu espaço, use
                  como se sentir mais confortável.
                </p>
              </div>
            </div>

            {/* Your 4 Pillars */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Seus 4 Pilares da Jornada Materna</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Massagens na Gestação</p>
                    <p className="text-sm text-gray-600">Alívio e conexão com seu bebê</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Método P.E.G.A</p>
                    <p className="text-sm text-gray-600">Amamentação sem dor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Recuperação Pós-Parto</p>
                    <p className="text-sm text-gray-600">Renascendo junto com seu bebê</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sono Tranquilo</p>
                    <p className="text-sm text-gray-600">Noites mais leves para vocês duas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Buttons */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Recursos Importantes</h3>
              <p className="text-gray-600 text-center mb-6">Tenha sempre à mão estes recursos especiais</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  className="text-white hover:opacity-90 h-12"
                  style={{ backgroundColor: "#FF2D84" }}
                  onClick={() => window.open("mailto:suportealiviomamae@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" />💌 Suporte Personalizado
                </Button>
                <Button
                  className="bg-white border-2 text-gray-900 hover:bg-gray-50 h-12"
                  style={{ borderColor: "#FF2D84" }}
                  onClick={() => window.open("https://t.me/+vYO6vwiVGpo5ZjRh", "_blank")}
                >
                  <Users className="w-4 h-4 mr-2" />👥 Grupo VIP
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <div></div>
              <Link href="/members/module/2">
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
