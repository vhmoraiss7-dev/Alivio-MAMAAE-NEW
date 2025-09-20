"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ComboPricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="pricing" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sua <span className="text-primary">Oferta Única</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investimento único para uma jornada materna completa e tranquila
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative border-4 border-accent shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold pulse-premium">
              🔥 OFERTA POR TEMPO LIMITADO
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-accent mb-2">COMBO ALÍVIO MAMÃE COMPLETO</h3>
                <p className="text-muted-foreground">Todos os 4 guias + Bônus exclusivos</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Separados, cada guia custaria R$97 (total R$297). Mas hoje você garante acesso vitalício ao combo
                  completo por apenas:
                </p>
                <div className="text-6xl font-bold text-pink-600 mb-2 bg-white/90 px-6 py-4 rounded-xl border-2 border-pink-200 mega-pulse">
                  R$67
                </div>
                <div className="text-sm text-primary font-semibold">Economia de R$230</div>
              </div>

              {/* Timer de urgência */}
              <div className="flex justify-center gap-2 mb-6">
                <div className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-center">
                  <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div className="text-xs">H</div>
                </div>
                <div className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-center">
                  <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-xs">M</div>
                </div>
                <div className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-center">
                  <div className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                  <div className="text-xs">S</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-semibold">
                    4 Guias completos (Gestação + Amamentação + Pós-parto + Sono)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">🎁 Bônus: Playlist relaxante + Receitas de chás</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">🎁 Grupo VIP no Telegram</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Acesso vitalício</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">
                    Você tem 7 dias para testar. Se não gostar, devolvemos seu dinheiro sem burocracia.
                  </span>
                </li>
              </ul>

              <Button
                className="w-full combo-button text-xl py-8 font-bold text-primary-foreground mega-pulse px-4"
                onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
              >
                🚀 GARANTIR MEU ACESSO POR APENAS R$67
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                💳 Parcelamento disponível • 🔒 Pagamento 100% seguro
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">⚡ Oferta válida apenas por tempo limitado</p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold">
            🛡️ Garantia incondicional de satisfação ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  )
}
