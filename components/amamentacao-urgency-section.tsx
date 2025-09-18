"use client"

import { Button } from "@/components/ui/button"

export function AmamentacaoUrgencySection() {
  return (
    <section className="urgency-gradient py-20 px-4 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block bg-white/20 px-6 py-3 rounded-full text-lg font-bold mb-6 pulse-glow">
            🚨 ATENÇÃO: OFERTA EXPIRA EM BREVE!
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Não Deixe Seu Bebê Sofrer Mais Um Dia!</h2>

          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Cada momento que você hesita é um momento de <strong>sofrimento desnecessário</strong> para você e seu bebê.
            Milhares de mães já transformaram sua amamentação - <strong>você pode ser a próxima!</strong>
          </p>
        </div>

        {/* Urgency stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">⏰ 48h</div>
            <div className="text-sm opacity-80">Restantes para garantir o desconto</div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">75% OFF</div>
            <div className="text-sm opacity-80">Desconto que nunca mais voltará</div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">+2.847</div>
            <div className="text-sm opacity-80">Mães já transformaram suas vidas</div>
          </div>
        </div>

        {/* Pain points */}
        <div className="bg-white/10 p-8 rounded-2xl mb-12 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6">Você Vai Continuar Sofrendo Com:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Dor intensa durante a amamentação</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Bebê chorando de fome constantemente</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Fissuras e machucados no peito</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Insegurança e sentimento de fracasso</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Noites sem dormir por causa da amamentação</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-300">❌</span>
              <span>Medo de não conseguir alimentar seu bebê</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">OU Você Pode Transformar Tudo HOJE!</h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-6 rounded-xl font-bold shadow-2xl"
              onClick={() => window.open("https://pay.cakto.com.br/xf6k92o_570181", "_blank")}
            >
              🔥 SIM! QUERO TRANSFORMAR MINHA AMAMENTAÇÃO!
            </Button>
          </div>

          <div className="text-sm opacity-80">
            ✅ Acesso imediato após o pagamento • ✅ Garantia de 30 dias • ✅ Suporte 24h
          </div>

          {/* Countdown timer */}
          <div className="bg-white/20 p-6 rounded-xl inline-block backdrop-blur-sm">
            <div className="text-lg font-bold mb-2">⏰ Esta oferta expira em:</div>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">47</div>
                <div className="text-xs">MINUTOS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">32</div>
                <div className="text-xs">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
