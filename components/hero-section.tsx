"use client"

import { Button } from "@/components/ui/button"

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export function HeroSection() {
  return (
    <section className="hero-gradient py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium">
                ✨ Guia Completo Ilustrado
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                10 Massagens para
                <span className="text-primary"> Alívio Total</span> na Gestação
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Descubra técnicas seguras e eficazes para aliviar dores, reduzir o estresse e promover bem-estar durante
                toda a sua gravidez. Pronto para usar hoje mesmo!
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <HeartIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Alívio Imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Pronto para Vender</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Todos os Planos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conhecer o Método
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background"></div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Mais de 5.200 mamães já transformaram sua gestação</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/pregnant-woman-relaxing-during-massage-therapy-ses.jpg"
                alt="Gestante relaxando durante massagem"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">4.574 avaliações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
