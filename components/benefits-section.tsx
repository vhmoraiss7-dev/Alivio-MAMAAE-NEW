import { Card, CardContent } from "@/components/ui/card"

const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const AwardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

const benefits = [
  {
    icon: HeartIcon,
    title: "Alívio das Dores",
    description: "Técnicas específicas para dores nas costas, pernas e articulações comuns na gestação",
  },
  {
    icon: ZapIcon,
    title: "Redução do Estresse",
    description: "Massagens relaxantes que diminuem a ansiedade e promovem bem-estar emocional",
  },
  {
    icon: ShieldIcon,
    title: "100% Seguro",
    description: "Todas as técnicas foram aprovadas por obstetras e são seguras para mãe e bebê",
  },
  {
    icon: ClockIcon,
    title: "Resultados Rápidos",
    description: "Sinta alívio imediato com massagens de apenas 10-15 minutos por dia",
  },
  {
    icon: UsersIcon,
    title: "Para Toda Gestação",
    description: "Técnicas adaptadas para cada trimestre, do início ao final da gravidez",
  },
  {
    icon: AwardIcon,
    title: "Método Comprovado",
    description: "Baseado em estudos científicos e aprovado por mais de 5.000 gestantes",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Por que escolher nosso
            <span className="text-primary"> método?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Desenvolvido especialmente para gestantes, nosso guia oferece técnicas seguras e eficazes para cada fase da
            sua gravidez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {benefit.icon()}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
