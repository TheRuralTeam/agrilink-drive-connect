import deliveryUrban from "@/assets/delivery-urban.jpg";

export function ViagemSection() {
  return (
    <section id="viagem" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Durante a Viagem</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Comunicação <em className="text-primary">permanente</em> até à descarga
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Entre a partida e a entrega, a AgriLink e o comprador precisam de
            saber onde está a carga. O protocolo é simples e não negociável.
          </p>

          <ul className="mt-10 space-y-7">
            <li className="border-t border-border pt-5">
              <h3 className="text-xl">Telefone sempre ligado</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Contactável durante todo o percurso. Chamadas não atendidas por
                períodos longos suspendem a viagem no sistema.
              </p>
            </li>
            <li className="border-t border-border pt-5">
              <h3 className="text-xl">Localização em tempo real</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Partilha da posição via plataforma AgriLink ou WhatsApp, com
                atualização mínima a cada duas horas de estrada.
              </p>
            </li>
            <li className="border-t border-border pt-5">
              <h3 className="text-xl">Imprevistos</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Avaria, acidente, bloqueio de estrada ou atraso: comunica de
                imediato à central. Nunca redistribuas nem descarregues carga sem
                autorização.
              </p>
            </li>
            <li className="border-t border-border pt-5">
              <h3 className="text-xl">Integridade do produto</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Paragens prolongadas ao sol comprometem produto fresco. Prioriza
                sombra e ventilação em qualquer pausa.
              </p>
            </li>
          </ul>
        </div>

        <figure>
          <img
            src={deliveryUrban}
            alt="Descarga de produto hortícola num ponto de entrega urbano em Luanda"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Ponto de entrega urbano · Luanda
          </figcaption>
        </figure>
      </div>
    </section>
  );
}