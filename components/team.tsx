const industries = [
  {
    name: "Calzado",
    role: "Suelas y Plantillas",
    description: "Componentes de calidad para industria del calzado",
    image: "/industry-footwear.jpg",
  },
  {
    name: "Automotriz",
    role: "Neumáticos y Piezas",
    description: "Materiales técnicos para la industria automotriz",
    image: "/industry-automotive.jpg",
  },
  {
    name: "Iluminación",
    role: "Pantallas de Lámparas",
    description: "Soluciones translúcidas para iluminación",
    image: "/industry-lighting.jpg",
  },
  {
    name: "Distribuidores",
    role: "Soluciones Mayoristas",
    description: "Apoyo para distribuidores de materiales",
    image: "/industry-distribution.jpg",
  },
]

export function Team() {
  return (
    <section id="industrias" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Industrias que Confían en Nosotros</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Más de 25 años trabajando con emprendimientos, industrias y distribuidores de toda Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-muted mb-6 overflow-hidden rounded-lg">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-normal tracking-tight">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
