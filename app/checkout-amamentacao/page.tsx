"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CheckoutAmamentacao() {
  const [plan, setPlan] = useState("completo")
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const planParam = params.get("plan")
    if (planParam) setPlan(planParam)

    // Timer countdown
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

  const planDetails = {
    basico: {
      name: "MÉTODO P.E.G.A - Básico",
      price: "27,90",
      originalPrice: "97,00",
      kirvanoUrl: "https://pay.kirvano.com/seu-produto-basico-aqui",
    },
    completo: {
      name: "MAMÃE CONECTADA - Completo",
      price: "49,90",
      originalPrice: "197,00",
      kirvanoUrl: "https://pay.kirvano.com/seu-produto-completo-aqui",
    },
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails]

  const handleKirvanoCheckout = () => {
    // Redireciona para o checkout da Kirvano
    window.location.href = currentPlan.kirvanoUrl
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header com urgência */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-accent to-primary text-white p-4 rounded-xl inline-block mb-4 animate-pulse shadow-lg">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">⏰ Oferta expira em:</span>
              <div className="flex gap-2">
                <div className="bg-white/30 px-3 py-1 rounded backdrop-blur-sm">
                  <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
                  <div className="text-xs">H</div>
                </div>
                <div className="bg-white/30 px-3 py-1 rounded backdrop-blur-sm">
                  <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
                  <div className="text-xs">M</div>
                </div>
                <div className="bg-white/30 px-3 py-1 rounded backdrop-blur-sm">
                  <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
                  <div className="text-xs">S</div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-2">Finalizar Compra</h1>
          <p className="text-muted-foreground">Você está a um passo de dominar o Método P.E.G.A!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resumo do pedido */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Resumo do Pedido</h2>

            <div className="border-2 border-accent/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">{currentPlan.name}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground line-through">De R$ {currentPlan.originalPrice}</span>
                <span className="text-3xl font-bold text-accent">R$ {currentPlan.price}</span>
              </div>

              <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold inline-block">
                💰 ECONOMIA DE 75%
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Acesso imediato após pagamento</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Pagamento 100% seguro</span>
              </div>
            </div>
          </div>

          {/* Checkout Kirvano */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Pagamento Seguro</h2>

            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl mb-4">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold">Pagamento 100% Seguro</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Processado pela Kirvano - Plataforma líder em pagamentos digitais
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">PIX</span>
                </div>
                <span className="text-sm">PIX - Aprovação instantânea</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">💳</span>
                </div>
                <span className="text-sm">Cartão de crédito - Até 12x sem juros</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">📄</span>
                </div>
                <span className="text-sm">Boleto bancário</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white text-lg py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-pulse hover:animate-none"
              onClick={handleKirvanoCheckout}
            >
              🚀 FINALIZAR COMPRA SEGURA
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao clicar, você será redirecionado para o checkout seguro da Kirvano
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
