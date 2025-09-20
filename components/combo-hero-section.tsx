"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ComboHeroSection() {
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
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-rose-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              OFERTA LIMITADA • ÚLTIMAS HORAS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">O único combo que</span>
              <span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                acompanha você
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-700 font-medium mt-2">
                desde a gestação até os primeiros anos do bebê
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Massagens, amamentação, recuperação pós-parto e sono do bebê.
              <span className="font-semibold text-gray-800"> Tudo em um único lugar.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🤰</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Massagens na Gestação</h3>
                  <p className="text-sm text-gray-600">Técnicas seguras para alívio e bem-estar</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🤱</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Amamentação</h3>
                  <p className="text-sm text-gray-600">Guia completo para sucesso na amamentação</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recuperação Pós-Parto</h3>
                  <p className="text-sm text-gray-600">Volta por cima com segurança e saúde</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sono do Bebê</h3>
                  <p className="text-sm text-gray-600">Métodos eficazes para noites tranquilas</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <p className="text-center text-sm font-medium text-gray-600 mb-4">OFERTA EXPIRA EM:</p>
                <div className="flex justify-center items-center gap-4">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-xl px-4 py-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                    </div>
                    <div className="text-xs font-medium text-gray-500 mt-1">HORAS</div>
                  </div>
                  <div className="text-2xl text-gray-300">:</div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-xl px-4 py-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                    </div>
                    <div className="text-xs font-medium text-gray-500 mt-1">MIN</div>
                  </div>
                  <div className="text-2xl text-gray-300">:</div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-xl px-4 py-3 min-w-[60px]">
                      <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                    </div>
                    <div className="text-xs font-medium text-gray-500 mt-1">SEG</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => {
                    console.log("[v0] Button clicked, searching for pricing-container")
                    const pricingContainer = document.getElementById("pricing-container")
                    console.log("[v0] Found container:", pricingContainer)
                    if (pricingContainer) {
                      pricingContainer.scrollIntoView({ behavior: "smooth", block: "center" })
                      console.log("[v0] Scrolling to container")
                    } else {
                      console.log("[v0] Container not found!")
                    }
                  }}
                >
                  Quero meu acesso agora
                </Button>
                <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Acesso imediato
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Garantia 7 dias
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Suporte especializado
                  </span>
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-pink-200 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <Image
                    src="/happy-mother-with-baby-journey.jpg"
                    alt="Mãe feliz com bebê representando a jornada materna completa"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto"
                    priority
                  />
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">4 Guias Completos</div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl px-4 py-2 shadow-lg">
                    <div className="text-sm font-semibold">70% OFF</div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-2xl px-6 py-2 shadow-lg">
                    <div className="text-sm font-semibold">Mais Vendido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
