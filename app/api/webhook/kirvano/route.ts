import { type NextRequest, NextResponse } from "next/server"
import { EmailService } from "@/lib/email-service"
import { AccessManager } from "@/lib/access-manager"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verificar se é uma compra aprovada
    if (body.event === "compra_aprovada" || body.status === "approved") {
      const { customer_email, customer_name, product_id, transaction_id, amount } = body

      // 1. Determinar plano baseado no product_id
      let plan = "combo" // default
      if (product_id?.includes("massagem")) plan = "massagem"
      else if (product_id?.includes("amamentacao")) plan = "amamentacao"

      // 2. Criar acesso digital
      const purchaseId = `kirvano_${transaction_id}`
      const accessToken = AccessManager.createAccess(purchaseId, customer_email, plan)

      // 3. Gerar links de acesso
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      const accessLinks = AccessManager.generateAccessLinks(baseUrl, accessToken, plan)

      // 4. Preparar dados para email
      const purchaseData = {
        purchaseId,
        customerEmail: customer_email,
        customerName: customer_name || "Cliente",
        plan,
        amount: amount || "67,90",
        accessLinks,
      }

      // 5. Enviar email de acesso
      const emailSent = await EmailService.sendAccessEmail(purchaseData)

      console.log("✅ Compra Kirvano processada:", {
        email: customer_email,
        produto: product_id,
        transacao: transaction_id,
        accessToken,
        emailSent,
      })

      return NextResponse.json({
        success: true,
        accessToken,
        emailSent,
      })
    }

    return NextResponse.json({ message: "Event processed" })
  } catch (error) {
    console.error("Erro no webhook Kirvano:", error)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
