"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Check, Shield, Clock, CreditCard, Smartphone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CheckoutRealPage() {
  const [selectedPlan, setSelectedPlan] = useState("combo")
  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const router = useRouter()

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

    const params = new URLSearchParams(window.location.search)
    const planParam = params.get("plan")
    if (planParam === "massagem") setSelectedPlan("massagem")
    else if (planParam === "amamentacao") setSelectedPlan("amamentacao")
    else if (planParam === "recuperacao") setSelectedPlan("recuperacao")
    else if (planParam === "sono") setSelectedPlan("sono")
    else if (planParam === "combo") setSelectedPlan("combo")

    return () => clearInterval(timer)
  }, [])

  const plans = {
    massagem: {
      name: "Guia de Massagens na Gestação",
      price: "27,90",
      originalPrice: "47,90",
      discount: "42%",
      features: [
        "10 técnicas de massagem ilustradas",
        "Acesso online completo",
        "Instruções passo a passo",
        "Suporte por email",
      ],
    },
    amamentacao: {
      name: "Método P.E.G.A - Amamentação",
      price: "49,90",
      originalPrice: "97,90",
      discount: "49%",
      features: [
        "Método P.E.G.A completo",
        "Guia de amamentação online",
        "Vídeos demonstrativos",
        "Suporte especializado",
        "Grupo VIP no Telegram",
      ],
    },
    recuperacao: {
      name: "Guia de Recuperação Pós-Parto",
      price: "39,90",
      originalPrice: "67,90",
      discount: "41%",
      features: [
        "Guia completo de recuperação",
        "Exercícios seguros pós-parto",
        "Cuidados físicos e emocionais",
        "Suporte especializado",
      ],
    },
    sono: {
      name: "Guia Sono Tranquilo do Bebê",
      price: "34,90",
      originalPrice: "57,90",
      discount: "40%",
      features: [
        "Métodos comprovados de sono",
        "Rotinas personalizáveis",
        "Técnicas de acalmar bebê",
        "Suporte especializado",
      ],
    },
    combo: {
      name: "COMBO COMPLETO - Jornada Materna",
      price: "67,90",
      originalPrice: "180,60",
      discount: "62%",
      features: [
        "4 Guias Completos",
        "Guia: 10 Massagens para Gestação",
        "Guia: Mamãe Conectada (Amamentação)",
        "Guia: Recuperação Pós-Parto",
        "Guia: Sono Tranquilo do Bebê",
        "Bônus: Playlist Relaxante",
        "Bônus: Receitas Nutritivas",
        "Grupo VIP no Telegram",
        "Suporte especializado",
      ],
    },
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simular processamento de pagamento
    try {
      const response = await fetch("/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          paymentMethod,
          customer: customerData,
          amount: currentPlan.price,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        let redirectUrl = ""

        switch (selectedPlan) {
          case "massagem":
            redirectUrl = `/guias/massagens?token=${result.accessToken}`
            break
          case "amamentacao":
            redirectUrl = `/guias/amamentacao?token=${result.accessToken}`
            break
          case "recuperacao":
            redirectUrl = `/guias/recuperacao?token=${result.accessToken}`
            break
          case "sono":
            redirectUrl = `/guias/sono?token=${result.accessToken}`
            break
          case "combo":
            redirectUrl = `/acesso-combo?token=${result.accessToken}`
            break
          default:
            redirectUrl = `/acesso?purchase_id=${result.purchaseId}&email=${customerData.email}`
        }

        router.push(redirectUrl)
      } else {
        alert("Erro no processamento. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Erro no processamento. Tente novamente.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header com timer */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse">
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

          <h1 className="text-3xl font-bold text-primary mb-2">Finalizar Compra</h1>
          <p className="text-muted-foreground">Complete seus dados para receber acesso imediato</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Seleção de Plano e Resumo */}
          <Card>
            <CardHeader>
              <CardTitle>Escolha seu Plano</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                {Object.entries(plans).map(([key, plan]) => (
                  <div key={key} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={key} id={key} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={key} className="font-semibold cursor-pointer text-base">
                        {plan.name}
                      </Label>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <span className="text-sm line-through text-muted-foreground">R$ {plan.originalPrice}</span>
                        <span className="text-xl font-bold text-primary">R$ {plan.price}</span>
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                          -{plan.discount}
                        </span>
                      </div>
                      <ul className="text-sm space-y-1">
                        {plan.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan.features.length > 3 && (
                          <li className="text-muted-foreground">+ {plan.features.length - 3} benefícios</li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-semibold">Resumo do Pedido:</h4>
                <div className="flex justify-between items-center">
                  <span>{currentPlan.name}</span>
                  <span className="font-bold">R$ {currentPlan.price}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Desconto aplicado</span>
                  <span>
                    -R${" "}
                    {(
                      Number.parseFloat(currentPlan.originalPrice.replace(",", ".")) -
                      Number.parseFloat(currentPlan.price.replace(",", "."))
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">R$ {currentPlan.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Checkout */}
          <Card>
            <CardHeader>
              <CardTitle>Dados para Acesso</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={customerData.name}
                      onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={customerData.email}
                      onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Você receberá o acesso neste email</p>
                  </div>
                  <div>
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Forma de Pagamento</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="pix" id="pix" />
                      <Smartphone className="h-4 w-4 text-blue-600" />
                      <Label htmlFor="pix" className="flex-1 cursor-pointer">
                        PIX - Aprovação instantânea
                        <span className="block text-xs text-muted-foreground">5% de desconto adicional</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        Cartão de Crédito
                        <span className="block text-xs text-muted-foreground">Até 12x sem juros</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-accent hover:bg-accent/90"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    "Processando..."
                  ) : (
                    <>
                      <Shield className="h-5 w-5 mr-2" />
                      Finalizar Compra - R$ {currentPlan.price}
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span>Garantia 15 dias</span>
                  </div>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  Ao finalizar a compra, você concorda com nossos termos de uso e política de privacidade. Você receberá
                  o acesso por email em até 5 minutos.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
