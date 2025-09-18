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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Escolha seu <span className="text-primary">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investimento único para uma jornada materna completa e tranquila
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Individual */}
          <Card className="relative border-2 border-border hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">PRODUTO INDIVIDUAL</h3>
                <p className="text-muted-foreground">Escolha 1 dos 4 guias</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-lg text-muted-foreground line-through mb-2">De R$ 47,90</div>
                <div className="text-4xl font-bold text-primary mb-2">R$ 29,90</div>
                <div className="text-sm text-accent font-semibold">37% de desconto</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">1 Guia especializado completo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Acesso imediato</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">Garantia de 7 dias</span>
                </li>
              </ul>

              <Button
                className="w-full combo-button text-lg py-6 font-bold text-primary-foreground"
                onClick={() => {
                  const modal = document.createElement("div")
                  modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                  modal.innerHTML = `
                    <div class="bg-white rounded-2xl p-8 max-w-md w-full">
                      <h3 class="text-2xl font-bold text-center mb-6">Escolha seu Guia</h3>
                      <div class="space-y-3">
                        <button onclick="window.open('https://pay.cakto.com.br/42vzrhw_570904', '_blank')" class="w-full p-4 bg-pink-100 hover:bg-pink-200 rounded-xl text-left transition-colors">
                          <div class="font-bold">🤰 Massagens na Gestação</div>
                          <div class="text-sm text-gray-600">Alívio de dores e desconfortos</div>
                        </button>
                        <button onclick="window.open('https://pay.cakto.com.br/faacuwj_570913', '_blank')" class="w-full p-4 bg-pink-100 hover:bg-pink-200 rounded-xl text-left transition-colors">
                          <div class="font-bold">🤱 Método P.E.G.A de Amamentação</div>
                          <div class="text-sm text-gray-600">Pega correta e posicionamento</div>
                        </button>
                        <button onclick="window.open('https://pay.cakto.com.br/g632qod_570917', '_blank')" class="w-full p-4 bg-pink-100 hover:bg-pink-200 rounded-xl text-left transition-colors">
                          <div class="font-bold">💪 Recuperação Pós-Parto</div>
                          <div class="text-sm text-gray-600">Corpo, mente e autoestima</div>
                        </button>
                        <button onclick="window.open('https://pay.cakto.com.br/oxkrbe4_570928', '_blank')" class="w-full p-4 bg-pink-100 hover:bg-pink-200 rounded-xl text-left transition-colors">
                          <div class="font-bold">😴 Sono Tranquilo do Bebê</div>
                          <div class="text-sm text-gray-600">Rotina de sono saudável</div>
                        </button>
                      </div>
                      <button onclick="this.parentElement.parentElement.remove()" class="w-full mt-4 p-3 bg-gray-200 hover:bg-gray-300 rounded-xl transition-colors">
                        Cancelar
                      </button>
                    </div>
                  `
                  document.body.appendChild(modal)
                  modal.onclick = (e) => e.target === modal && modal.remove()
                }}
              >
                ESCOLHER PRODUTO
              </Button>
            </CardContent>
          </Card>

          {/* Plano Combo - Destaque */}
          <Card className="relative border-4 border-accent shadow-2xl transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold pulse-premium">
              🔥 MAIS POPULAR - 70% OFF
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-accent mb-2">COMBO COMPLETO</h3>
                <p className="text-muted-foreground">Todos os 4 guias + Bônus</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-lg text-muted-foreground line-through mb-2">De R$ 180,60</div>
                <div className="text-5xl font-bold text-pink-600 mb-2 bg-white/90 px-4 py-2 rounded-xl border-2 border-pink-200">
                  R$ 67,90
                </div>
                <div className="text-sm text-primary font-semibold">Economia de R$ 112,70</div>
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
                  <span className="text-foreground">Garantia estendida de 15 dias</span>
                </li>
              </ul>

              <Button
                className="w-full combo-button text-xl py-8 font-bold text-primary-foreground bounce-gentle px-4"
                onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
              >
                🚀 QUERO O COMBO
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
