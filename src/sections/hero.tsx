import heroTruck from "@/assets/hero-truck.jpg";

export function HeroSection() {
  return (
    <section id="top" className="relative bg-ink text-ink-foreground">
      <div className="absolute inset-0">
        <img
          src={heroTruck}
          alt="Camião carregado com produto agrícola numa estrada angolana"
          width={1600}
          height={1008}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <span className="eyebrow">AgriLink Logística</span>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
          A tua carga é o <em className="text-lime">motor</em> da cadeia
          agroalimentar de Angola
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/70">
          Transporta produto verificado entre produtores, agentes de campo e
          compradores institucionais. Cargas atribuídas com destino, prazo e
          valor definidos antes de arrancares.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#registo"
            className="rounded-sm bg-lime px-7 py-3.5 text-sm font-medium text-lime-foreground transition-opacity hover:opacity-90"
          >
            Regista-te como Motorista
          </a>
          <a
            href="#como-funciona"
            className="rounded-sm border border-ink-foreground/30 px-7 py-3.5 text-sm transition-colors hover:border-ink-foreground"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <div className="relative border-t border-ink-foreground/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-t border-gold/60 pt-5">
            <div className="font-display text-4xl leading-none md:text-5xl">9</div>
            <div className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-foreground/55">
              Passos do Fluxo
            </div>
          </div>
          <div className="border-t border-gold/60 pt-5">
            <div className="font-display text-4xl leading-none md:text-5xl">50%</div>
            <div className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-foreground/55">
              Adiantado ao Iniciar Viagem
            </div>
          </div>
          <div className="border-t border-gold/60 pt-5">
            <div className="font-display text-4xl leading-none md:text-5xl">100%</div>
            <div className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-foreground/55">
              Cargas Documentadas
            </div>
          </div>
          <div className="border-t border-gold/60 pt-5">
            <div className="font-display text-4xl leading-none md:text-5xl">3</div>
            <div className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-foreground/55">
              Idiomas Suportados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}