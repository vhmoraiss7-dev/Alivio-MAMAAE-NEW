"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, MessageCircle, Heart } from "lucide-react"

const faqCategories = [
  {
    id: "massages",
    title: "Massagens na Gestação",
    icon: "🤱",
    questions: [
      {
        id: 1,
        question: "É seguro fazer massagem durante toda a gravidez?",
        answer:
          "Sim, as massagens são seguras quando feitas corretamente. Evite massagens no primeiro trimestre se houver histórico de aborto. Sempre use pressão suave e evite pontos de pressão específicos. Consulte seu médico se tiver dúvidas.",
      },
      {
        id: 2,
        question: "Posso usar óleos essenciais durante a massagem?",
        answer:
          "Alguns óleos essenciais devem ser evitados na gravidez. Use apenas óleos seguros como lavanda (diluída), camomila e óleo de coco. Evite: canela, cravo, eucalipto, hortelã-pimenta e alecrim. Sempre dilua e teste em pequena área primeiro.",
      },
      {
        id: 3,
        question: "Quanto tempo deve durar cada sessão de massagem?",
        answer:
          "Recomendamos sessões de 15-20 minutos para iniciantes, podendo estender até 30 minutos conforme o conforto. Ouça seu corpo - se sentir desconforto, pare imediatamente. A frequência ideal é 2-3 vezes por semana.",
      },
      {
        id: 4,
        question: "Quais posições são mais seguras para a massagem?",
        answer:
          "Após 20 semanas, evite deitar de barriga para cima. Use posição lateral com almofadas de apoio, sentada em cadeira confortável, ou de pé apoiada na parede. A posição deve ser sempre confortável para você.",
      },
    ],
  },
  {
    id: "breastfeeding",
    title: "Amamentação (Método P.E.G.A)",
    icon: "🤱",
    questions: [
      {
        id: 5,
        question: "O que fazer se o bebê não consegue fazer a pega correta?",
        answer:
          "Primeiro, verifique a posição: bebê de frente para você, barriga com barriga. Estimule o reflexo de busca tocando o lábio inferior com o mamilo. Se persistir, procure ajuda de consultora em amamentação ou pediatra.",
      },
      {
        id: 6,
        question: "É normal sentir dor durante a amamentação?",
        answer:
          "Dor intensa não é normal. Um desconforto leve nos primeiros dias pode ocorrer, mas dor persistente indica pega incorreta. Revise a técnica P.E.G.A e procure ajuda profissional se a dor continuar.",
      },
      {
        id: 7,
        question: "Como saber se o bebê está mamando o suficiente?",
        answer:
          "Sinais de boa alimentação: bebê ganha peso adequadamente, faz xixi claro 6+ vezes/dia, fica satisfeito após mamadas, tem períodos de alerta. Consulte o pediatra para acompanhamento do crescimento.",
      },
      {
        id: 8,
        question: "Posso amamentar se tiver fissuras no mamilo?",
        answer:
          "Sim, mas corrija a pega primeiro. Use lanolina pura após mamadas, deixe secar ao ar, e considere usar conchas protetoras. Se muito doloroso, extraia leite e ofereça no copinho temporariamente.",
      },
    ],
  },
  {
    id: "postpartum",
    title: "Pós-parto e Recuperação",
    icon: "🌸",
    questions: [
      {
        id: 9,
        question: "Quando posso começar a fazer exercícios após o parto?",
        answer:
          "Parto normal: exercícios leves após 2-3 semanas com liberação médica. Cesárea: aguarde 6-8 semanas. Comece gradualmente com caminhadas e exercícios respiratórios. Sempre consulte seu médico primeiro.",
      },
      {
        id: 10,
        question: "É normal ter sangramento por quanto tempo?",
        answer:
          "Lóquios (sangramento pós-parto) podem durar 4-6 semanas. Inicialmente vermelho vivo, depois marrom e amarelado. Procure ajuda se: sangramento muito intenso, odor forte, febre ou coágulos grandes.",
      },
      {
        id: 11,
        question: "Como lidar com a tristeza pós-parto?",
        answer:
          "Baby blues (até 2 semanas) é normal. Sintomas: choro, irritabilidade, ansiedade. Se persistir além de 2 semanas ou interferir no dia a dia, pode ser depressão pós-parto. Procure ajuda profissional imediatamente.",
      },
      {
        id: 12,
        question: "Quando a menstruação volta após o parto?",
        answer:
          "Varia muito. Sem amamentação: 6-8 semanas. Com amamentação exclusiva: pode demorar meses. A ovulação pode ocorrer antes da primeira menstruação, então use contraceptivos se não desejar nova gravidez.",
      },
    ],
  },
  {
    id: "sleep",
    title: "Sono do Bebê",
    icon: "😴",
    questions: [
      {
        id: 13,
        question: "Meu bebê só dorme no colo, o que fazer?",
        answer:
          "Gradualmente diminua o tempo no colo. Coloque no berço ainda sonolento, não totalmente dormindo. Use técnica 'pick up, put down'. Seja consistente e paciente - pode levar algumas semanas para mudar o hábito.",
      },
      {
        id: 14,
        question: "É seguro o bebê dormir de bruços?",
        answer:
          "NÃO. Sempre coloque o bebê de barriga para cima para dormir até 1 ano de idade. Esta é a posição mais segura para prevenir a síndrome da morte súbita infantil (SMSI).",
      },
      {
        id: 15,
        question: "Quantas horas por dia um recém-nascido deve dormir?",
        answer:
          "Recém-nascidos dormem 14-17 horas por dia, em períodos de 2-4 horas. Cada bebê é único. O importante é que esteja ganhando peso e se desenvolvendo bem. Consulte o pediatra se tiver preocupações.",
      },
      {
        id: 16,
        question: "Posso usar travesseiro e cobertor no berço?",
        answer:
          "Não até 12 meses. Use apenas lençol bem esticado e roupas adequadas para temperatura. Evite objetos soltos no berço: travesseiros, cobertores, brinquedos ou protetores de berço.",
      },
    ],
  },
]

