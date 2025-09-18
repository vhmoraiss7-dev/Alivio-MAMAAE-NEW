import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polyline points="20,6 9,17 4,12" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" stroke="white" strokeWidth="2" fill="none" />
    <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="2" />
  </svg>
)

const MessageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

export default function SucessoPage() {
  return (
    <main className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto max-w-2xl px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Compra Realizada com Sucesso!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Parabéns! Sua compra foi processada com sucesso. Você receberá um email com os dados de acesso em alguns
              minutos.
            </p>

            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Próximos Passos:</h3>
              <ul className="text-sm space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-primary" />
                  <span>Verifique seu email (inclusive spam/lixo eletrônico)</span>
                </li>
                <li className="flex items-center gap-2">
                  <DownloadIcon className="h-4 w-4 text-primary" />
                  <span>Acesse sua área de membros</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageIcon className="h-4 w-4 text-primary" />
                  <span>Entre no grupo VIP do Telegram</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/acesso">Acessar Área de Membros</Link>
              </Button>

              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Problemas com o acesso? Entre em contato pelo WhatsApp: (11) 99999-9999
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
