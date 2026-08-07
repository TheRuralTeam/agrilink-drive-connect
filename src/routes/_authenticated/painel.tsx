import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/agrilink-logo.asset.json";
import {
  ESTADO_LABEL,
  ESTADOS_ATIVOS,
  PROXIMO_ESTADO,
  formatData,
  formatKz,
  type Carga,
  type MotoristaDetails,
} from "@/lib/carrega";

const TITLE = "Painel do motorista | Carrega — AgriLink";
const DESCRIPTION =
  "Painel Carrega: cargas disponíveis, viagens ativas, estado do frete e envio de localização em tempo real.";

export const Route = createFileRoute("/_authenticated/painel")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Painel,
});

function Painel() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [perfil, setPerfil] = useState<MotoristaDetails | null>(null);
  const [cargas, setCargas] = useState<Carga[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [tab, setTab] = useState<"disponiveis" | "minhas">("disponiveis");

  const carregar = useCallback(async (uid: string) => {
    const [{ data: det }, { data: lista, error }] = await Promise.all([
      supabase.from("motorista_details").select("*").eq("user_id", uid).maybeSingle(),
      supabase
        .from("cargas")
        .select("*")
        .order("data_carga", { ascending: true }),
    ]);
    if (error) setErro(error.message);
    setPerfil(det ?? null);
    setCargas(lista ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      setUserId(data.user.id);
      void carregar(data.user.id);
    });
  }, [carregar]);

  useEffect(() => {
    if (!userId) return;
    const channel = supabase
      .channel("cargas-painel")
      .on("postgres_changes", { event: "*", schema: "public", table: "cargas" }, () => {
        void carregar(userId);
      })
      .subscribe();
    return () => {
      void supabase.removeChannel(channel);
    };
  }, [userId, carregar]);

  async function aceitar(carga: Carga) {
    if (!userId) return;
    setErro(null);
    const { error } = await supabase
      .from("cargas")
      .update({ motorista_id: userId, estado: "atribuida" })
      .eq("id", carga.id)
      .eq("estado", "disponivel");
    if (error) return setErro(error.message);
    setAviso(`Carga de ${carga.produto} atribuída a ti.`);
    setTab("minhas");
    void carregar(userId);
  }

  async function avancar(carga: Carga) {
    if (!userId) return;
    const proximo = PROXIMO_ESTADO[carga.estado];
    if (!proximo) return;
    const { error } = await supabase
      .from("cargas")
      .update({ estado: proximo.estado })
      .eq("id", carga.id);
    if (error) return setErro(error.message);
    void carregar(userId);
  }

  function enviarLocalizacao(carga: Carga) {
    if (!userId || typeof navigator === "undefined" || !navigator.geolocation) {
      setErro("Localização não disponível neste dispositivo.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { error } = await supabase.from("localizacoes_viagem").insert({
          carga_id: carga.id,
          motorista_id: userId,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setAviso(error ? null : "Localização enviada à AgriLink.");
        if (error) setErro(error.message);
      },
      () => setErro("Não foi possível obter a tua localização."),
    );
  }

  async function sair() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const disponiveis = cargas.filter((c) => c.estado === "disponivel");
  const minhas = cargas.filter((c) => c.motorista_id === userId);
  const ativas = minhas.filter((c) => ESTADOS_ATIVOS.includes(c.estado));
  const ganhos = minhas
    .filter((c) => c.estado === "entregue" || c.estado === "confirmada")
    .reduce((s, c) => s + c.valor_kz, 0);

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1100px] items-center gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo.url} alt="AgriLink" className="h-7 w-auto" />
            <span className="font-extrabold tracking-tight">Carrega</span>
          </Link>
          <span className="ml-auto hidden text-sm text-muted-foreground sm:inline">
            {perfil?.nome_completo ?? "Motorista"}
          </span>
          <button onClick={sair} className="btn-outline !px-4 !py-2 text-sm">
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Painel do motorista</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Aceita cargas, atualiza o estado da viagem e partilha a tua localização.
        </p>

        {!perfil && !loading && (
          <div className="mt-6 rounded-xl border border-border bg-background p-5">
            <p className="text-sm font-semibold">Completa o teu perfil de transportador</p>
            <PerfilForm
              userId={userId}
              onSaved={(p) => {
                setPerfil(p);
                setAviso("Perfil guardado.");
              }}
            />
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Cargas disponíveis" value={String(disponiveis.length)} />
          <Stat label="Viagens ativas" value={String(ativas.length)} />
          <Stat label="Concluídas" value={String(minhas.length - ativas.length)} />
          <Stat label="Faturado" value={formatKz(ganhos)} />
        </div>

        {erro && <p className="mt-4 text-sm font-medium text-destructive">{erro}</p>}
        {aviso && <p className="mt-4 text-sm font-medium text-primary">{aviso}</p>}

        <div className="mt-8 flex gap-2">
          {(["disponiveis", "minhas"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground border border-border"
              }`}
            >
              {t === "disponiveis" ? "Cargas disponíveis" : "As minhas viagens"}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {loading && <p className="text-sm text-muted-foreground">A carregar…</p>}
          {!loading &&
            (tab === "disponiveis" ? disponiveis : minhas).map((carga) => (
              <CargaCard
                key={carga.id}
                carga={carga}
                minha={carga.motorista_id === userId}
                onAceitar={() => aceitar(carga)}
                onAvancar={() => avancar(carga)}
                onLocalizacao={() => enviarLocalizacao(carga)}
              />
            ))}
          {!loading && (tab === "disponiveis" ? disponiveis : minhas).length === 0 && (
            <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              {tab === "disponiveis"
                ? "Sem cargas disponíveis neste momento. Volta a verificar em breve."
                : "Ainda não aceitaste nenhuma carga."}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-extrabold tracking-tight">{value}</p>
    </div>
  );
}

function CargaCard({
  carga,
  minha,
  onAceitar,
  onAvancar,
  onLocalizacao,
}: {
  carga: Carga;
  minha: boolean;
  onAceitar: () => void;
  onAvancar: () => void;
  onLocalizacao: () => void;
}) {
  const proximo = PROXIMO_ESTADO[carga.estado];
  return (
    <article className="rounded-xl border border-border bg-background p-5">
      <div className="flex flex-wrap items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-extrabold tracking-tight">{carga.produto}</h2>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold">
              {ESTADO_LABEL[carga.estado]}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {carga.origem} → {carga.destino} · {(carga.quantidade_kg / 1000).toFixed(1)} t ·{" "}
            {formatData(carga.data_carga)}
            {carga.distancia_km ? ` · ${carga.distancia_km} km` : ""}
          </p>
          {carga.observacoes && (
            <p className="mt-2 text-sm text-muted-foreground">{carga.observacoes}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xl font-extrabold tracking-tight">{formatKz(carga.valor_kz)}</p>
          <p className="text-xs text-muted-foreground">
            50% à partida · {formatKz(Math.round(carga.valor_kz / 2))}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {!minha && carga.estado === "disponivel" && (
          <button onClick={onAceitar} className="btn-primary !px-4 !py-2 text-sm">
            Aceitar carga
          </button>
        )}
        {minha && proximo && (
          <button onClick={onAvancar} className="btn-primary !px-4 !py-2 text-sm">
            {proximo.acao}
          </button>
        )}
        {minha && (carga.estado === "em_transito" || carga.estado === "carregada") && (
          <button onClick={onLocalizacao} className="btn-outline !px-4 !py-2 text-sm">
            Enviar localização
          </button>
        )}
        {minha && carga.estado === "entregue" && (
          <span className="text-sm text-muted-foreground">
            À espera da confirmação da AgriLink para o pagamento final.
          </span>
        )}
      </div>
    </article>
  );
}

function PerfilForm({
  userId,
  onSaved,
}: {
  userId: string | null;
  onSaved: (p: MotoristaDetails) => void;
}) {
  const [form, setForm] = useState({
    nome_completo: "",
    telefone: "",
    matricula: "",
    tipo_veiculo: "",
    capacidade_kg: "",
    base_provincia: "",
  });
  const [erro, setErro] = useState<string | null>(null);

  async function guardar(e: React.FormEvent) {
    e.preventDefault();
    if (!userId) return;
    const { data, error } = await supabase
      .from("motorista_details")
      .upsert({
        user_id: userId,
        nome_completo: form.nome_completo,
        telefone: form.telefone,
        matricula: form.matricula || null,
        tipo_veiculo: form.tipo_veiculo || null,
        capacidade_kg: form.capacidade_kg ? Number(form.capacidade_kg) : null,
        base_provincia: form.base_provincia || null,
      })
      .select()
      .single();
    if (error) return setErro(error.message);
    if (data) onSaved(data);
  }

  const campos: [keyof typeof form, string][] = [
    ["nome_completo", "Nome completo"],
    ["telefone", "Telefone"],
    ["matricula", "Matrícula do veículo"],
    ["tipo_veiculo", "Tipo de veículo"],
    ["capacidade_kg", "Capacidade (kg)"],
    ["base_provincia", "Província base"],
  ];

  return (
    <form onSubmit={guardar} className="mt-4 grid gap-3 sm:grid-cols-2">
      {campos.map(([key, label]) => (
        <input
          key={key}
          required={key === "nome_completo" || key === "telefone"}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={label}
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
        />
      ))}
      {erro && <p className="text-sm text-destructive sm:col-span-2">{erro}</p>}
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary !px-5 !py-2.5 text-sm">
          Guardar perfil
        </button>
      </div>
    </form>
  );
}