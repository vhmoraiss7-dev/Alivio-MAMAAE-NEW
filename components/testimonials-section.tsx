import { Card, CardContent } from "@/components/ui/card"

const StarIcon = () => (
  <svg className="h-4 w-4 fill-accent text-accent" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const QuoteIcon = () => (
  <svg className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
)

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Mãe de primeira viagem",
    content:
      "Estava sofrendo muito com dores nas costas no 7º mês. As massagens do guia me salvaram! Em 3 dias já senti uma diferença incrível.",
    rating: 5,
    image: "/happy-pregnant-woman-smiling.jpg",
  },
  {
    name: "Mariana Silva",
    role: "Influenciadora @mari_maternidade",
    content:
      "Recomendo para todas as minhas seguidoras! O conteúdo é muito completo e as técnicas realmente funcionam. Minha gestação ficou muito mais tranquila.",
    rating: 5,
    image: "/pregnant-influencer-woman.jpg",
  },
  {
    name: "Juliana Santos",
    role: "Gestante de gêmeos",
    content:
      "Com gêmeos, as dores eram dobradas! Este guia foi minha salvação. As massagens me ajudaram muito com o inchaço e as dores lombares.",
    rating: 5,
    image: "/pregnant-woman-with-twins.jpg",
  },
  {
    name: "Camila Rodrigues",
    role: "Doula certificada",
    content:
      "Como profissional, posso afirmar que o conteúdo é de excelente qualidade. Técnicas seguras e muito bem explicadas. Recomendo sempre!",
    rating: 5,
    image: "/professional-doula-woman.jpg",
  },
  {
    name: "Patricia Lima",
    role: "Mãe de 2 filhos",
    content:
      "Na minha segunda gestação usei o guia desde o início. Que diferença! Consegui trabalhar até mais tarde e dormir muito melhor.",
    rating: 5,
    image: "/experienced-mother-woman.jpg",
  },
  {
    name: "Fernanda Costa",
    role: "Fisioterapeuta",
    content:
      "Excelente material! Como fisioterapeuta, aprovo todas as técnicas. É um complemento perfeito para o acompanhamento profissional.",
    rating: 5,
    image: "/physiotherapist-professional-woman.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-4 testimonial-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            O que dizem as
            <span className="text-primary"> mamães</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 5.200 gestantes já transformaram sua experiência com nosso guia. Veja alguns depoimentos reais:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <div className="relative">
                  <QuoteIcon />
                  <p className="text-sm leading-relaxed text-pretty pl-6">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5.200+</div>
              <div className="text-sm text-muted-foreground">Mamães satisfeitas</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Recomendam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
