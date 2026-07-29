
"use client";
import { useEffect, useState } from "react";

type User = { name:string, email:string, zap:string, trialUntil:number, plan:string, created:number };

export default function AppPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const check = () => {
      const curEmail = localStorage.getItem("durand_current");
      if (!curEmail) {
        window.location.href = "/login";
        return;
      }
      const users = JSON.parse(localStorage.getItem("durand_users") || "{}");
      const u = users[curEmail];
      if (!u) {
        window.location.href = "/login";
        return;
      }
      // Verifica trial
      const now = Date.now();
      if (now > u.trialUntil && u.plan === "TRIAL") {
        alert("Seu trial de 7 dias expirou! Renove via Zap (53) 99707-3648 - PIX: durandtechsysten@gmail.com");
        // nao desloga, deixa ver mas bloqueia
      }
      const diff = Math.ceil((u.trialUntil - now) / (1000*60*60*24));
      setDaysLeft(diff);
      setUser(u);
      setLoading(false);
    };
    check();
  }, []);

  const logout = () => {
    localStorage.removeItem("durand_current");
    window.location.href = "/login";
  };

  if (loading) return <div className="min-h-screen bg-[#020208] grid place-items-center text-white">Carregando Durand System...</div>;

  return (
    <div className="min-h-screen bg-[#020208] text-white">
      {/* Header App */}
      <header className="sticky top-0 z-50 bg-[rgba(10,10,15,0.9)] backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#0A84FF] grid place-items-center font-black">D</div>
          <div>
            <div className="font-bold text-sm">CondoManager PRO v2.6</div>
            <div className="text-[11px] text-white/50">Bem-vindo, {user?.name?.split(' ')[0]} • {user?.plan === 'TRIAL' ? `Trial: ${daysLeft} dias restantes` : 'ADMIN'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {user?.plan === 'TRIAL' && daysLeft <= 2 && (
            <a href="https://wa.me/5553997073648?text=Quero%20renovar%20CondoManager%20PRO" target="_blank" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-xs font-bold animate-pulse">Renovar agora</a>
          )}
          <button onClick={logout} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs">Sair</button>
        </div>
      </header>

      {/* Trial Banner */}
      {user?.plan === 'TRIAL' && (
        <div className="mx-6 mt-6 p-4 rounded-xl bg-[rgba(0,209,255,0.08)] border border-[rgba(0,209,255,0.15)] flex justify-between items-center">
          <div>
            <div className="font-bold text-sm text-[#7DD3FC]">🎉 Seu teste gratis esta ativo!</div>
            <div className="text-xs text-white/60 mt-1">Expira em {new Date(user.trialUntil).toLocaleDateString('pt-BR')} • {daysLeft} dias restantes • Aproveite todos os recursos</div>
          </div>
          <a href="https://wa.me/5553997073648?text=Quero%20assinar%20CondoManager%20PRO" target="_blank" className="px-5 py-2.5 rounded-xl bg-[#00D1FF] text-black font-bold text-xs">Assinar R$97/mes</a>
        </div>
      )}

      {/* Dashboard Mock */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-4">
        <div className="col-span-3">
          <h1 className="text-2xl font-black">Dashboard CondoManager</h1>
          <p className="text-white/50 text-sm mt-1">Usuario: {user?.email} • WhatsApp: {user?.zap}</p>
        </div>

        {[
          { title: "Unidades", value: "48", sub: "12 blocos" },
          { title: "Inadimplentes", value: "3", sub: "R$ 2.450,00" },
          { title: "Boletos este mes", value: "42", sub: "R$ 18.900,00" },
        ].map((c,i)=>(
          <div key={i} className="p-5 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-white/5">
            <div className="text-white/50 text-xs">{c.title}</div>
            <div className="text-3xl font-black mt-2">{c.value}</div>
            <div className="text-xs text-white/40 mt-1">{c.sub}</div>
          </div>
        ))}

        <div className="col-span-3 p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-white/5 mt-4">
          <h3 className="font-bold">🚀 Proximos passos</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc list-inside">
            <li>Essa e a area protegida - so quem tem login/trial ve</li>
            <li>Quando o trial expira, o usuario ainda ve mas com aviso pra renovar</li>
            <li>Voce pode ver todos os leads em <code className="bg-white/10 px-1.5 py-0.5 rounded">/leads</code> (vou te mandar)</li>
            <li>Integracao com teu backend real: troca localStorage por chamada API</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="https://wa.me/5553997073648" target="_blank" className="px-4 py-2 bg-[#25D366] rounded-xl text-sm font-bold">Falar com suporte</a>
            <a href="/" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm">Voltar ao site</a>
          </div>
        </div>
      </main>
    </div>
  );
}
