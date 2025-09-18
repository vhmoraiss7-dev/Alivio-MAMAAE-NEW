import { type NextRequest, NextResponse } from "next/server"
import { AccessManager } from "@/lib/access-manager"

const guideFiles = {
  massagens: "guia-massagens-gestacao.pdf",
  amamentacao: "guia-mamae-conectada.pdf",
  recuperacao: "guia-recuperacao-pos-parto.pdf",
  "sono-bebe": "guia-sono-bebe.pdf",
}

export async function GET(request: NextRequest, { params }: { params: { guide: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    const guide = params.guide

    if (!token) {
      return NextResponse.json({ error: "Token de acesso obrigatório" }, { status: 401 })
    }

    if (!guide || !guideFiles[guide as keyof typeof guideFiles]) {
      return NextResponse.json({ error: "Guia não encontrado" }, { status: 404 })
    }

    // Validar acesso
    const accessData = AccessManager.validateAccess(token)
    if (!accessData) {
      return NextResponse.json({ error: "Acesso inválido ou expirado" }, { status: 401 })
    }

    // Verificar se o plano inclui este guia
    const hasAccess =
      accessData.plan === "combo" ||
      (accessData.plan === "massagem" && guide === "massagens") ||
      (accessData.plan === "amamentacao" && guide === "amamentacao")

    if (!hasAccess) {
      return NextResponse.json({ error: "Seu plano não inclui este guia" }, { status: 403 })
    }

    const filename = guideFiles[guide as keyof typeof guideFiles]

    // Em produção, você retornaria o arquivo real
    // Por enquanto, retorna informações do download
    return NextResponse.json({
      success: true,
      filename,
      downloadUrl: `/downloads/${filename}`,
      guide,
      accessValidated: true,
      plan: accessData.plan,
    })
  } catch (error) {
    console.error("Erro no download:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
