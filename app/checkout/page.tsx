"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Check, Shield, Clock, ExternalLink } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState("completo")

  const plans = {
    basico: {
      name: "Plano Básico",
      price: "27,90",
      originalPrice: "47,90",
      kirvanoUrl: "https://pay.kirvano.com/seu-produto-basico", // URL real da Kirvano para plano básico
      features: [
        "10 técnicas de massagem ilustradas",
        "Guia em PDF de alta qualidade",
        "Instruções passo a passo",
        "Suporte por email",
      ],
    },
    completo: {
      name: "Plano Completo",
      price: "49,90",
      originalPrice: "97,90",
      kirvanoUrl: "https://pay.kirvano.com/seu-produto-completo", // URL real da Kirvano para plano completo
      features: [
        "10 técnicas de massagem ilustradas",
        "Guia em PDF + Vídeos demonstrativos",
        "Bônus: Guia de óleos essenciais",
        "Bônus: Playlist relaxante",
        "Suporte prioritário por WhatsApp",
        "Acesso ao grupo VIP no Telegram",
      ],
    },
  }

  const handleKirvanoCheckout = () => {
    const currentPlan = plans[selectedPlan as keyof typeof plans]
    window.open(currentPlan.kirvanoUrl, "_blank")
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]

  return (
    <main className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Finalizar Compra</h1>
          <p className="text-muted-foreground">Você está a um passo de transformar sua gestação!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resumo do Pedido */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                {Object.entries(plans).map(([key, plan]) => (
                  <div key={key} className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value={key} id={key} />
                    <div className="flex-1">
                      <Label htmlFor={key} className="font-semibold cursor-pointer">
                        {plan.name}
                      </Label>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm line-through text-muted-foreground">R$ {plan.originalPrice}</span>
                        <span className="text-lg font-bold text-primary">R$ {plan.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">O que você vai receber:</h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">R$ {currentPlan.price}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Compra 100% segura e garantida</span>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Kirvano */}
          <Card>
            <CardHeader>
              <CardTitle>Pagamento Seguro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="p-6 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Checkout Seguro Kirvano</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Processamento seguro com as melhores taxas de aprovação do mercado
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      <span>PIX (5% desconto)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Cartão até 12x</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Boleto bancário</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      <span>NuPay & PicPay</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full text-lg py-6 bg-accent hover:bg-accent/90" onClick={handleKirvanoCheckout}>
                  <Shield className="h-5 w-5 mr-2" />
                  Pagar com Kirvano - R$ {currentPlan.price}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span>Garantia 7 dias</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>Após o pagamento, você receberá o acesso por email</p>
                  <p>e será redirecionado automaticamente para a área de membros</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
