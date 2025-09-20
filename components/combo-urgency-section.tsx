"use client"

import { useState, useEffect } from "react"

export function ComboUrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(135deg, #ff6b9d 0%, #ffd93d 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#1f2937" }}>
            ⚠️ ÚLTIMA CHANCE!
          </h2>
          <p className="text-xl md:text-2xl mb-8" style={{ color: "#374151" }}>
            Esta oferta especial expira em:
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <div
              className="px-6 py-4 rounded-xl text-center bounce-gentle border-2"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#1f2937",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-4xl md:text-6xl font-bold" style={{ color: "#1f2937" }}>
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-semibold" style={{ color: "#374151" }}>
                HORAS
              </div>
            </div>
            <div
              className="px-6 py-4 rounded-xl text-center bounce-gentle border-2"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#1f2937",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-4xl md:text-6xl font-bold" style={{ color: "#1f2937" }}>
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-semibold" style={{ color: "#374151" }}>
                MIN
              </div>
            </div>
            <div
              className="px-6 py-4 rounded-xl text-center bounce-gentle border-2"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#1f2937",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-4xl md:text-6xl font-bold" style={{ color: "#1f2937" }}>
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-semibold" style={{ color: "#374151" }}>
                SEG
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-8 rounded-2xl mb-8 border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderColor: "#1f2937",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1f2937" }}>
            Não deixe para depois... Sua jornada materna merece o melhor!
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <h4 className="font-bold text-lg mb-3" style={{ color: "#dc2626" }}>
                ❌ Sem o combo, você pode enfrentar:
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "#374151" }}>
                <li>• Dores intensas na gestação sem alívio</li>
                <li>• Dificuldades na amamentação e frustração</li>
                <li>• Recuperação pós-parto lenta e dolorosa</li>
                <li>• Noites sem dormir com bebê chorando</li>
                <li>• Ansiedade e insegurança constante</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3" style={{ color: "#059669" }}>
                ✅ Com o combo, você terá:
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "#374151" }}>
                <li>• Gestação tranquila e sem dores</li>
                <li>• Amamentação bem-sucedida e prazerosa</li>
                <li>• Recuperação rápida e saudável</li>
                <li>• Bebê dormindo a noite toda</li>
                <li>• Confiança e segurança em cada etapa</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4" style={{ color: "#374151" }}>
              Separados, cada guia custaria R$97 (total R$297). Mas hoje você garante acesso vitalício ao combo completo
              por apenas:
            </p>
            <div className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1f2937" }}>
              <span
                className="px-4 py-2 rounded-xl font-black border-2"
                style={{
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  borderColor: "#b91c1c",
                }}
              >
                R$67
              </span>
            </div>
            <div className="text-lg mb-6" style={{ color: "#059669" }}>
              💰 Economia de R$230
            </div>

            <div className="px-4">
              <a
                href="https://pay.cakto.com.br/xf6k92o_570181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold shadow-2xl hover:scale-105 transition-all duration-300 mega-pulse rounded-full text-sm md:text-base px-6 py-4 w-full max-w-sm mx-auto border-2"
                style={{
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  borderColor: "#b91c1c",
                  textDecoration: "none",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                💕 GARANTIR MEU ACESSO POR APENAS R$67 💕
              </a>
            </div>

            <p className="text-sm mt-4" style={{ color: "#374151" }}>
              ✅ Acesso imediato • ✅ Você tem 7 dias para testar. Se não gostar, devolvemos seu dinheiro sem
              burocracia. • ✅ Pagamento seguro
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4" style={{ color: "#1f2937" }}>
            🔥 Apenas <strong style={{ color: "#dc2626" }}>47 combos</strong> restantes nesta promoção
          </p>
          <div
            className="rounded-full h-4 mb-4 overflow-hidden"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                backgroundColor: "#dc2626",
                width: "78%",
              }}
            ></div>
          </div>
          <p className="text-sm" style={{ color: "#374151" }}>
            ⚡ Esta oferta não será repetida. Garante já o seu!
          </p>
        </div>
      </div>
    </section>
  )
}