export default function FAQModule() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openQuestions, setOpenQuestions] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }))

  const displayCategories = selectedCategory
    ? filteredCategories.filter((cat) => cat.id === selectedCategory)
    : filteredCategories

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <Card className="border-pink-200">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar por palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-pink-500 hover:bg-pink-600" : ""}
              >
                Todas as Categorias
              </Button>
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-pink-500 hover:bg-pink-600" : ""}
                >
                  {category.icon} {category.title}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {displayCategories.map((category) => (
          <div key={category.id}>
            {category.questions.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-3xl">{category.icon}</span>
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const isOpen = openQuestions.includes(faq.id)

                    return (
                      <Card key={faq.id} className="border-pink-200">
                        <CardHeader
                          className="cursor-pointer hover:bg-pink-50 transition-colors"
                          onClick={() => toggleQuestion(faq.id)}
                        >
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
                            )}
                          </CardTitle>
                        </CardHeader>

                        {isOpen && (
                          <CardContent className="pt-0">
                            <div className="bg-pink-50 p-4 rounded-lg">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {searchTerm && displayCategories.every((category) => category.questions.length === 0) && (
        <Card className="border-pink-200">
          <CardContent className="p-8 text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhum resultado encontrado</h3>
            <p className="text-gray-600 mb-4">
              Não encontramos perguntas relacionadas a "{searchTerm}". Tente usar outras palavras-chave.
            </p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Limpar Busca
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Contact Support */}
      <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-white">
        <CardContent className="p-6">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Não Encontrou Sua Dúvida?</h3>
            <p className="text-gray-600 mb-4">Nossa equipe está pronta para responder suas perguntas específicas</p>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Heart className="w-4 h-4 mr-2" />
              Falar com Suporte
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Aviso Educacional Importante</h4>
              <p className="text-red-700 text-sm leading-relaxed">
                As informações fornecidas neste FAQ são apenas para fins educacionais e não substituem o aconselhamento
                médico profissional. Sempre consulte seu médico, pediatra ou profissional de saúde qualificado para
                orientações específicas sobre sua situação individual.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
