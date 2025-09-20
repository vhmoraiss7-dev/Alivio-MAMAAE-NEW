"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, AlertCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export function Chapter5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50" id="capitulo-5-recuperacao-pos-parto">
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
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 5 — Recuperação Pós-Parto</h1>
                  <p className="text-sm text-gray-500">Renascendo junto com seu bebê</p>
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
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Capítulo 5 — Recuperação Pós-Parto</CardTitle>
            <p className="text-lg text-gray-600">Redescobrindo sua essência após a maternidade</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4 font-medium text-center">
                  "O pós-parto é um renascimento. Seu corpo e sua mente precisam de tempo, cuidado e gentileza."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este capítulo é dedicado a você, mulher, que está se redescobrindo após a chegada do seu bebê. Aqui
                  você encontrará orientações carinhosas para cuidar de si mesma enquanto se adapta à nova realidade da
                  maternidade.
                </p>
              </div>
            </div>

            {/* First Weeks */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primeiras Semanas</h3>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">O que é esperado × Sinais de alerta</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-green-700 mb-3">✓ Normal e esperado:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Sangramento vaginal (lóquios) por até 6 semanas</li>
                      <li>• Cólicas uterinas durante amamentação</li>
                      <li>• Inchaço nas pernas e pés</li>
                      <li>• Sensibilidade nos seios</li>
                      <li>• Cansaço e alterações de humor</li>
                      <li>• Dificuldade para dormir</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700 mb-3">⚠️ Sinais de alerta:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Sangramento intenso (mais que uma absorvente/hora)</li>
                      <li>• Febre acima de 38°C</li>
                      <li>• Dor intensa que piora</li>
                      <li>• Vermelhidão ou calor na incisão</li>
                      <li>• Tristeza profunda persistente</li>
                      <li>• Dificuldade extrema para cuidar do bebê</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Healing */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cicatrização</h3>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Parto Normal</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Higiene:</strong> Lave com água morna, seque delicadamente, troque absorventes
                      frequentemente
                    </p>
                    <p>
                      <strong>Conforto:</strong> Compressas frias nas primeiras 24h, depois mornas. Almofada para sentar
                    </p>
                    <p>
                      <strong>Tempo:</strong> Pontos absorvem em 7-10 dias, cicatrização completa em 4-6 semanas
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Cesárea</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Higiene:</strong> Banho normal após 48h, seque bem a incisão, evite cremes sem orientação
                    </p>
                    <p>
                      <strong>Conforto:</strong> Apoie a barriga ao tossir/espirrar, use cinta se orientado pelo médico
                    </p>
                    <p>
                      <strong>Tempo:</strong> Pontos/grampos removidos em 7-14 dias, cicatrização completa em 6-8
                      semanas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-esteem */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Autoestima da Mulher</h3>

              <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Como se olhar com carinho</h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Aceite as mudanças:</strong> Seu corpo fez algo extraordinário. Estrias, flacidez e mudanças
                    são marcas de amor.
                  </p>
                  <p>
                    <strong>Vista-se bem:</strong> Roupas confortáveis que te fazem sentir bonita, mesmo em casa.
                  </p>
                  <p>
                    <strong>Cuidados básicos:</strong> Banho relaxante, hidratação da pele, cabelo arrumado - pequenos
                    gestos que fazem diferença.
                  </p>
                  <p>
                    <strong>Fotos e memórias:</strong> Registre momentos especiais. Você está mais bonita do que
                    imagina.
                  </p>
                  <p>
                    <strong>Paciência:</strong> A recuperação é gradual. Seja gentil consigo mesma neste processo.
                  </p>
                </div>
              </div>
            </div>

            {/* Libido & Relationship */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Libido & Relacionamento</h3>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Comunicação:</strong> Converse abertamente com seu parceiro sobre suas necessidades e
                    limitações.
                  </p>
                  <p>
                    <strong>Tempo do corpo:</strong> A libido pode demorar para voltar. Hormônios, cansaço e mudanças
                    físicas influenciam.
                  </p>
                  <p>
                    <strong>Intimidade além do sexo:</strong> Carinho, conversas, momentos juntos fortalecem a conexão.
                  </p>
                  <p>
                    <strong>Quando retomar:</strong> Aguarde liberação médica (geralmente 6 semanas) e respeite seu
                    ritmo emocional.
                  </p>
                  <p>
                    <strong>Lubrificação:</strong> Normal precisar de lubrificante devido às mudanças hormonais.
                  </p>
                </div>
              </div>
            </div>

            {/* Routine Organization */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organização da Rotina</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Dividir tarefas</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Defina responsabilidades com o parceiro</li>
                    <li>• Aceite que nem tudo será perfeito</li>
                    <li>• Priorize o essencial</li>
                    <li>• Use listas simples para organizar</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pedir ajuda</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Familiares podem ajudar com limpeza</li>
                    <li>• Amigos podem trazer comida</li>
                    <li>• Considere ajuda profissional se possível</li>
                    <li>• Não tenha vergonha de aceitar apoio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mental Health */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Saúde Mental</h3>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ansiedade e tristeza no pós-parto</h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Baby blues (normal):</strong> Tristeza, choro fácil, irritabilidade nos primeiros 15 dias.
                    Passa naturalmente.
                  </p>
                  <p>
                    <strong>Depressão pós-parto (precisa atenção):</strong> Tristeza profunda, falta de energia,
                    dificuldade de vínculo com bebê por mais de 2 semanas.
                  </p>
                  <p>
                    <strong>Quando buscar ajuda:</strong> Se os sentimentos interferem no cuidado com você ou o bebê.
                  </p>
                  <p>
                    <strong>Apoio profissional:</strong> Psicólogo, psiquiatra, grupos de apoio. Não é fraqueza, é
                    cuidado.
                  </p>
                </div>
              </div>
            </div>

            {/* Physical Activity */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Retorno Gradual à Atividade Física</h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Passos seguros</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Primeiras semanas:</strong> Caminhadas leves, exercícios respiratórios, alongamentos
                      suaves
                    </p>
                    <p>
                      <strong>Após liberação médica:</strong> Exercícios de fortalecimento do core, pilates, natação
                    </p>
                    <p>
                      <strong>Progressão gradual:</strong> Aumente intensidade aos poucos, respeite os limites do corpo
                    </p>
                    <p>
                      <strong>Sinais para parar:</strong> Dor, sangramento, tontura, falta de ar excessiva
                    </p>
                  </div>
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
                    Conteúdo educacional; não substitui orientação médica. Sempre consulte seu obstetra ou ginecologista
                    para orientações específicas sobre sua recuperação.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/4">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members/module/6">
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
