"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const RefreshIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 4v6h6M23 20v-6h-6" />
    <path
      d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

export function GuaranteeSection() {
  return (
    <section id="garantia" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-accent/20 shadow-2xl">
          <CardContent className="p-12 text-center space-y-8">
            <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
              <ShieldIcon className="h-10 w-10 text-accent" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Garantia de
                <span className="text-accent"> 7 dias</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Estamos tão confiantes na qualidade do nosso guia que oferecemos garantia total. Se não ficar
                satisfeita, devolvemos 100% do seu dinheiro.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="space-y-3">
                <ClockIcon className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">7 Dias Completos</h3>
                <p className="text-sm text-muted-foreground">Tempo suficiente para testar todas as técnicas</p>
              </div>
              <div className="space-y-3">
                <RefreshIcon className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Processo Simples</h3>
                <p className="text-sm text-muted-foreground">Basta enviar um email e processamos o reembolso</p>
              </div>
              <div className="space-y-3">
                <ShieldIcon className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Sem Perguntas</h3>
                <p className="text-sm text-muted-foreground">Não fazemos perguntas, confiamos na sua palavra</p>
              </div>
            </div>

            <div className="space-y-6">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-6"
                onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
              >
                Quero Experimentar Sem Riscos
              </Button>
              <p className="text-sm text-muted-foreground">
                ✅ Compra 100% segura | 🔒 Dados protegidos | 💳 Parcelamos em até 12x
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
