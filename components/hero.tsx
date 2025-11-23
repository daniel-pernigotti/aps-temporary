export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-balance mb-8">
              Soluciones en láminas y rollos de polietileno y EVA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              Más de 25 años fabricando materiales plásticos de alta calidad para la industria argentina. Producción
              flexible, entregas confiables y atención personalizada.
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Consultar Ahora
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-muted">
              <img
                src="/plastic-rolls-industrial-production.jpg"
                alt="Rollos de polietileno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
