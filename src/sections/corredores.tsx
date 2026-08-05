const CORREDORES = [
  "Luanda – Bengo",
  "Luanda – Kwanza Sul",
  "Benguela – Luanda",
  "Huíla – Namibe",
  "Huambo – Luanda",
  "Malanje – Luanda",
  "Uíge – Luanda",
  "Cabinda",
  "Kwanza Norte",
  "Namibe – Huíla",
  "Bié – Huambo",
  "Lubango – Benguela",
];

export function CorredoresSection() {
  return (
    <section id="corredores" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow">Presença Nacional</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Corredores de transporte <em className="text-primary">cobertos</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Rotas com procura ativa de transportadores. A cobertura acompanha a
            expansão das comunidades AgriLink.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CORREDORES.map((c) => (
            <div
              key={c}
              className="border border-border px-5 py-4 text-sm transition-colors hover:border-foreground"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}