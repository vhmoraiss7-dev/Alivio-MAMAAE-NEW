import { Button } from "@/components/ui/button"

// SVG Icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" fill="none" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" fill="none" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="white" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🤰</div>
              <span className="text-xl font-bold text-primary">Alívio Mamãe</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Transformando a experiência da maternidade através de técnicas seguras e eficazes de massagem para
              gestantes. Pronto para vender!
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <InstagramIcon className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <YoutubeIcon className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 bg-transparent">
                <MailIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#garantia" className="hover:text-primary transition-colors">
                  Garantia
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:suporte@aliviomamae.com" className="hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="mailto:contato@aliviomamae.com" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:faq@aliviomamae.com" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Receba dicas exclusivas sobre maternidade</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background"
              />
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 Alívio Mamãe. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <HeartIcon className="h-4 w-4 text-accent fill-current" />
            <span>para mamães</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
