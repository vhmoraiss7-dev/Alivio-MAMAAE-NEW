import { Button } from "@/components/ui/button"

function BabyLogo() {
  return (
    <div className="relative">
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Fundo suave */}
        <circle cx="20" cy="20" r="18" fill="url(#babyGradient)" opacity="0.1" />

        {/* Bebê */}
        <circle cx="20" cy="16" r="8" fill="#fdf2f8" stroke="#f9a8d4" strokeWidth="2" />
        <circle cx="17" cy="14" r="1.5" fill="#ec4899" />
        <circle cx="23" cy="14" r="1.5" fill="#ec4899" />
        <path
          d="M17 18c0 1.657 1.343 3 3 3s3-1.343 3-3"
          stroke="#ec4899"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Corpo do bebê */}
        <ellipse cx="20" cy="28" rx="6" ry="8" fill="#fdf2f8" stroke="#f9a8d4" strokeWidth="2" />

        {/* Bracinhos */}
        <circle cx="13" cy="24" r="3" fill="#fdf2f8" stroke="#f9a8d4" strokeWidth="2" />
        <circle cx="27" cy="24" r="3" fill="#fdf2f8" stroke="#f9a8d4" strokeWidth="2" />

        {/* Coração flutuante */}
        <path
          d="M32 8c0-2.5 2-4.5 4.5-4.5S41 5.5 41 8c0 1.5-1 3-4.5 6.5C33 11 32 9.5 32 8z"
          fill="#f472b6"
          className="animate-pulse"
          transform="scale(0.3) translate(20, 20)"
        />

        <defs>
          <linearGradient id="babyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-50 via-white to-blue-50 backdrop-blur-md border-b border-pink-100 shadow-lg overflow-hidden relative">
      {/* Círculo amarelo decorativo */}
      <div className="absolute top-4 left-20 w-8 h-8 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>

      {/* Círculos rosa decorativos */}
      <div className="absolute top-8 right-32 w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-2 left-8 w-6 h-6 bg-pink-200 rounded-full opacity-50"></div>
      <div className="absolute top-2 right-64 w-12 h-12 bg-pink-100 rounded-full opacity-30"></div>

      <div className="container mx-auto flex h-20 items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            <BabyLogo />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent tracking-wide">
              Alívio Mamãe
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#produtos"
            className="relative text-sm font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 group py-2"
          >
            Produtos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#beneficios"
            className="relative text-sm font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 group py-2"
          >
            Benefícios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#depoimentos"
            className="relative text-sm font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 group py-2"
          >
            Depoimentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-600 px-4 md:px-6 py-2 text-xs md:text-sm"
            asChild
          >
            <a href="https://pay.cakto.com.br/xf6k92o_570181" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-1 md:gap-2 font-semibold text-white">
                Ver Combo
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="animate-bounce">
                  <path d="M8 2L8 14M2 8L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
