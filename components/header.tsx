export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl font-medium tracking-tight">APS</div>
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#servicios"
              className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#quienes-somos"
              className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
            >
              Quiénes Somos
            </a>
            <a
              href="#industrias"
              className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
            >
              Industrias
            </a>
            <a
              href="#contacto"
              className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
