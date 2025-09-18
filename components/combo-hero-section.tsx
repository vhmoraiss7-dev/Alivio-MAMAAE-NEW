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
    <section className="baby-nursery-bg py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Mamadeiras flutuantes suaves */}
      <div className="absolute top-20 left-10 text-4xl baby-float opacity-70">🍼</div>
      <div className="absolute top-40 right-20 text-3xl baby-float opacity-60" style={{ animationDelay: "1s" }}>
        🍼
      </div>
      <div className="absolute bottom-40 left-20 text-3xl baby-float opacity-80" style={{ animationDelay: "2s" }}>
        🍼
      </div>

      {/* Elementos baby decorativos */}
      <div className="absolute top-32 right-10 text-3xl baby-float opacity-70">👶</div>
      <div className="absolute bottom-20 right-40 text-2xl baby-float opacity-60" style={{ animationDelay: "1.5s" }}>
        🧸
      </div>
      <div className="absolute top-60 left-40 text-2xl baby-float opacity-80" style={{ animationDelay: "0.5s" }}>
        🌙
      </div>

      {/* Nuvens decorativas */}
      <div className="cloud-decoration w-20 h-12 top-16 left-1/4"></div>
      <div className="cloud-decoration w-16 h-10 top-32 right-1/3" style={{ animationDelay: "2s" }}></div>
      <div className="cloud-decoration w-24 h-14 bottom-40 left-1/3" style={{ animationDelay: "4s" }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 offer-card px-8 py-4 rounded-full text-lg font-black mb-8 soft-pulse">
            ✨ OFERTA ESPECIAL - APENAS 48H ✨
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-gray-800 mb-8 text-balance leading-tight">
            <span className="text-pink-500 gentle-bounce inline-block">JORNADA</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">MATERNA</span>
            <br />
            <span className="text-pink-500 gentle-bounce inline-block" style={{ animationDelay: "0.5s" }}>
              COMPLETA
            </span>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-10 max-w-4xl mx-auto border-2 border-pink-200 soft-pulse">
            <p className="text-xl md:text-2xl text-black mb-6 font-semibold" style={{ color: "#000000 !important" }}>
              O ÚNICO COMBO que acompanha você desde a <span className="price-highlight">GESTAÇÃO</span> até os
              primeiros anos do seu bebê!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="offer-card p-4 rounded-2xl text-center">
                <div className="text-2xl mb-2">🤰</div>
                <div className="font-bold text-sm">Massagens Gestação</div>
              </div>
              <div className="offer-card p-4 rounded-2xl text-center">
                <div className="text-2xl mb-2">🤱</div>
                <div className="font-bold text-sm">Amamentação</div>
              </div>
              <div className="offer-card p-4 rounded-2xl text-center">
                <div className="text-2xl mb-2">💪</div>
                <div className="font-bold text-sm">Pós-Parto</div>
              </div>
              <div className="offer-card p-4 rounded-2xl text-center">
                <div className="text-2xl mb-2">😴</div>
                <div className="font-bold text-sm">Sono do Bebê</div>
              </div>
            </div>

            <p className="text-lg text-black" style={{ color: "#000000 !important" }}>
              <span className="price-highlight text-xl">4 GUIAS COMPLETOS</span> para uma maternidade tranquila e
              segura!
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="offer-card px-6 py-4 rounded-2xl text-center gentle-bounce">
              <div className="text-3xl font-black text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-white">HORAS</div>
            </div>
            <div className="text-4xl text-pink-400 baby-float">⏰</div>
            <div
              className="offer-card px-6 py-4 rounded-2xl text-center gentle-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-3xl font-black text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-white">MIN</div>
            </div>
            <div className="text-4xl text-pink-400 baby-float" style={{ animationDelay: "1s" }}>
              ✨
            </div>
            <div
              className="offer-card px-6 py-4 rounded-2xl text-center gentle-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-3xl font-black text-white">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs font-bold text-white">SEG</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-lg md:text-xl font-black text-white hover:scale-105 transition-all duration-300 soft-pulse shadow-lg border-2 border-pink-300 rounded-full px-6 md:px-8 py-4 md:py-6 w-full max-w-sm mx-auto"
            onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
          >
            💕 QUERO O COMBO AGORA! 💕
          </Button>

          <p className="text-lg text-gray-600 mt-6 font-semibold">
            ✅ Acesso IMEDIATO • ✅ Garantia de 7 dias • ✅ Suporte ESPECIALIZADO
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative soft-pulse">
            <Image
              src="/happy-mother-with-baby-journey.jpg"
              alt="Mãe feliz com bebê representando a jornada materna completa"
              width={800}
              height={500}
              className="rounded-3xl shadow-xl mx-auto border-4 border-white"
              priority
            />
          </div>

          <div className="absolute -top-4 -left-4 offer-card px-6 py-3 rounded-full text-lg font-black shadow-lg gentle-bounce">
            🎯 4 PRODUTOS
          </div>
          <div
            className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-black shadow-lg gentle-bounce border-2 border-white"
            style={{ animationDelay: "0.5s" }}
          >
            💥 70% OFF
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-black shadow-lg baby-float border-2 border-white">
            🏆 COMBO MAIS VENDIDO!
          </div>
        </div>
      </div>
    </section>
  )
}
