"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, Mail, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Chapter8() {
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
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Capítulo 8 - FAQ e Suporte</h1>
                  <p className="text-sm text-gray-500">Perguntas comuns e ajuda</p>
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
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">FAQ e Suporte</CardTitle>
            <p className="text-lg text-gray-600">Respostas para suas dúvidas mais comuns</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Introduction */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Sabemos que a jornada materna traz muitas dúvidas e questionamentos. Aqui você encontrará respostas
                  para as perguntas mais frequentes e informações sobre como obter suporte personalizado.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Lembre-se: não existe pergunta boba quando se trata do bem-estar seu e do seu bebê.
                </p>
              </div>
            </div>

            {/* Support Channels */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💌 Canais de Suporte</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Suporte por Email</h4>
                      <p className="text-sm text-gray-600">Atendimento personalizado</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Para dúvidas específicas, sugestões ou qualquer questão relacionada ao Combo, entre em contato
                    conosco.
                  </p>
                  <Button
                    className="w-full text-white hover:opacity-90"
                    style={{ backgroundColor: "#FF2D84" }}
                    onClick={() => window.open("mailto:suportealiviomamae@gmail.com", "_blank")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    suportealiviomamae@gmail.com
                  </Button>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Grupo VIP</h4>
                      <p className="text-sm text-gray-600">Comunidade de mamães</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Conecte-se com outras mamães, compartilhe experiências e receba apoio da nossa comunidade
                    acolhedora.
                  </p>
                  <Button
                    className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => window.open("https://t.me/+vYO6vwiVGpo5ZjRh", "_blank")}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Entrar no Grupo VIP
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    🤰 "Posso fazer as massagens em qualquer trimestre da gestação?"
                  </h4>
                  <p className="text-gray-700">
                    Sim, mas sempre com aprovação do seu obstetra. Cada trimestre tem técnicas específicas e seguras. No
                    primeiro trimestre, evite massagens abdominais intensas. Sempre pare se sentir qualquer desconforto.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    🤱 "O Método P.E.G.A funciona para todos os bebês?"
                  </h4>
                  <p className="text-gray-700">
                    O método é eficaz para a maioria dos bebês, mas cada um é único. Alguns podem precisar de
                    adaptações. Se houver dificuldades persistentes, procure uma consultora em amamentação para apoio
                    personalizado.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    💤 "Meu bebê não dorme seguindo as dicas. O que fazer?"
                  </h4>
                  <p className="text-gray-700">
                    Cada bebê tem seu ritmo. Pode levar algumas semanas para estabelecer uma rotina. Seja consistente,
                    mas flexível. Se as dificuldades persistirem, converse com o pediatra sobre possíveis causas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    🩸 "É normal sentir dor durante a recuperação pós-parto?"
                  </h4>
                  <p className="text-gray-700">
                    Algum desconforto é normal, mas dor intensa não é. Dor abdominal severa, febre, sangramento
                    excessivo ou sinais de infecção requerem atenção médica imediata. Sempre confie no seu instinto.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    🍵 "Posso tomar todos os chás durante a amamentação?"
                  </h4>
                  <p className="text-gray-700">
                    Nem todos os chás são seguros durante a amamentação. Os que indicamos são geralmente seguros, mas
                    sempre consulte seu médico antes de incluir novos chás na sua rotina, especialmente se tomar
                    medicamentos.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    📱 "Como posso acessar o conteúdo offline?"
                  </h4>
                  <p className="text-gray-700">
                    Você pode fazer capturas de tela dos capítulos mais importantes ou anotar as informações principais
                    em um caderno. Recomendamos salvar os links importantes nos favoritos do seu navegador.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">👥 "Como funciona o Grupo VIP?"</h4>
                  <p className="text-gray-700">
                    É um grupo exclusivo no Telegram para mamães que adquiriram o Combo. Lá você pode tirar dúvidas,
                    compartilhar experiências e receber apoio de outras mamães que estão vivendo a mesma jornada.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    ⏰ "Por quanto tempo tenho acesso ao conteúdo?"
                  </h4>
                  <p className="text-gray-700">
                    Seu acesso é vitalício! Você pode consultar o conteúdo sempre que precisar, seja durante a gestação,
                    pós-parto ou em futuras gestações. O conteúdo estará sempre disponível para você.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3" />🚨 Em Caso de Emergência
              </h3>
              <div className="space-y-3 text-red-700">
                <p>
                  <strong>Lembre-se:</strong> Este conteúdo é educativo e não substitui acompanhamento médico
                  profissional.
                </p>
                <p>
                  <strong>Em emergências médicas:</strong> Procure imediatamente o pronto-socorro ou ligue para o SAMU
                  (192).
                </p>
                <p>
                  <strong>Para dúvidas não urgentes:</strong> Entre em contato com seu obstetra, pediatra ou use nossos
                  canais de suporte.
                </p>
                <p>
                  <strong>Saúde mental:</strong> Se estiver enfrentando dificuldades emocionais, procure apoio
                  psicológico especializado.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💗 Mensagem Final</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Parabéns por chegar até aqui! Você demonstrou dedicação e amor pela sua jornada materna.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Lembre-se: você é mais forte do que imagina, mais capaz do que acredita e mais amada do que pode
                perceber. Confie em si mesma e aproveite cada momento desta jornada única.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                Estamos aqui para apoiá-la sempre que precisar. 💕
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link href="/members/module/7">
                <Button variant="outline">← Capítulo Anterior</Button>
              </Link>
              <Link href="/members">
                <Button className="text-white hover:opacity-90" style={{ backgroundColor: "#FF2D84" }}>
                  Voltar ao Sumário
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
