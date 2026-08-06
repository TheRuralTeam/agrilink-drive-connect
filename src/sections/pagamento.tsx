import { CtaButtons, Reveal } from "@/components/ui-bits";

export function PagamentoSection() {
  return (
    <section id="pagamento" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-primary p-8 text-white md:p-14">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white">
              Pagamento
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl text-white md:text-5xl">
              Transparência total, sem letras miúdas
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              O valor do frete é acordado antes de aceitares a carga e é
              libertado em dois momentos claros.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-extrabold text-white">50%</span>
                  <span className="text-sm font-semibold text-white/75">
                    No início da viagem
                  </span>
                </div>
                <div className="mt-6 h-2 w-full rounded-full bg-white/20">
                  <div className="h-full w-1/2 rounded-full bg-accent" />
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/80">
                  Assim que marcas a partida com a carga confirmada pelo agente
                  de campo, metade do valor é libertada para cobrir combustível,
                  portagens e despesas de estrada.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-extrabold text-white">50%</span>
                  <span className="text-sm font-semibold text-white/75">
                    Na confirmação de entrega
                  </span>
                </div>
                <div className="mt-6 h-2 w-full rounded-full bg-white/20">
                  <div className="h-full w-full rounded-full bg-accent" />
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/80">
                  Validada a receção pelo comprador e anexada a fotografia da
                  descarga, o remanescente é processado. Sem retenções fora do
                  contrato digital.
                </p>
              </div>
            </div>

            <CtaButtons variant="onColor" className="mt-10" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            ["Valor fechado", "O frete é apresentado antes da aceitação e não muda a meio da viagem."],
            ["Contrato digital", "Cada viagem gera registo próprio com condições, prazos e valores."],
            ["Histórico acessível", "Consultas todas as viagens e pagamentos associados à tua conta."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-base text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
