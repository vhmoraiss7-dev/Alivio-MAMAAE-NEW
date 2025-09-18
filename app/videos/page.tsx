export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Massagem para Alívio das Costas",
      duration: "8:45",
      description: "Técnica completa para aliviar dores nas costas durante a gravidez",
      thumbnail: "/video-thumb-1.jpg",
    },
    {
      id: 2,
      title: "Massagem nos Pés e Pernas",
      duration: "6:30",
      description: "Reduza o inchaço e melhore a circulação com estas técnicas",
      thumbnail: "/video-thumb-2.jpg",
    },
    {
      id: 3,
      title: "Massagem Relaxante para o Sono",
      duration: "10:15",
      description: "Técnicas para promover relaxamento e melhor qualidade do sono",
      thumbnail: "/video-thumb-3.jpg",
    },
    {
      id: 4,
      title: "Automassagem Facial",
      duration: "5:20",
      description: "Alivie tensões faciais e promova bem-estar",
      thumbnail: "/video-thumb-4.jpg",
    },
    {
      id: 5,
      title: "Massagem Abdominal Suave",
      duration: "7:10",
      description: "Técnica segura para conexão com o bebê",
      thumbnail: "/video-thumb-5.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Vídeos Demonstrativos</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda as técnicas com demonstrações profissionais em alta qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors">
                  Assistir Vídeo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent/10 rounded-lg p-6 inline-block">
            <h3 className="text-xl font-bold text-primary mb-2">📱 Assista no seu ritmo</h3>
            <p className="text-muted-foreground">
              Todos os vídeos estão disponíveis 24/7 e você pode assistir quantas vezes quiser!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
