
"use client";
import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  useEffect(() => {
    setLeads(JSON.parse(localStorage.getItem("durand_leads") || "[]"));
  }, []);
  return (
    <div className="min-h-screen bg-[#020208] text-white p-8">
      <h1 className="text-2xl font-black">📊 Leads - {leads.length} cadastros</h1>
      <p className="text-white/50 text-sm mt-1">Painel privado - acesse via /leads • Somente voce ve (localStorage)</p>
      <div className="mt-6 grid gap-3">
        {leads.map((l,i)=>(
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
            <div>
              <div className="font-bold">{l.name} - {l.email}</div>
              <div className="text-xs text-white/50">📱 {l.zap} • {new Date(l.date).toLocaleString('pt-BR')} • Trial ate {new Date(l.trialUntil).toLocaleDateString('pt-BR')}</div>
            </div>
            <a href={`https://wa.me/${l.zap.replace(/[^0-9]/g,'')}?text=Oi ${l.name}! Vi seu cadastro na Durand`} target="_blank" className="px-4 py-2 bg-[#25D366] rounded-xl text-xs font-bold">Zap</a>
          </div>
        ))}
        {leads.length===0 && <div className="text-center text-white/30 mt-20">Nenhum lead ainda</div>}
      </div>
      <a href="/" className="inline-block mt-8 px-4 py-2 bg-white/5 rounded-xl text-sm">← Voltar</a>
    </div>
  );
}
