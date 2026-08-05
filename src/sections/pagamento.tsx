export function PagamentoSection() {
  return (
    <section id="pagamento" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow">Pagamento</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Transparência total, <em className="text-primary">sem letras miúdas</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            O valor do frete é acordado antes de aceitares a carga e é libertado
            em dois momentos claros.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="border border-border bg-card p-10">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl text-primary">50%</span>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                No início da viagem
              </span>
            </div>
            <div className="mt-8 h-1.5 w-full bg-secondary">
              <div className="h-full w-1/2 bg-lime" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Assim que marcas a partida com a carga confirmada pelo agente de
              campo, metade do valor é libertada para cobrir combustível,
              portagens e despesas de estrada.
            </p>
          </div>

          <div className="border border-border bg-card p-10">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl text-primary">50%</span>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Na confirmação de entrega
              </span>
            </div>
            <div className="mt-8 h-1.5 w-full bg-secondary">
              <div className="h-full w-full bg-lime" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Validada a receção pelo comprador e anexada a fotografia da
              descarga, o remanescente é processado. Sem retenções fora do
              contrato digital.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <h3 className="text-xl">Valor fechado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              O frete é apresentado antes da aceitação e não muda a meio da viagem.
            </p>
          </div>
          <div>
            <h3 className="text-xl">Contrato digital</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Cada viagem gera registo próprio com condições, prazos e valores.
            </p>
          </div>
          <div>
            <h3 className="text-xl">Histórico acessível</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Consultas todas as viagens e pagamentos associados à tua conta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}