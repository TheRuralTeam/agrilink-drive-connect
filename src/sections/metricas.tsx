import { Reveal, StatCounter } from "@/components/ui-bits";

export function MetricasSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20 lg:px-10">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-4">
            <StatCounter value={9} label="Passos do fluxo de viagem" />
            <StatCounter value={50} suffix="%" label="Adiantado no início da viagem" />
            <StatCounter value={12} suffix="+" label="Corredores nacionais cobertos" />
            <StatCounter value={48} suffix="h" label="Validação de documentos" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
