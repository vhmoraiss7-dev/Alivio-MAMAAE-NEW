"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Baby, Moon, Gift, HelpCircle, Play, Mail, Users } from "lucide-react"

const chapters = [
  {
    id: 1,
    title: "Boas-vindas",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    description: "Este espaço é só seu 💕",
  },
  {
    id: 2,
    title: "Como usar o Combo",
    icon: BookOpen,
    color: "bg-rose-100 text-rose-600",
    description: "Seu guia rápido de navegação",
  },
  {
    id: 3,
    title: "Massagens na Gestação",
    icon: Baby,
    color: "bg-pink-100 text-pink-600",
    description: "Alívio e conexão com seu bebê",
  },
  {
    id: 4,
    title: "Método P.E.G.A",
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
    description: "Amamentação sem dor",
  },
  {
    id: 5,
    title: "Recuperação Pós-Parto",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    description: "Renascendo junto com seu bebê",
  },
  {
    id: 6,
    title: "Sono Tranquilo",
    icon: Moon,
    color: "bg-rose-100 text-rose-600",
    description: "Noites mais leves para vocês duas",
  },
  {
    id: 7,
    title: "Bônus",
    icon: Gift,
    color: "bg-yellow-100 text-yellow-600",
    description: "Presentes extras especiais",
  },
  {
    id: 8,
    title: "FAQ e Suporte",
    icon: HelpCircle,
    color: "bg-blue-100 text-blue-600",
    description: "Perguntas comuns e ajuda",
  },
]

export function MembersDashboard() {
  const router = useRouter()

  const handleChapterClick = (chapterId: number) => {
    router.push(`/members/module/${chapterId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#FF2D84" }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Combo Alívio Mamãe</h1>
                <p className="text-sm text-gray-500">Biblioteca Digital</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => window.open("https://t.me/+vYO6vwiVGpo5ZjRh", "_blank")}
              >
                <Users className="w-4 h-4" />
                <span>Grupo VIP</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => window.open("mailto:suportealiviomamae@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4" />
                <span>Suporte</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
          <div className="mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#FF2D84" }}
            >
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Combo Alívio Mamãe – Biblioteca Digital</h1>
            <p className="text-xl text-gray-600 mb-6">Do primeiro chute até as noites tranquilas com seu bebê.</p>
          </div>

          <div className="bg-pink-50 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              "Bem-vinda, mamãe 💗<br />
              Este Combo foi criado com carinho para te acompanhar em cada fase: da gestação, às primeiras mamadas, à
              sua recuperação e ao sono tranquilo do bebê.
              <br />
              Aqui você encontrará orientações simples, mas poderosas, escritas de mãe para mãe, para que sua jornada
              seja mais leve, segura e cheia de amor."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="text-white hover:opacity-90"
              style={{ backgroundColor: "#FF2D84" }}
              onClick={() => window.open("https://t.me/+vYO6vwiVGpo5ZjRh", "_blank")}
            >
              <Users className="w-4 h-4 mr-2" />
              Grupo VIP
            </Button>
            <Button
              variant="outline"
              className="border-2 hover:bg-pink-50 bg-transparent"
              style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
              onClick={() => window.open("mailto:suportealiviomamae@gmail.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Suporte
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Capítulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {chapters.map((chapter) => {
              const IconComponent = chapter.icon

              return (
                <Card key={chapter.id} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${chapter.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Cap. {chapter.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-base leading-tight">{chapter.title}</CardTitle>
                    <p className="text-sm text-gray-600 leading-relaxed">{chapter.description}</p>
                  </CardHeader>

                  <CardContent>
                    <Button
                      className="w-full text-sm"
                      style={{ backgroundColor: "#FF2D84" }}
                      onClick={() => handleChapterClick(chapter.id)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ler Capítulo
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Navegação Rápida</h3>
          <p className="text-center text-gray-600 mb-6">
            "Você não precisa ler tudo de uma vez. Use este Combo como uma bússola: vá ao capítulo que faz sentido para
            o seu momento."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center space-y-2 h-20 bg-transparent border-2"
              style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
              onClick={() => handleChapterClick(3)}
            >
              <Baby className="w-5 h-5" />
              <span className="text-sm text-center">Se está grávida → Massagens</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center space-y-2 h-20 bg-transparent border-2"
              style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
              onClick={() => handleChapterClick(4)}
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm text-center">Primeiras mamadas → P.E.G.A</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center space-y-2 h-20 bg-transparent border-2"
              style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
              onClick={() => handleChapterClick(6)}
            >
              <Moon className="w-5 h-5" />
              <span className="text-sm text-center">Noites melhores → Sono Tranquilo</span>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Extras Especiais</h3>
            <p className="text-gray-600">Para deixar sua experiência ainda mais especial</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              className="text-white hover:opacity-90 h-12"
              style={{ backgroundColor: "#FF2D84" }}
              onClick={() => window.open("https://open.spotify.com/playlist/1OUmCtvtAkSHvOjJg9G0sE", "_blank")}
            >
              <Play className="w-4 h-4 mr-2" />🎶 Playlist Relaxante
            </Button>

            <Button
              className="bg-white border-2 text-gray-900 hover:bg-gray-50 h-12"
              style={{ borderColor: "#FF2D84" }}
              onClick={() => window.open("https://t.me/+vYO6vwiVGpo5ZjRh", "_blank")}
            >
              <Users className="w-4 h-4 mr-2" />👥 Grupo VIP
            </Button>

            <Button
              variant="outline"
              className="border-2 hover:bg-pink-50 bg-transparent h-12"
              style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
              onClick={() => window.open("mailto:suportealiviomamae@gmail.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />💌 Suporte
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
