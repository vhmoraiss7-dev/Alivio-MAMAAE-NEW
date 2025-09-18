"use client"

import { Button } from "@/components/ui/button"

export function AmamentacaoPricingSection() {
  const plans = [
    {
      name: "MÉTODO P.E.G.A - Básico",
      price: "27,90",
      originalPrice: "97,00",
      description: "Perfeito para começar sua jornada com o Método P.E.G.A",
      features: [
        "Método P.E.G.A completo (45 páginas)",
        "10 técnicas revolucionárias de pega",
        "Posições básicas testadas cientificamente",
        "Sinais de sucção perfeita",
        "Suporte por email",
        "Garantia de 7 dias",
      ],
      popular: false,
      checkoutUrl: "https://pay.cakto.com.br/faacuwj_570913",
    },
    {
      name: "MAMÃE CONECTADA - Completo",
      price: "49,90",
      originalPrice: "197,00",
      description: "Solução completa: Método P.E.G.A + Bônus Exclusivos",
      features: [
        "Método P.E.G.A completo (80 páginas)",
        "15 técnicas avançadas revolucionárias",
        "20 posições diferentes testadas",
        "Vídeos demonstrativos exclusivos",
        "Planilha de controle inteligente",
        "Receitas para aumentar produção",
        "Grupo VIP no Telegram",
        "Consultoria ao vivo mensal",
        "Suporte prioritário 24h",
        "Garantia de 30 dias",
      ],
      popular: true,
      checkoutUrl: "https://pay.cakto.com.br/xf6k92o_570181",
    },
  ]

  return (
    <section id="precos" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent text-white px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse shadow-lg border-2 border-white">
            ⏰ ÚLTIMAS 48 HORAS - DESCONTO DE 75%!
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Escolha Seu Plano MAMÃE CONECTADA</h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Mais de <strong className="text-primary">2.847 mães</strong> já dominam o Método P.E.G.A. Não deixe seu bebê
            passar fome por mais um dia!
          </p>

          <div className="bg-gradient-to-r from-accent to-primary text-white p-6 rounded-xl inline-block mb-8 shadow-2xl animate-bounce">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">⏰ Oferta expira em:</span>
              <div className="flex gap-2">
                <div className="bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-3xl font-bold animate-pulse">23</span>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-3xl font-bold animate-pulse">47</span>
                  <div className="text-xs">MIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? "border-4 border-accent transform scale-105 animate-pulse" : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                    🔥 MAIS ESCOLHIDO
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through">De R$ {plan.originalPrice}</span>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">{`R$ ${plan.price}`}</span>
                    <div className="text-sm text-muted-foreground">
                      <div>à vista</div>
                      <div>ou 3x sem juros</div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6">
                  💰 ECONOMIA DE{" "}
                  {Math.round(
                    ((Number.parseFloat(plan.originalPrice) - Number.parseFloat(plan.price)) /
                      Number.parseFloat(plan.originalPrice)) *
                      100,
                  )}
                  %
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full text-lg py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white animate-pulse hover:animate-none shadow-lg"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                onClick={() => window.open(plan.checkoutUrl, "_blank")}
              >
                {plan.popular ? "🚀 QUERO O MÉTODO COMPLETO!" : "💝 ESCOLHER BÁSICO"}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                ✅ Pagamento 100% seguro • ✅ Acesso imediato • ✅ Garantia total
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2.847+</div>
              <div className="text-sm text-muted-foreground">Mães Satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
