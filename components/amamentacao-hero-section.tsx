"use client"

import { Button } from "@/components/ui/button"

export function AmamentacaoHeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-gradient py-20 px-4 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse shadow-lg">
              🚨 OFERTA LIMITADA - 48H APENAS!
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              <span className="text-accent">MAMÃE CONECTADA:</span>
              <br />O Método Revolucionário da Pega Perfeita
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra o <strong className="text-primary">Método P.E.G.A</strong> que já transformou mais de
              <strong className="text-accent"> 2.847 mães</strong> em especialistas em amamentação em apenas 7 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-bounce hover:animate-none relative overflow-hidden group"
                onClick={() => scrollToSection("precos")}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative z-10">🔥 QUERO O MÉTODO P.E.G.A AGORA!</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl font-bold bg-transparent"
                onClick={() => scrollToSection("beneficios")}
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img
                  src="/happy-pregnant-woman-smiling.jpg"
                  alt="Mãe feliz"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/pregnant-influencer-woman.jpg"
                  alt="Mãe influencer"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/pregnant-woman-with-twins.jpg"
                  alt="Mãe com gêmeos"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span>
                <strong className="text-primary">+2.847 mães</strong> já amamentam com confiança
              </span>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src="/beautiful-mother-breastfeeding-baby-peacefully--wa.jpg"
              alt="Mãe amamentando bebê com amor"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-sm text-gray-600">
                "Finalmente consegui amamentar sem dor! Meu bebê pegou perfeitamente."
              </p>
              <p className="text-xs text-gray-500 mt-1">- Marina, mãe de primeira viagem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
