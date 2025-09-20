"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Moon, Baby, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Chapter6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50" id="capitulo-6-sono-tranquilo">
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
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 6 — Sono Tranquilo</h1>
                  <p className="text-sm text-gray-500">Noites mais leves para vocês duas</p>
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
              <Moon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Capítulo 6 — Sono Tranquilo</CardTitle>
            <p className="text-lg text-gray-600">Pequenos ajustes trazem noites mais leves para vocês duas</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4 font-medium text-center">
                  "Pequenos ajustes trazem noites mais leves para o bebê e para você."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O sono é fundamental para a recuperação da mamãe e o desenvolvimento saudável do bebê. Neste capítulo,
                  você encontrará estratégias práticas para estabelecer rotinas de sono que funcionam para toda a
                  família.
                </p>
              </div>
            </div>

            {/* Sleep Safety */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Segurança do Sono</h3>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Posição e berço</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Sempre de barriga para cima</li>
                      <li>• Colchão firme e bem ajustado</li>
                      <li>• Lençol bem esticado</li>
                      <li>• Sem objetos soltos no berço</li>
                      <li>• Sem travesseiros, cobertores fofos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Ambiente ventilado</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Temperatura entre 18-22°C</li>
                      <li>• Circulação de ar adequada</li>
                      <li>• Evite superaquecimento</li>
                      <li>• Roupas leves e adequadas</li>
                      <li>• Quarto livre de fumaça</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleep Hygiene */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Higiene do Sono</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Luz</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Escuro durante a noite</li>
                    <li>• Luz baixa para mamadas</li>
                    <li>• Luz natural durante o dia</li>
                    <li>• Cortinas blackout</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🔇 Ruído</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Ruído branco consistente</li>
                    <li>• Evite ruídos súbitos</li>
                    <li>• Volume baixo e constante</li>
                    <li>• Sons da natureza</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🌡️ Temperatura</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Entre 18-22°C</li>
                    <li>• Ventilação adequada</li>
                    <li>• Roupas adequadas</li>
                    <li>• Evite superaquecimento</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sleep Windows by Age */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Janelas por Idade</h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Baby className="w-6 h-6 text-purple-500 mr-3" />
                    0–3 meses: 45–60 minutos
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Características:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Dorme 14-17 horas por dia</li>
                        <li>• Ciclos de 2-4 horas</li>
                        <li>• Não distingue dia e noite</li>
                        <li>• Sono mais leve</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Estratégias:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Durma quando o bebê dormir</li>
                        <li>• Mantenha luz baixa à noite</li>
                        <li>• Use ruído branco</li>
                        <li>• Swaddle (embrulhar) o bebê</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-500 mr-3" />
                    4–6 meses: 1h30–2 horas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Características:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Dorme 12-15 horas por dia</li>
                        <li>• Períodos noturnos mais longos</li>
                        <li>• 2-3 sonecas durante o dia</li>
                        <li>• Começa a distinguir dia/noite</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Estratégias:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Estabeleça rotina de sono</li>
                        <li>• Horários mais consistentes</li>
                        <li>• Ritual de relaxamento</li>
                        <li>• Ambiente escuro à noite</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg p-6 border border-green-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Moon className="w-6 h-6 text-green-500 mr-3" />
                    7–12 meses: 2–3 horas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Características:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Dorme 11-14 horas por dia</li>
                        <li>• Pode dormir a noite toda</li>
                        <li>• 1-2 sonecas durante o dia</li>
                        <li>• Padrões mais previsíveis</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Estratégias:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Rotina bem estabelecida</li>
                        <li>• Ensinar auto-acalmamento</li>
                        <li>• Consistência nos horários</li>
                        <li>• Ambiente propício ao sono</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Night Ritual */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ritual Noturno</h3>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🌙 Sequência simples (30-45 minutos)</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Banho Relaxante</p>
                      <p className="text-sm text-gray-600">Água morna, ambiente calmo, movimentos suaves</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Massagem Suave</p>
                      <p className="text-sm text-gray-600">Óleo de bebê, movimentos circulares, conversa baixa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Roupas Confortáveis</p>
                      <p className="text-sm text-gray-600">Pijama adequado à temperatura, fralda limpa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Mamada Tranquila</p>
                      <p className="text-sm text-gray-600">Ambiente escuro, sem estímulos, posição confortável</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Momento de Conexão</p>
                      <p className="text-sm text-gray-600">Cantiga de ninar, palavras carinhosas, colo tranquilo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Night Wakings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Despertares Noturnos</h3>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Acalmar sem estimular</h4>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Mantenha o ambiente escuro:</strong> Use luz mínima apenas se necessário
                  </p>
                  <p>
                    <strong>Voz baixa e calma:</strong> Sussurre ou fale em tom suave
                  </p>
                  <p>
                    <strong>Movimentos lentos:</strong> Evite brincadeiras ou estímulos
                  </p>
                  <p>
                    <strong>Atenda às necessidades:</strong> Fome, fralda, conforto
                  </p>
                  <p>
                    <strong>Volte ao berço:</strong> Assim que o bebê se acalmar
                  </p>
                </div>
              </div>
            </div>

            {/* Routine Adjustments */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ajustes de Rotina</h3>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Conforme crescimento</h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Observe os sinais:</strong> Bocejo, esfregar os olhos, irritabilidade
                  </p>
                  <p>
                    <strong>Ajuste gradualmente:</strong> Mudanças pequenas e consistentes
                  </p>
                  <p>
                    <strong>Seja flexível:</strong> Crescimento, doenças e marcos podem afetar o sono
                  </p>
                  <p>
                    <strong>Mantenha a consistência:</strong> Mesmo com ajustes, preserve a rotina básica
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">⚠️ Aviso Importante</h3>
                  <p className="text-gray-700">
                    Conteúdo educacional; não substitui orientação pediátrica. Sempre consulte o pediatra para
                    orientações específicas sobre o sono do seu bebê.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/5">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/7">
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
