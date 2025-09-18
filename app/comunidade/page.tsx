"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Heart, Star, Calendar } from "lucide-react"

export default function ComunidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-4">Comunidade VIP Jornada Materna</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Mais de 800 mamães compartilhando experiências e se apoiando mutuamente
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversas Diárias</h3>
              <p className="text-muted-foreground">Troque experiências com outras mamães todos os dias</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">Sempre tem alguém online para te ajudar</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Conteúdo Exclusivo</h3>
              <p className="text-muted-foreground">Dicas e materiais que só quem está no grupo recebe</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">📅 Programação Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Segunda - Dica da Semana</h4>
                    <p className="text-sm text-muted-foreground">Nova técnica ou dica especial</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Quarta - Tira Dúvidas</h4>
                    <p className="text-sm text-muted-foreground">Sessão ao vivo para perguntas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Sexta - Histórias Inspiradoras</h4>
                    <p className="text-sm text-muted-foreground">Mamães compartilham suas jornadas</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Sábado - Desafio Semanal</h4>
                    <p className="text-sm text-muted-foreground">Atividade prática para praticar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Domingo - Reflexão</h4>
                    <p className="text-sm text-muted-foreground">Momento de gratidão e planejamento</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Users className="h-5 w-5 mr-2" />
            Entrar na Comunidade VIP
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Acesso liberado automaticamente após a compra</p>
        </div>
      </div>
    </main>
  )
}
