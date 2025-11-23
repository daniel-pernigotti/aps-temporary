const products = [
  {
    title: "Láminas de Polietileno",
    specs: "Desde 70 a 600 micrones",
    category: "Estándar",
    image: "/polyethylene-sheets-rolls.jpg",
  },
  {
    title: "Rollos EVA",
    specs: "Anchos hasta 1,50-1,53 m",
    category: "Premium",
    image: "/eva-material-rolls.jpg",
  },
  {
    title: "Productos Translúcidos",
    specs: "Acabado personalizado",
    category: "Especialidad",
    image: "/translucent-plastic-material.jpg",
  },
  {
    title: "Láminas de Color",
    specs: "Múltiples tonalidades",
    category: "Personalizado",
    image: "/colored-plastic-sheets.jpg",
  },
  {
    title: "Rollos Opacos",
    specs: "Alta resistencia",
    category: "Industrial",
    image: "/opaque-industrial-plastic.jpg",
  },
  {
    title: "Soluciones a Medida",
    specs: "Producción personalizada",
    category: "Especial",
    image: "/custom-plastic-production.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="servicios" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Nuestros Productos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Una variedad completa de láminas y rollos de polietileno y EVA para todas tus necesidades industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {products.map((product, index) => (
            <article key={index} className="group">
              <div className="aspect-[3/2] bg-muted mb-6 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-normal tracking-tight">{product.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</span>
                </div>
                <p className="text-muted-foreground">{product.specs}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
