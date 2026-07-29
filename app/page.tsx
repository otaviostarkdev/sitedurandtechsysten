
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

      {/* MODAL RENOVAÇÃO - quando expira ou faltam 2 dias */}
      {(daysLeft <= 2 || daysLeft <=0) && user?.plan === 'TRIAL' && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md grid place-items-center p-5">
          <div className="w-full max-w-[440px] p-7 bg-[#12121a] border border-white/10 rounded-[24px] text-center">
            <div className="text-4xl mb-3">{daysLeft <=0 ? '🔒' : '⏰'}</div>
            <h2 className="text-xl font-black">{daysLeft <=0 ? 'Seu trial expirou!' : `Faltam ${daysLeft} dias`}</h2>
            <p className="text-sm text-white/60 mt-2">Para continuar usando o CondoManager PRO sem interrupção:</p>
            
            <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 text-left">
              <div className="text-xs text-white/50">PIX (chave e-mail):</div>
              <div className="font-mono font-bold text-sm mt-1 flex justify-between items-center">
                <span>durandtechsysten@gmail.com</span>
                <button onClick={()=>{navigator.clipboard.writeText('durandtechsysten@gmail.com'); alert('PIX copiado!')}} className="px-3 py-1 rounded-lg bg-[#00D1FF] text-black text-xs font-bold">Copiar</button>
              </div>
              <div className="mt-3 text-xs">Valor: <b className="text-white text-sm">R$ 97,00/mês</b></div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[rgba(0,209,255,0.08)] border border-[rgba(0,209,255,0.15)] text-left">
              <div className="text-xs font-bold text-[#7DD3FC]">📎 Após pagar, envie o comprovante:</div>
              <div className="text-[12px] text-white/70 mt-1 leading-relaxed">
                1️⃣ WhatsApp: <b>(53) 99707-3648</b><br/>
                2️⃣ E-mail: <b>durandtechsysten@gmail.com</b><br/>
                <span className="text-white/40">Assunto: Comprovante + seu e-mail de cadastro</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={`https://wa.me/5553997073648?text=${encodeURIComponent(`Olá! Paguei o CondoManager PRO - ${user?.email} - Segue comprovante:`)}`} target="_blank" className="py-3 rounded-xl bg-[#25D366] font-bold text-sm">📱 Enviar no WhatsApp</a>
              <a href={`mailto:durandtechsysten@gmail.com?subject=Comprovante CondoManager PRO - ${user?.email}&body=Olá, segue comprovante de pagamento PIX R$97 - Email cadastro: ${user?.email} - Nome: ${user?.name}`} className="py-3 rounded-xl bg-white/10 border border-white/10 font-bold text-sm">✉️ Enviar por E-mail</a>
            </div>

            <button onClick={()=>document.querySelector('.fixed.inset-0')?.remove()} className="mt-4 text-xs text-white/30 underline">Continuar usando por enquanto</button>
            <p className="mt-4 text-[10px] text-white/20">Liberação em até 2h após envio • Suporte (53) 99707-3648</p>
          </div>
        </div>
      )}

    </div>
  );
}
