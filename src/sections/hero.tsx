import heroTruck from "@/assets/hero-truck.jpg";
import { Badge, CtaButtons, Reveal } from "@/components/ui-bits";

export function HeroSection() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <Reveal>
          <Badge>Carrega · AgriLink Logística</Badge>
          <h1 className="mt-6 max-w-2xl text-[2.25rem] md:text-6xl">
            A tua carga é o{" "}
            <span className="text-primary">motor</span> da cadeia
            agroalimentar de Angola
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O Carrega liga motoristas profissionais a cargas agroalimentares
            verificadas — do interior para Luanda e de Luanda para o interior.
            Destino, prazo e valor definidos antes de arrancares.
          </p>
          <CtaButtons className="mt-8" />
          <p className="mt-4 text-sm text-muted-foreground">
            Registo gratuito · Validação de documentos em 48h
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={heroTruck}
              alt="Camião carregado com produto agrícola numa estrada angolana"
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
              <div className="p-5">
                <div className="text-2xl font-extrabold">50%</div>
                <div className="text-sm text-muted-foreground">
                  adiantado ao iniciar viagem
                </div>
              </div>
              <div className="p-5">
                <div className="text-2xl font-extrabold">100%</div>
                <div className="text-sm text-muted-foreground">
                  cargas documentadas
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
