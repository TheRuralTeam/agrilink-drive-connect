import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/ui-bits";
import { supabase } from "@/integrations/supabase/client";
import { formatData, formatKz, type Carga } from "@/lib/carrega";

export function CargasPublicasSection() {
  const [cargas, setCargas] = useState<Carga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("cargas")
      .select("*")
      .eq("estado", "disponivel")
      .order("data_carga", { ascending: true })
      .limit(6)
      .then(({ data }) => {
        setCargas(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <section id="cargas" className="border-t border-border bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Modo visitante
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cargas disponíveis agora na rede Carrega
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Vê as cargas abertas sem criar conta. Para aceitar um frete, entra na plataforma —
            os dados de contacto e de atribuição só ficam visíveis para motoristas registados.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading &&
            [0, 1, 2].map((i) => (
              <div key={i} className="h-40 animate-pulse rounded-xl border border-border bg-background" />
            ))}
          {!loading &&
            cargas.map((carga) => (
              <article key={carga.id} className="rounded-xl border border-border bg-background p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-extrabold tracking-tight">{carga.produto}</h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                    Disponível
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {carga.origem} → {carga.destino}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {(carga.quantidade_kg / 1000).toFixed(1)} t · {formatData(carga.data_carga)}
                  {carga.distancia_km ? ` · ${carga.distancia_km} km` : ""}
                </p>
                <p className="mt-4 text-xl font-extrabold tracking-tight">
                  {formatKz(carga.valor_kz)}
                </p>
              </article>
            ))}
          {!loading && cargas.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Sem cargas abertas neste momento. Regista-te para seres notificado.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/auth" className="btn-primary">
            Entrar na Plataforma
          </Link>
          <Link to="/auth" className="btn-outline">
            Criar conta de motorista
          </Link>
        </div>
      </div>
    </section>
  );
}