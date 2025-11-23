const services = [
  {
    number: "01",
    title: "Fabricación de Rollos y Láminas",
    description:
      "Producción de polietileno y EVA con espesores desde 70 hasta 600 micrones y anchos de hasta 1,50–1,53 metros, adaptados a tus especificaciones.",
  },
  {
    number: "02",
    title: "Personalización de Productos",
    description:
      "Múltiples colores, acabados (opaco, translúcido) y formatos según tus necesidades. Producción flexible y a medida.",
  },
  {
    number: "03",
    title: "Asesoramiento Técnico",
    description:
      "Guía personalizada para elegir el material, espesor y formato ideal para tu aplicación final. Expertos en cada sector.",
  },
  {
    number: "04",
    title: "Logística en Todo el País",
    description: "Entregas confiables a toda Argentina con enfoque principal en AMBA. Entregas programadas y puntales.",
  },
]

export function Expertise() {
  return (
    <section id="quienes-somos" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 sticky top-32">Servicios</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Más de 25 años acompañando emprendedores, industrias y distribuidores con soluciones plásticas confiables.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="pb-12 border-b border-border last:border-0">
                  <div className="flex gap-8">
                    <span className="text-sm text-muted-foreground font-mono mt-1">{service.number}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-normal tracking-tight mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
