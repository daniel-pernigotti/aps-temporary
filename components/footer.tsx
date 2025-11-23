export function Footer() {
  return (
    <footer id="contacto" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-light tracking-tight mb-6">Contactanos</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              ¿Querés cotizar, hacer un pedido o recibir asesoramiento? APS está aquí para ayudarte.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Oficina</h3>
                <address className="not-italic text-sm leading-relaxed">
                  Buenos Aires, Argentina
                  <br />
                  Región AMBA
                  <br />
                  Argentina
                </address>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Contacto</h3>
                <div className="text-sm space-y-2">
                  <p>info@aps.com.ar</p>
                  <p>+54 (11) XXXX-XXXX</p>
                  <p>WhatsApp: +54 (11) XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 APS. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
