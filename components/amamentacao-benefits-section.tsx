"use client"

import { Button } from "@/components/ui/button"

export function AmamentacaoBenefitsSection() {
  const benefits = [
    {
      icon: "🎯",
      title: "Pega Perfeita em 24h",
      description:
        "Técnicas comprovadas para seu bebê pegar o peito corretamente desde a primeira tentativa, eliminando dor e frustração.",
    },
    {
      icon: "🔬",
      title: "Sinais de Sucção Correta",
      description:
        "Aprenda a identificar os 7 sinais que garantem que seu bebê está mamando adequadamente e ganhando peso.",
    },
    {
      icon: "💪",
      title: "Posições Revolucionárias",
      description:
        "12 posições diferentes de amamentação para cada situação: cesárea, gêmeos, bebê prematuro e muito mais.",
    },
    {
      icon: "🩺",
      title: "Problemas Mais Comuns",
      description:
        "Soluções práticas para fissuras, ingurgitamento, mastite e baixa produção de leite - tudo explicado passo a passo.",
    },
    {
      icon: "⏰",
      title: "Rotina de Amamentação",
      description:
        "Como estabelecer horários, reconhecer sinais de fome e criar uma rotina saudável para você e seu bebê.",
    },
    {
      icon: "👩‍⚕️",
      title: "Suporte Profissional",
      description: "Acesso direto a consultoras de amamentação certificadas para tirar suas dúvidas em tempo real.",
    },
  ]

  return (
    <section id="beneficios" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Por Que Milhares de Mães Escolhem Nosso Método?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido por especialistas em amamentação, nosso guia resolve os principais desafios que impedem uma
            amamentação bem-sucedida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/10 p-8 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Não Deixe Seu Bebê Sofrer com Fome ou Você com Dor!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Cada dia que passa sem a técnica correta é um dia de sofrimento desnecessário.
            </p>
            <Button
              size="lg"
              className="tech-button text-lg px-8 py-4 rounded-xl font-bold"
              onClick={() => document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" })}
            >
              🚀 RESOLVER AGORA POR APENAS R$ 27,90!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
