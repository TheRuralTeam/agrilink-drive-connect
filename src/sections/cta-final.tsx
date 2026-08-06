import { CtaButtons, Reveal } from "@/components/ui-bits";

export function CtaFinalSection() {
  return (
    <section id="registo" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 lg:px-10">
        <Reveal>
          <div className="rounded-2xl border border-accent/40 bg-accent-soft px-8 py-14 text-center md:px-16">
            <span className="badge">Próximo Passo</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl md:text-5xl">
              Junta-te à rede de transportadores do{" "}
              <span className="text-primary">Carrega</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Cria a tua conta, envia os documentos do veículo e começa a
              receber cargas atribuídas com valor definido.
            </p>
            <CtaButtons className="mt-8 justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
