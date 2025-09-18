"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BonusPage() {
  const handleDownloadBonus = (filename: string) => {
    const link = document.createElement("a")
    link.href = `/${filename}`
    link.download = filename
    link.click()
  }

  const handleOpenPlaylist = () => {
    window.open("https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd", "_blank")
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">🎁 Bônus Exclusivos</h1>
          <p className="text-lg text-muted-foreground">Recursos extras para tornar sua jornada ainda mais especial</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Guia de Óleos Essenciais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Lista completa de óleos seguros para usar durante a gravidez, com propriedades e formas de uso.
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• 15 óleos essenciais seguros</li>
                <li>• Propriedades terapêuticas</li>
                <li>• Receitas de misturas</li>
                <li>• Precauções importantes</li>
              </ul>
              <Button className="w-full" onClick={() => handleDownloadBonus("bonus-oleos-essenciais.pdf")}>
                Baixar Guia (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
                Playlist Relaxante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                30 músicas cuidadosamente selecionadas para criar o ambiente perfeito durante as massagens.
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Música clássica suave</li>
                <li>• Sons da natureza</li>
                <li>• Música instrumental</li>
                <li>• Frequências relaxantes</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleOpenPlaylist}>
                Abrir no Spotify
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Checklist do Parto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Lista completa para se preparar para o grande dia, desde a mala da maternidade até documentos.
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Mala da maternidade</li>
                <li>• Documentos necessários</li>
                <li>• Itens para o bebê</li>
                <li>• Plano de parto</li>
              </ul>
              <Button className="w-full" onClick={() => handleDownloadBonus("checklist-parto.pdf")}>
                Baixar Checklist (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                Receitas de Chás
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                10 receitas de chás seguros e calmantes para diferentes momentos da gravidez.
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Chás para náuseas</li>
                <li>• Chás relaxantes</li>
                <li>• Chás digestivos</li>
                <li>• Chás para o sono</li>
              </ul>
              <Button className="w-full" onClick={() => handleDownloadBonus("receitas-chas.pdf")}>
                Baixar Receitas (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🌟 Valor Total dos Bônus</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Se vendidos separadamente, estes bônus valeriam mais de <strong>R$ 197</strong>
            </p>
            <p className="text-primary font-semibold">Mas você recebe TUDO GRÁTIS com seu Alívio Mamãe!</p>
          </div>
        </div>
      </div>
    </main>
  )
}
