"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ComboProductsSection() {
  const products = [
    {
      title: "ALÍVIO MAMÃE",
      subtitle: "10 Massagens para Gestação",
      description: "Técnicas seguras para alívio de dores, inchaço e desconfortos durante toda a gravidez.",
      image: "/pregnant-woman-relaxing-during-massage-therapy-ses.jpg",
      value: "R$ 97",
      icon: "🤰",
    },
    {
      title: "MAMÃE CONECTADA",
      subtitle: "Método P.E.G.A de Amamentação",
      description: "Pega correta, posicionamento ideal e soluções para os principais problemas da amamentação.",
      image: "/mother-breastfeeding-baby-peacefully.jpg",
      value: "R$ 97",
      icon: "🤱",
    },
    {
      title: "RENASCER MAMÃE",
      subtitle: "Recuperação Pós-Parto Completa",
      description: "Corpo, mente e autoestima. Cicatrização, libido, organização da rotina e bem-estar total.",
      image: "/happy-mother-postpartum-recovery.jpg",
      value: "R$ 97",
      icon: "💪",
    },
    {
      title: "SONO TRANQUILO",
      subtitle: "Bebê e Mamãe Dormem Melhor",
      description: "Técnicas comprovadas para estabelecer rotina de sono saudável para toda a família.",
      image: "/peaceful-baby-sleeping-soundly.jpg",
      value: "R$ 97",
      icon: "😴",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que você recebe no <span className="text-primary">COMBO COMPLETO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 guias especializados que cobrem toda sua jornada materna, do início da gestação aos primeiros anos do bebê
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {product.icon} {product.value}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{product.subtitle}</h4>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          id="pricing-container"
          className="text-center bg-card p-8 rounded-2xl border-2 border-primary/20 cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
        >
          <div className="mb-4">
            <span className="text-2xl text-muted-foreground line-through">
              Separados, cada guia custaria R$97 (total R$297)
            </span>
          </div>
          <div className="text-4xl font-bold text-primary mb-2">COMBO COMPLETO:</div>
          <div className="bg-pink-600 text-white px-6 py-4 rounded-xl border-2 border-pink-200 inline-block text-5xl font-bold mb-4">
            R$ 67
          </div>
          <div className="text-lg text-foreground font-semibold">💰 Você economiza R$ 230</div>
        </div>
      </div>
    </section>
  )
}
