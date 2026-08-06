import { Badge, Reveal } from "@/components/ui-bits";

const CORREDORES = [
  "Luanda – Bengo",
  "Luanda – Kwanza Sul",
  "Benguela – Luanda",
  "Huíla – Namibe",
  "Huambo – Luanda",
  "Malanje – Luanda",
  "Uíge – Luanda",
  "Cabinda",
  "Kwanza Norte – Luanda",
  "Namibe – Huíla",
  "Bié – Huambo",
  "Lubango – Benguela",
];

export function CorredoresSection() {
  return (
    <section id="corredores" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Badge>Corredores Cobertos</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Rotas com procura{" "}
              <span className="text-accent-strong">ativa</span> de
              transportadores
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A cobertura acompanha a expansão das comunidades AgriLink em todo
              o território nacional.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CORREDORES.map((c, i) => (
            <Reveal key={c} delay={i * 30}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-base font-medium transition-colors hover:border-primary hover:bg-primary-soft">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                {c}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-accent/40 bg-accent-soft p-8">
            <span className="badge">Próxima Fase</span>
            <h3 className="mt-4 text-2xl">Expansão para corredores SADC</h3>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              O Carrega prepara a abertura de rotas transfronteiriças na região
              da SADC, começando pela República Democrática do Congo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
