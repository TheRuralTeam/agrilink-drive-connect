import deliveryUrban from "@/assets/delivery-urban.jpg";
import { Badge, Reveal } from "@/components/ui-bits";

const PROTOCOLOS = [
  ["Telefone sempre ligado", "Contactável durante todo o percurso. Chamadas não atendidas por períodos longos suspendem a viagem no sistema."],
  ["Localização em tempo real", "Partilha da posição via plataforma Carrega ou WhatsApp, com atualização mínima a cada duas horas de estrada."],
  ["Imprevistos", "Avaria, acidente, bloqueio de estrada ou atraso: comunica de imediato à central. Nunca redistribuas nem descarregues carga sem autorização."],
  ["Integridade do produto", "Paragens prolongadas ao sol comprometem produto fresco. Prioriza sombra e ventilação em qualquer pausa."],
];

export function ViagemSection() {
  return (
    <section id="viagem" className="bg-surface">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <Reveal>
            <Badge>Durante a Viagem</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Comunicação{" "}
              <span className="text-accent-strong">permanente</span> até à
              descarga
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Entre a partida e a entrega, a AgriLink e o comprador precisam de
              saber onde está a carga. O protocolo é simples e não negociável.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {PROTOCOLOS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <li className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl">{t}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={100}>
          <figure>
            <img
              src={deliveryUrban}
              alt="Descarga de produto hortícola num ponto de entrega urbano em Luanda"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Ponto de entrega urbano · Luanda
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
