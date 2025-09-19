"use client"

export function AmamentacaoTestimonialsSection() {
  const testimonials = [
    {
      name: "Marina Santos",
      role: "Mãe de primeira viagem",
      image: "/happy-pregnant-woman-smiling.jpg",
      rating: 5,
      text: "Estava desesperada! Meu bebê não conseguia pegar o peito e eu estava com muita dor. Com as técnicas do guia, em 2 dias ele já estava mamando perfeitamente. Salvou nossa amamentação!",
      highlight: "Resultado em 2 dias",
    },
    {
      name: "Carla Oliveira",
      role: "Mãe de gêmeos",
      image: "/pregnant-woman-with-twins.jpg",
      rating: 5,
      text: "Amamentar gêmeos parecia impossível! As posições especiais do guia me ajudaram a amamentar os dois ao mesmo tempo. Hoje eles estão com 6 meses e só mamam no peito!",
      highlight: "Sucesso com gêmeos",
    },
    {
      name: "Ana Paula Costa",
      role: "Mãe experiente",
      image: "/pregnant-influencer-woman.jpg",
      rating: 5,
      text: "Mesmo sendo mãe pela terceira vez, tive dificuldades. O guia me mostrou técnicas que eu não conhecia. Minha produção de leite aumentou muito e a amamentação ficou prazerosa!",
      highlight: "Aumentou produção de leite",
    },
    {
      name: "Juliana Ferreira",
      role: "Mãe após cesárea",
      image: "/professional-doula-woman.jpg",
      rating: 5,
      text: "Após a cesárea, estava com muita dificuldade para encontrar posições confortáveis. O guia tem posições específicas para pós-cirúrgica que mudaram tudo! Recomendo demais!",
      highlight: "Perfeito pós-cesárea",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            O Que Dizem as Mães Que Já Transformaram Sua Amamentação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de mães que superaram suas dificuldades e hoje amamentam com confiança e prazer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
                <span className="ml-2 text-sm font-semibold text-primary">{testimonial.rating}.0</span>
              </div>

              {/* Highlight badge */}
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold mb-4">
                ✨ {testimonial.highlight}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonial section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">📹 Veja Depoimentos em Vídeo de Mães Reais</h3>
            <p className="text-lg mb-6 opacity-90">Assista histórias emocionantes de transformação na amamentação</p>
            <div className="bg-white/20 p-6 rounded-xl inline-block">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">▶️</span>
              </div>
              <p className="text-sm">Clique para assistir depoimentos exclusivos</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm text-muted-foreground">Método Aprovado por Pediatras</div>
          </div>
          <div>
            <div className="text-3xl mb-2">📚</div>
            <div className="text-sm text-muted-foreground">Baseado em Evidências Científicas</div>
          </div>
          <div>
            <div className="text-3xl mb-2">👩‍⚕️</div>
            <div className="text-sm text-muted-foreground">Criado por Consultoras Certificadas</div>
          </div>
          <div>
            <div className="text-3xl mb-2">✅</div>
            <div className="text-sm text-muted-foreground">Garantia de Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  )
}
