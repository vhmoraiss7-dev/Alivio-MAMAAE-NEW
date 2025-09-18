"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, Clock } from "lucide-react"

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-4">Suporte VIP</h1>
          <p className="text-lg text-muted-foreground mb-8">Estamos aqui para te ajudar em cada passo da sua jornada</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp Direto</h3>
              <p className="text-muted-foreground mb-4">Fale diretamente conosco pelo WhatsApp</p>
              <p className="text-sm text-muted-foreground mb-4">Resposta em até 2 horas</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Suporte</h3>
              <p className="text-muted-foreground mb-4">Para dúvidas mais detalhadas</p>
              <p className="text-sm text-muted-foreground mb-4">Resposta em até 24 horas</p>
              <Button variant="outline" className="w-full bg-transparent">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">⏰ Horários de Atendimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">24 horas por dia</p>
                <p className="text-sm text-muted-foreground">7 dias por semana</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">❓ Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Como acesso meus materiais?</h4>
              <p className="text-sm text-muted-foreground">
                Todos os materiais estão disponíveis na sua área de acesso. Você recebeu o link por email após a compra.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Posso baixar os guias?</h4>
              <p className="text-sm text-muted-foreground">
                Sim! Todos os guias podem ser acessados online e também baixados em PDF.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Como funciona a garantia?</h4>
              <p className="text-sm text-muted-foreground">
                Você tem 15 dias para testar todo o material. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
