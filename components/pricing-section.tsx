import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12" />
  </svg>
)

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 16L3 7l5.5 5L12 4l3.5 8L21 7l-2 9H5z" />
  </svg>
)

const plans = [
  {
    name: "Básico",
    price: "27,90",
    originalPrice: "47,90",
    description: "Perfeito para começar",
    features: [
      "10 técnicas de massagem ilustradas",
      "Guia em PDF de alta qualidade",
      "Instruções passo a passo",
      "Suporte por email",
    ],
    popular: false,
    cta: "Começar Agora",
    checkoutUrl: "https://pay.cakto.com.br/42vzrhw_570904",
  },
  {
    name: "Completo",
    price: "49,90",
    originalPrice: "97,90",
    description: "Mais escolhido pelas mamães",
    features: [
      "10 técnicas de massagem ilustradas",
      "Guia em PDF + Vídeos demonstrativos",
      "Bônus: Guia de óleos essenciais",
      "Bônus: Playlist relaxante",
      "Suporte prioritário por WhatsApp",
      "Acesso ao grupo VIP no Telegram",
    ],
    popular: true,
    cta: "Quero o Completo",
    checkoutUrl: "https://pay.cakto.com.br/xf6k92o_570181",
  },
]

export function PricingSection() {
  return (
    <section id="planos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Escolha seu
            <span className="text-primary"> plano ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Investimento que se paga com o primeiro alívio. Escolha o plano que melhor se adapta às suas necessidades.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            🔥 Oferta por tempo limitado - 50% OFF
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-accent shadow-xl scale-105 pricing-card-popular"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <CrownIcon className="h-4 w-4" />
                    <span>MAIS POPULAR</span>
                  </div>
                </div>
              )}

              <CardHeader className={`text-center pb-8 ${plan.popular ? "text-accent-foreground" : ""}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className={`text-sm ${plan.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span
                      className={`text-sm line-through ${plan.popular ? "text-accent-foreground/60" : "text-muted-foreground"}`}
                    >
                      R$ {plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-sm">R$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className={`text-xs ${plan.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                    Pagamento único
                  </p>
                </div>
              </CardHeader>

              <CardContent className={`space-y-6 ${plan.popular ? "text-accent-foreground" : ""}`}>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckIcon
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-accent-foreground" : "text-primary"
                        }`}
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.checkoutUrl}>
                  <Button
                    className={`w-full text-lg py-6 ${
                      plan.popular
                        ? "bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${plan.popular ? "text-accent-foreground" : "text-accent"}`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${plan.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                    Garantia de 7 dias
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">💳 Parcelamos em até 12x no cartão | 🔒 Compra 100% segura</p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span>🏆 Satisfação garantida</span>
            <span>📱 Acesso imediato</span>
            <span>🎯 Resultados comprovados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
