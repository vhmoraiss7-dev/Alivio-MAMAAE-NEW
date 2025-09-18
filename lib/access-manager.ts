interface AccessData {
  purchaseId: string
  email: string
  plan: string
  createdAt: string
  expiresAt?: string
  isActive: boolean
}

export class AccessManager {
  // Simula banco de dados de acessos (em produção, usar banco real)
  private static accessDatabase: Map<string, AccessData> = new Map()

  static generateAccessToken(purchaseId: string, email: string): string {
    // Gera token único baseado no ID da compra e email
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 15)
    return `${purchaseId}_${timestamp}_${randomStr}`
  }

  static createAccess(purchaseId: string, email: string, plan: string): string {
    const accessToken = this.generateAccessToken(purchaseId, email)

    const accessData: AccessData = {
      purchaseId,
      email,
      plan,
      createdAt: new Date().toISOString(),
      isActive: true,
    }

    // Salva no "banco de dados" simulado
    this.accessDatabase.set(accessToken, accessData)

    console.log("🔑 Acesso criado:", { accessToken, purchaseId, email, plan })

    return accessToken
  }

  static validateAccess(accessToken: string, email?: string): AccessData | null {
    const accessData = this.accessDatabase.get(accessToken)

    if (!accessData || !accessData.isActive) {
      return null
    }

    // Verifica se o email confere (se fornecido)
    if (email && accessData.email !== email) {
      return null
    }

    // Verifica expiração (se definida)
    if (accessData.expiresAt && new Date() > new Date(accessData.expiresAt)) {
      return null
    }

    return accessData
  }

  static generateAccessLinks(baseUrl: string, accessToken: string, plan: string) {
    const links = {
      mainAccess: `${baseUrl}/acesso?token=${accessToken}`,
      guides: [] as string[],
      bonus: `${baseUrl}/bonus?token=${accessToken}`,
      vipGroup: "https://t.me/+JornadaMaternaVIP",
    }

    if (plan === "combo") {
      links.mainAccess = `${baseUrl}/acesso-combo?token=${accessToken}`
      links.guides = [
        `${baseUrl}/guias/massagens?token=${accessToken}`,
        `${baseUrl}/guias/amamentacao?token=${accessToken}`,
        `${baseUrl}/guias/recuperacao?token=${accessToken}`,
        `${baseUrl}/guias/sono?token=${accessToken}`,
      ]
    } else if (plan === "massagem") {
      links.mainAccess = `${baseUrl}/guias/massagens?token=${accessToken}`
      links.guides = [`${baseUrl}/guias/massagens?token=${accessToken}`]
    } else if (plan === "amamentacao") {
      links.mainAccess = `${baseUrl}/guias/amamentacao?token=${accessToken}`
      links.guides = [`${baseUrl}/guias/amamentacao?token=${accessToken}`]
    } else if (plan === "recuperacao") {
      links.mainAccess = `${baseUrl}/guias/recuperacao?token=${accessToken}`
      links.guides = [`${baseUrl}/guias/recuperacao?token=${accessToken}`]
    } else if (plan === "sono") {
      links.mainAccess = `${baseUrl}/guias/sono?token=${accessToken}`
      links.guides = [`${baseUrl}/guias/sono?token=${accessToken}`]
    }

    return links
  }

  static revokeAccess(accessToken: string): boolean {
    const accessData = this.accessDatabase.get(accessToken)
    if (accessData) {
      accessData.isActive = false
      this.accessDatabase.set(accessToken, accessData)
      return true
    }
    return false
  }

  static listUserAccess(email: string): AccessData[] {
    return Array.from(this.accessDatabase.values()).filter((access) => access.email === email && access.isActive)
  }
}
