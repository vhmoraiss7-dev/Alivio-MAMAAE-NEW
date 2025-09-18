interface EmailTemplate {
  subject: string
  html: string
  text: string
}

interface PurchaseData {
  purchaseId: string
  customerEmail: string
  customerName: string
  plan: string
  amount: string
  accessLinks: {
    mainAccess: string
    guides: string[]
    bonus: string
    vipGroup: string
  }
}

export class EmailService {
  // Simula envio de email (em produção, usar Resend, SendGrid, etc.)
  static async sendAccessEmail(purchaseData: PurchaseData): Promise<boolean> {
    try {
      const template = this.generateAccessEmailTemplate(purchaseData)

      // Simular delay de envio
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log do email que seria enviado (em produção, usar provedor real)
      console.log("📧 Email de acesso enviado:", {
        to: purchaseData.customerEmail,
        subject: template.subject,
        purchaseId: purchaseData.purchaseId,
      })

      // Simular sucesso (95% das vezes)
      return Math.random() > 0.05
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      return false
    }
  }

  static generateAccessEmailTemplate(data: PurchaseData): EmailTemplate {
    const planNames = {
      combo: "JORNADA MATERNA COMPLETA",
      massagem: "GUIA DE MASSAGENS NA GESTAÇÃO",
      amamentacao: "MÉTODO P.E.G.A - AMAMENTAÇÃO",
    }

    const planName = planNames[data.plan as keyof typeof planNames] || data.plan.toUpperCase()

    const subject = `🎉 Seu acesso ao ${planName} está liberado!`

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Acesso Liberado - Jornada Materna</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #ec4899; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 0; }
          .guide-item { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #ec4899; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Parabéns, ${data.customerName}!</h1>
            <p>Seu acesso ao ${planName} foi liberado</p>
          </div>
          
          <div class="content">
            <h2>✅ Compra Confirmada</h2>
            <p><strong>Pedido:</strong> #${data.purchaseId}</p>
            <p><strong>Valor:</strong> R$ ${data.amount}</p>
            <p><strong>Email:</strong> ${data.customerEmail}</p>
            
            <h2>🚀 Acesse Seus Materiais</h2>
            <p>Clique no botão abaixo para acessar sua área de membros:</p>
            <a href="${data.accessLinks.mainAccess}" class="button">ACESSAR MEUS MATERIAIS</a>
            
            ${
              data.plan === "combo"
                ? `
            <h2>📚 Seus 4 Guias Inclusos</h2>
            <div class="guide-item">
              <strong>🤰 Guia: 10 Massagens para Gestação</strong><br>
              <a href="${data.accessLinks.guides[0]}">Acessar Guia</a>
            </div>
            <div class="guide-item">
              <strong>🤱 Guia: Mamãe Conectada (Amamentação)</strong><br>
              <a href="${data.accessLinks.guides[1]}">Acessar Guia</a>
            </div>
            <div class="guide-item">
              <strong>💪 Guia: Recuperação Pós-Parto</strong><br>
              <a href="${data.accessLinks.guides[2]}">Acessar Guia</a>
            </div>
            <div class="guide-item">
              <strong>😴 Guia: Sono Tranquilo do Bebê</strong><br>
              <a href="${data.accessLinks.guides[3]}">Acessar Guia</a>
            </div>
            `
                : ""
            }
            
            <h2>🎁 Bônus Exclusivos</h2>
            <p>Acesse seus materiais extras:</p>
            <a href="${data.accessLinks.bonus}" class="button">ACESSAR BÔNUS</a>
            
            <h2>👥 Grupo VIP</h2>
            <p>Entre no nosso grupo exclusivo no Telegram:</p>
            <a href="${data.accessLinks.vipGroup}" class="button">ENTRAR NO GRUPO VIP</a>
            
            <h2>📞 Suporte</h2>
            <p>Dúvidas? Entre em contato conosco:</p>
            <p>📧 Email: suporte@jornadamaterna.com</p>
            <p>📱 WhatsApp: (11) 99999-9999</p>
          </div>
          
          <div class="footer">
            <p>© 2024 Jornada Materna. Todos os direitos reservados.</p>
            <p>Este email foi enviado para ${data.customerEmail}</p>
          </div>
        </div>
      </body>
      </html>
    `

    const text = `
      Parabéns, ${data.customerName}!
      
      Seu acesso ao ${planName} foi liberado.
      
      Pedido: #${data.purchaseId}
      Valor: R$ ${data.amount}
      
      Acesse seus materiais em: ${data.accessLinks.mainAccess}
      
      Bônus exclusivos: ${data.accessLinks.bonus}
      Grupo VIP: ${data.accessLinks.vipGroup}
      
      Suporte: suporte@jornadamaterna.com
      WhatsApp: (11) 99999-9999
    `

    return { subject, html, text }
  }

  static async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    // Simular envio de email de boas-vindas
    console.log("📧 Email de boas-vindas enviado para:", email)
    return true
  }

  static async sendSupportEmail(email: string, message: string): Promise<boolean> {
    // Simular envio de email de suporte
    console.log("📧 Email de suporte enviado:", { email, message })
    return true
  }
}
