import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ComboTestimonialsSection() {
  const testimonials = [
    {
      name: "Marina Santos",
      role: "Mãe de primeira viagem",
      image: "/testimonial-marina.jpg",
      text: "O combo me salvou! Usei as massagens durante toda gestação, o método P.E.G.A resolveu meus problemas de amamentação, e agora meu bebê dorme a noite toda com as técnicas do guia do sono. Valeu cada centavo!",
      highlight: "Bebê dorme a noite toda",
    },
    {
      name: "Carla Oliveira",
      role: "Mãe de 2 filhos",
      image: "/testimonial-carla.jpg",
      text: "Na minha primeira gravidez sofri muito. Com o segundo bebê, usei todos os guias do combo e foi uma experiência completamente diferente. Me senti preparada e confiante em cada etapa.",
      highlight: "Experiência completamente diferente",
    },
    {
      name: "Juliana Costa",
      role: "Enfermeira e mãe",
      image: "/testimonial-juliana.jpg",
      text: "Como profissional da saúde, posso afirmar que o conteúdo é de excelente qualidade. O guia de recuperação pós-parto me ajudou muito com a autoestima e organização da rotina. Recomendo para todas as pacientes!",
      highlight: "Conteúdo de excelente qualidade",
    },
    {
      name: "Patrícia Lima",
      role: "Mãe de gêmeos",
      image: "/testimonial-patricia.jpg",
      text: "Grávida de gêmeos, eu estava desesperada! O combo me deu segurança em tudo: desde as massagens para alívio das dores até conseguir amamentar os dois e estabelecer uma rotina de sono. Não sei o que seria de mim sem esses guias!",
      highlight: "Conseguiu amamentar gêmeos",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que as <span className="text-primary">Mamães</span> estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 5.000 mães já transformaram sua jornada materna com nossos guias
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg?height=60&width=60&query=happy mother profile"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-foreground leading-relaxed mb-4">"{testimonial.text}"</blockquote>

                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                  ✨ {testimonial.highlight}
                </div>

                <div className="flex text-accent mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-2xl border-2 border-primary/20">
            <div className="text-4xl font-bold text-primary">5.000+</div>
            <div className="text-left">
              <div className="font-bold text-foreground">Mães satisfeitas</div>
              <div className="text-sm text-muted-foreground">Avaliação média: 4.9/5 ⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
