"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, Gift, Calendar, FileText, Heart, Download, Music, Play } from "lucide-react"

const bonusItems = [
  {
    id: 1,
    title: "Playlist Relaxante",
    icon: Music,
    type: "Música Terapêutica",
    description: "Músicas especialmente selecionadas para relaxamento durante gestação e amamentação",
    content: {
      intro:
        "Uma playlist cuidadosamente selecionada com músicas relaxantes para acompanhar você durante a gestação, amamentação e momentos de descanso com seu bebê.",
      sections: [
        {
          title: "Para que serve?",
          items: [
            "Reduzir ansiedade e estresse durante a gestação",
            "Criar ambiente tranquilo para amamentação",
            "Ajudar no relaxamento antes de dormir",
            "Acalmar o bebê durante cólicas",
            "Momentos de conexão mãe-bebê",
            "Meditação e respiração consciente",
          ],
        },
        {
          title: "Como usar?",
          items: [
            "Durante as massagens na gestação",
            "Nos momentos de amamentação",
            "Antes de dormir (você e o bebê)",
            "Durante o banho relaxante",
            "Em momentos de estresse ou ansiedade",
            "Para criar rotina de relaxamento",
          ],
        },
        {
          title: "Benefícios Científicos",
          items: [
            "Reduz cortisol (hormônio do estresse)",
            "Estimula produção de endorfinas",
            "Melhora qualidade do sono",
            "Favorece vínculo mãe-bebê",
            "Reduz percepção de dor",
            "Promove bem-estar emocional",
          ],
        },
      ],
      spotifyUrl: "https://open.spotify.com/playlist/1OUmCtvtAkSHvOjJg9G0sE",
    },
  },
  {
    id: 2,
    title: "Planner da Gestante",
    icon: Calendar,
    type: "Ferramenta Prática",
    description: "Organize sua rotina de cuidados durante a gravidez",
    content: {
      intro: "Um planner completo para acompanhar sua jornada gestacional com organização e tranquilidade.",
      sections: [
        {
          title: "Seção Semanal",
          items: [
            "Acompanhamento do crescimento do bebê",
            "Espaço para anotações médicas",
            "Registro de sintomas e sensações",
            "Planejamento de consultas e exames",
            "Lista de tarefas da semana",
          ],
        },
        {
          title: "Seção de Bem-estar",
          items: [
            "Registro de exercícios e massagens",
            "Controle de alimentação",
            "Acompanhamento do sono",
            "Momentos de relaxamento",
            "Gratidão diária",
          ],
        },
        {
          title: "Preparação para o Parto",
          items: [
            "Lista do enxoval",
            "Mala da maternidade",
            "Plano de parto",
            "Contatos importantes",
            "Documentos necessários",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "Guia de Emergências",
    icon: Heart,
    type: "Referência Rápida",
    description: "Sinais de alerta e quando procurar ajuda médica",
    content: {
      intro:
        "Um guia essencial com informações importantes sobre quando buscar ajuda médica durante a gestação e pós-parto.",
      sections: [
        {
          title: "Sinais de Alerta na Gestação",
          items: [
            "Sangramento vaginal intenso",
            "Dor abdominal severa e persistente",
            "Diminuição ou ausência de movimentos fetais",
            "Dor de cabeça intensa com visão turva",
            "Inchaço súbito de mãos, rosto ou pés",
            "Febre alta (acima de 38°C)",
            "Vômitos excessivos e persistentes",
          ],
        },
        {
          title: "Sinais de Trabalho de Parto",
          items: [
            "Contrações regulares e intensas",
            "Rompimento da bolsa amniótica",
            "Perda do tampão mucoso com sangue",
            "Pressão intensa na pelve",
            "Dor lombar intensa e contínua",
          ],
        },
        {
          title: "Emergências Pós-parto",
          items: [
            "Sangramento excessivo (mais que menstruação)",
            "Febre alta persistente",
            "Dor intensa no peito ou dificuldade para respirar",
            "Sinais de infecção na cesárea",
            "Depressão pós-parto severa",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "Checklist Completo",
    icon: FileText,
    type: "Lista de Verificação",
    description: "Listas práticas para cada fase da maternidade",
    content: {
      intro: "Checklists organizados para te ajudar a não esquecer nada importante em cada etapa.",
      sections: [
        {
          title: "Primeiro Trimestre",
          items: [
            "✓ Confirmar gravidez com exame de sangue",
            "✓ Escolher obstetra",
            "✓ Iniciar pré-natal",
            "✓ Tomar ácido fólico",
            "✓ Parar álcool e cigarro",
            "✓ Ajustar alimentação",
            "✓ Comunicar ao trabalho (quando apropriado)",
          ],
        },
        {
          title: "Segundo Trimestre",
          items: [
            "✓ Fazer ultrassom morfológico",
            "✓ Descobrir o sexo do bebê",
            "✓ Começar curso de gestantes",
            "✓ Iniciar compras do enxoval",
            "✓ Planejar chá de bebê",
            "✓ Fazer fotos da barriga",
            "✓ Preparar quarto do bebê",
          ],
        },
        {
          title: "Terceiro Trimestre",
          items: [
            "✓ Finalizar enxoval",
            "✓ Preparar mala da maternidade",
            "✓ Fazer curso de amamentação",
            "✓ Escolher pediatra",
            "✓ Instalar bebê conforto no carro",
            "✓ Organizar licença maternidade",
            "✓ Preparar casa para chegada do bebê",
          ],
        },
        {
          title: "Pós-parto",
          items: [
            "✓ Registrar nascimento",
            "✓ Fazer carteira de identidade do bebê",
            "✓ Incluir bebê no plano de saúde",
            "✓ Agendar consultas de rotina",
            "✓ Organizar rede de apoio",
            "✓ Cuidar da própria recuperação",
            "✓ Estabelecer rotina de amamentação",
          ],
        },
      ],
    },
  },
]

export default function BonusModule() {
  const [completedItems, setCompletedItems] = useState<number[]>([])
  const [currentItem, setCurrentItem] = useState<number | null>(null)

  const toggleItemComplete = (itemId: number) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-white">
        <CardContent className="p-6">
          <div className="text-center">
            <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Parabéns! Você Desbloqueou os Bônus</h2>
            <p className="text-gray-600">
              Estes materiais complementares foram criados especialmente para tornar sua jornada ainda mais organizada e
              tranquila.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bonus Items */}
      <div className="space-y-6">
        {bonusItems.map((item) => {
          const Icon = item.icon
          const isCompleted = completedItems.includes(item.id)
          const isOpen = currentItem === item.id

          return (
            <Card key={item.id} className="border-pink-200">
              <CardHeader
                className="cursor-pointer hover:bg-pink-50 transition-colors"
                onClick={() => setCurrentItem(isOpen ? null : item.id)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleItemComplete(item.id)
                        }}
                        className="text-pink-500 hover:text-pink-600"
                      >
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </button>
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-pink-600 font-medium">{item.type}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.id === 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-200 bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(item.content.spotifyUrl, "_blank")
                        }}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Spotify
                      </Button>
                    )}
                    {item.id !== 1 && (
                      <Button variant="outline" size="sm" className="text-pink-600 border-pink-200 bg-transparent">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      {isOpen ? "Fechar" : "Ver Conteúdo"}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              {isOpen && (
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <p className="text-gray-700 bg-pink-50 p-4 rounded-lg">{item.content.intro}</p>

                    {item.id === 1 && (
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                        <div className="text-center mb-4">
                          <Music className="w-16 h-16 text-green-500 mx-auto mb-3" />
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Playlist Alívio Mamãe</h3>
                          <p className="text-gray-600 mb-4">
                            Músicas cuidadosamente selecionadas para sua jornada materna
                          </p>
                          <Button
                            className="bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => window.open(item.content.spotifyUrl, "_blank")}
                          >
                            <Play className="w-5 h-5 mr-2" />
                            Ouvir no Spotify
                          </Button>
                        </div>
                      </div>
                    )}

                    {item.content.sections.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-800 border-l-4 border-pink-500 pl-3">
                          {section.title}
                        </h4>
                        <div className="ml-4 space-y-2">
                          {section.items.map((sectionItem, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2 text-gray-700">
                              <span className="text-pink-500 mt-1">{sectionItem.startsWith("✓") ? "" : "•"}</span>
                              <span>{sectionItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <p className="text-blue-700 text-sm">
                        <strong>💡 Dica:</strong>{" "}
                        {item.id === 1
                          ? "Salve a playlist no seu Spotify para ter acesso offline. Use fones de ouvido para uma experiência mais imersiva."
                          : "Imprima este material e mantenha sempre à mão. Você também pode salvá-lo no seu celular para consulta rápida."}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <Button
                        onClick={() => toggleItemComplete(item.id)}
                        variant={isCompleted ? "secondary" : "default"}
                        className={isCompleted ? "bg-green-100 text-green-700" : "bg-pink-500 hover:bg-pink-600"}
                      >
                        {isCompleted ? "✓ Visualizado" : "Marcar como Visualizado"}
                      </Button>

                      {item.id === 1 ? (
                        <Button
                          variant="outline"
                          className="text-green-600 border-green-200 bg-transparent"
                          onClick={() => window.open(item.content.spotifyUrl, "_blank")}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Abrir Spotify
                        </Button>
                      ) : (
                        <Button variant="outline" className="text-pink-600 border-pink-200 bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Baixar PDF
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
