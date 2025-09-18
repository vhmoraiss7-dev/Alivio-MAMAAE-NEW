import { type NextRequest, NextResponse } from "next/server"
import { EmailService } from "@/lib/email-service"
import { AccessManager } from "@/lib/access-manager"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { plan, paymentMethod, customer, amount } = body

    // Simular processamento de pagamento
    // Em produção, aqui você integraria com um gateway real (Stripe, PagSeguro, etc.)

    // Gerar ID único para a compra
    const purchaseId = `purchase_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simular sucesso (95% das vezes)
    const isSuccess = Math.random() > 0.05

    if (isSuccess) {
      // 1. Criar acesso digital
      const accessToken = AccessManager.createAccess(purchaseId, customer.email, plan)

      // 2. Gerar links de acesso
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      const accessLinks = AccessManager.generateAccessLinks(baseUrl, accessToken, plan)

      // 3. Preparar dados para email
      const purchaseData = {
        purchaseId,
        customerEmail: customer.email,
        customerName: customer.name,
        plan,
        amount,
        accessLinks,
      }

      // 4. Enviar email de acesso
      const emailSent = await EmailService.sendAccessEmail(purchaseData)

      if (!emailSent) {
        console.warn("Falha ao enviar email, mas compra foi processada")
      }

      // 5. Salvar no banco de dados (simulado)
      const purchaseRecord = {
        id: purchaseId,
        plan,
        paymentMethod,
        customer,
        amount,
        status: "approved",
        accessToken,
        emailSent,
        createdAt: new Date().toISOString(),
      }

      console.log("✅ Compra processada e entrega realizada:", purchaseRecord)

      return NextResponse.json({
        success: true,
        purchaseId,
        accessToken,
        message: "Pagamento processado e acesso enviado por email!",
      })
    } else {
      return NextResponse.json({ success: false, message: "Falha no processamento do pagamento" }, { status: 400 })
    }
  } catch (error) {
    console.error("Erro no processamento:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}
