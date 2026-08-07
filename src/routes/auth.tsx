import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import logo from "@/assets/agrilink-logo.asset.json";

const TITLE = "Entrar na plataforma Carrega | AgriLink";
const DESCRIPTION =
  "Acede à plataforma Carrega: vê cargas disponíveis, aceita fretes e acompanha as tuas viagens em Angola.";

export const Route = createFileRoute("/auth")({
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
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [modo, setModo] = useState<"entrar" | "registar">("entrar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/painel", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate({ to: "/painel", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setMsg(null);
    setLoading(true);
    try {
      if (modo === "registar") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/painel",
            data: { nome_completo: nome },
          },
        });
        if (error) throw error;
        setMsg("Conta criada. Confirma o teu email para entrares na plataforma.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível continuar.");
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setErro(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setErro("Não foi possível entrar com Google.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/painel", replace: true });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <img src={logo.url} alt="AgriLink" className="h-9 w-auto" />
          <span className="text-xl font-extrabold tracking-tight">Carrega</span>
        </Link>

        <div className="rounded-2xl border border-border bg-background p-7 shadow-sm">
          <h1 className="text-2xl font-extrabold tracking-tight">
            {modo === "entrar" ? "Entrar na plataforma" : "Criar conta de motorista"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Área exclusiva para motoristas e transportadores parceiros da AgriLink.
          </p>

          <button type="button" onClick={onGoogle} className="btn-outline mt-6 w-full justify-center">
            Continuar com Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> ou <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            {modo === "registar" && (
              <input
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome completo"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
              />
            )}
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
            />
            <input
              required
              type="password"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Palavra-passe"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
            />
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
              {loading ? "A processar…" : modo === "entrar" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          {erro && <p className="mt-4 text-sm font-medium text-destructive">{erro}</p>}
          {msg && <p className="mt-4 text-sm font-medium text-primary">{msg}</p>}

          <button
            type="button"
            onClick={() => setModo(modo === "entrar" ? "registar" : "entrar")}
            className="mt-5 w-full text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {modo === "entrar"
              ? "Ainda não tens conta? Regista-te"
              : "Já tens conta? Entrar"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="font-medium hover:text-primary">
            ← Voltar ao site
          </Link>
        </p>
      </div>
    </main>
  );
}