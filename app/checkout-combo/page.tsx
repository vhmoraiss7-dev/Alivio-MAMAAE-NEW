"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CheckoutComboPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header com timer */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold mb-4 pulse-premium">
            🔥 OFERTA LIMITADA - ÚLTIMAS HORAS
          </div>

          <div className="flex justify-center gap-2 mb-6">
            <div className="bg-accent text-accent-foreground px-4 py-3 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs">H</div>
            </div>
            <div className="bg-accent text-accent-foreground px-4 py-3 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs">M</div>
            </div>
            <div className="bg-accent text-accent-foreground px-4 py-3 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs">S</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resumo do pedido */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">📦 Seu Pedido</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  <Image
                    src="/happy-mother-with-baby-journey.jpg"
                    alt="Combo Jornada Materna"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">JORNADA MATERNA COMPLETA</h3>
                    <p className="text-sm text-muted-foreground">4 Guias + Bônus Exclusivos</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg text-muted-foreground line-through">R$ 180,60</span>
                      <span className="bg-pink-600 text-white px-3 py-1 rounded-lg font-bold text-xl">R$ 67,90</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-bold text-foreground">✅ Você receberá:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">📖</span>
                    <span>Guia: 10 Massagens para Gestação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">🤱</span>
                    <span>Guia: Mamãe Conectada (Amamentação)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">💪</span>
                    <span>Guia: Recuperação Pós-Parto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">😴</span>
                    <span>Guia: Sono Tranquilo do Bebê</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">🎁</span>
                    <span>Bônus: Playlist + Receitas + Grupo VIP</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="bg-pink-600 text-white px-4 py-2 rounded-lg">R$ 67,90</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">💰 Economia de R$ 112,70</p>
              </div>
            </CardContent>
          </Card>

          {/* Checkout */}
          <Card className="border-2 border-accent/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">💳 Finalizar Compra</h2>

              <div className="text-center mb-8">
                <Button
                  size="lg"
                  className="w-full combo-button text-xl py-8 font-bold text-primary-foreground bounce-gentle"
                  onClick={() => window.open("https://pay.kirvano.com/combo-jornada-materna-completa", "_blank")}
                >
                  🚀 FINALIZAR COMPRA - <span className="bg-white text-pink-600 px-2 py-1 rounded">R$ 67,90</span>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  🔒 Pagamento 100% seguro via Kirvano
                  <br />💳 Cartão, PIX, Boleto disponíveis
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">🛡️ Garantia Total</h4>
                  <p className="text-sm text-foreground">
                    15 dias para testar. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-bold text-accent mb-2">⚡ Acesso Imediato</h4>
                  <p className="text-sm text-foreground">
                    Após a confirmação do pagamento, você recebe o acesso instantaneamente por email.
                  </p>
                </div>

                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="font-bold text-foreground mb-2">📞 Suporte Especializado</h4>
                  <p className="text-sm text-muted-foreground">
                    Dúvidas? Nossa equipe está pronta para ajudar via WhatsApp e email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Depoimentos rápidos */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">💬 O que outras mães estão dizendo:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <p className="text-sm text-foreground mb-2">"Salvou minha maternidade! Recomendo demais."</p>
              <p className="text-xs text-muted-foreground">- Marina S.</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <p className="text-sm text-foreground mb-2">"Conteúdo incrível, valeu cada centavo!"</p>
              <p className="text-xs text-muted-foreground">- Carla O.</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <p className="text-sm text-foreground mb-2">"Meu bebê dorme a noite toda agora!"</p>
              <p className="text-xs text-muted-foreground">- Juliana C.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
