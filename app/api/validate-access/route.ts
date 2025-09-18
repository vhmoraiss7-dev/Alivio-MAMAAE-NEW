import { type NextRequest, NextResponse } from "next/server"
import { AccessManager } from "@/lib/access-manager"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    const email = searchParams.get("email")

    if (!token) {
      return NextResponse.json({ error: "Token é obrigatório" }, { status: 400 })
    }

    const accessData = AccessManager.validateAccess(token, email || undefined)

    if (!accessData) {
      return NextResponse.json({ error: "Acesso inválido ou expirado" }, { status: 401 })
    }

    return NextResponse.json({
      valid: true,
      purchaseId: accessData.purchaseId,
      plan: accessData.plan,
      email: accessData.email,
      createdAt: accessData.createdAt,
    })
  } catch (error) {
    console.error("Erro ao validar acesso:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 })
    }

    const userAccess = AccessManager.listUserAccess(email)

    return NextResponse.json({
      access: userAccess,
      count: userAccess.length,
    })
  } catch (error) {
    console.error("Erro ao listar acessos:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
