"use client";
import Link from "next/link";

export default function VendasPage() {
  return (
    <div className="min-h-screen bg-[#020208] text-white relative overflow-x-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-50" style={{
        backgroundImage: `linear-gradient(rgba(0,209,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[rgba(2,2,8,0.85)] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3 font-extrabold text-[18px]">
            <div className="w-[46px] h-[46px] bg-white rounded-full grid place-items-center text-black font-black shadow-[0_0_25px_rgba(0,209,255,0.3)] border-2 border-cyan-500/30">DT</div>
            Durand Tech System
          </div>
          <div className="flex gap-3">
            <Link href="/" className="px-5 py-2.5 rounded-[10px] bg-white/5 border border-white/10 font-bold text-[13px]">← Voltar ao Site</Link>
            <a href="https://wa.me/5553997073648" target="_blank" className="px-5 py-2.5 rounded-[10px] bg-gradient-to-br from-[#00D1FF] to-[#0A84FF] font-bold text-[13px] shadow-[0_4px_20px_rgba(0,209,255,0.3)]">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-[140px] pb-[50px] text-center relative bg-[radial-gradient(600px_at_20%_20%,rgba(0,209,255,0.15),transparent),radial-gradient(800px_at_80%_80%,rgba(10,132,255,0.12),transparent),linear-gradient(180deg,#0a0a0f,#0f0f1a)]">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,209,255,0.12)] border border-cyan-500/20 text-[#7DD3FC] text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-5">💰 CENTRAL DE VENDAS • PIX durandtechsysten@gmail.com</div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-[52px] leading-[0.95] font-extrabold tracking-[-2px]">Vendas <span className="bg-gradient-to-br from-[#00D1FF] to-[#7DD3FC] bg-clip-text text-transparent">Durand Tech</span></h1>
          <p className="text-[#9ca3af] text-[16px] max-w-[650px] mx-auto mt-4">Escolha o que você precisa. Sites profissionais a partir de R$ 497 ou Sistemas completos como CondoManager PRO, Stark e PriceWar.</p>
          
          <div className="flex gap-3 justify-center mt-[30px] flex-wrap">
            <a href="#websites" className="px-7 py-3.5 rounded-[14px] font-bold text-[14px] flex items-center gap-2 bg-[linear-gradient(135deg,rgba(0,209,255,0.15),rgba(10,132,255,0.15))] border border-cyan-500/30 text-[#00D1FF] shadow-[0_0_30px_rgba(0,209,255,0.2)] hover:-translate-y-0.5 transition">🌐 WebSites <span className="opacity-60">→</span></a>
            <a href="#sistemas" className="px-7 py-3.5 rounded-[14px] font-bold text-[14px] flex items-center gap-2 bg-[linear-gradient(135deg,rgba(168,85,247,0.15),rgba(124,58,237,0.15))] border border-purple-500/30 text-[#a78bfa] shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-0.5 transition">⚙️ Sistemas <span className="opacity-60">→</span></a>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="max-w-[900px] mx-auto px-6 py-10 relative z-10 space-y-7">
        
        {/* CondoManager */}
        <div id="sistemas" className="bg-[#111113] border border-white/10 rounded-[20px] p-8 hover:border-cyan-500/25 hover:-translate-y-1 transition scroll-mt-[100px]">
          <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 grid place-items-center text-[26px]">🏢</div>
              <div><b className="text-[15px]">CondoManager PRO v2.6</b><br/><small className="text-[#7DD3FC]">R$97/mês • Trial 7 dias grátis</small></div>
            </div>
            <span className="text-[11px] font-bold text-[#10b981]">● SAAS • PRONTO</span>
          </div>
          <p className="text-[#cbd5e1] text-[14px]">Gestão completa de condomínios, boletos, inadimplentes, unidades. O mesmo que você usa no /app</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <Link href="/app" className="px-5 py-2.5 rounded-[10px] bg-gradient-to-br from-[#00D1FF] to-[#0A84FF] font-bold text-[13px]">🏢 Abrir App ↗</Link>
            <a href="https://wa.me/5553997073648?text=Quero%20CondoManager%20PRO" target="_blank" className="px-5 py-2.5 rounded-[10px] bg-white/5 border border-white/10 font-bold text-[13px]">💬 Comprar no WhatsApp</a>
          </div>
        </div>

        {/* Durand Cleaner */}
        <div className="bg-[#111113] border border-[rgba(0,240,255,0.3)] rounded-[20px] p-8 hover:-translate-y-1 transition">
          <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400 grid place-items-center text-[26px]">⚡</div>
              <div><b>Durand Cleaner v4.1 FIXED</b><br/><small className="text-[#00F0FF]">R$15,99 vitalício • Portable • Profissional</small></div>
            </div>
            <span className="text-[11px] font-bold text-[#22FF88]">● LINKADO • PORTÁVEL</span>
          </div>
          <p className="text-[#cbd5e1] text-[14px]">Otimizador profundo com interface Neon. Limpa temporários, cache Chrome/Discord/Spotify (libera até 15GB), Turbo Boot e Monitor RAM.</p>
        </div>

        {/* PriceWar */}
        <div className="bg-[#111113] border border-white/10 rounded-[20px] p-8 hover:-translate-y-1 transition">
          <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-amber-500/20 to-red-500/20 border border-amber-500/30 grid place-items-center text-[26px]">⚔️</div>
              <div><b>PriceWar - Monitoramento de Preços</b><br/><small className="text-[#fbbf24]">R$47/mês Starter • R$97/mês Pro • R$3500 Vitalício</small></div>
            </div>
            <span className="text-[11px] font-bold text-[#10b981]">● SAAS • LINKADO</span>
          </div>
          <p className="text-[#cbd5e1] text-[14px]">SaaS de monitoramento de preços da concorrência. Rastreia, compara e alerta quando seu preço não é o menor.</p>
        </div>

        {/* Maquininha */}
        <div className="bg-[#111113] border border-white/10 rounded-[20px] p-8 hover:-translate-y-1 transition">
          <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-emerald-500/20 to-[#00ff88]/20 border border-emerald-500/30 grid place-items-center text-[26px]">💳</div>
              <div><b>Maquininha Ton - Taxa 0,74%</b><br/><small className="text-[#10b981]">Sem aluguel • Pix na hora • Frete Grátis</small></div>
            </div>
            <span className="text-[11px] font-bold text-[#10b981]">● PARCERIA TON • LINKADO</span>
          </div>
          <p className="text-[#cbd5e1] text-[14px]">Parceria oficial Ton. Máquinas T1, T2+ e T3 Smart sem aluguel, débito 0,74% garantido, Pix na hora e frete grátis.</p>
        </div>

        {/* Stark */}
        <div className="bg-[#111113] border border-purple-500/20 rounded-[20px] p-8 hover:-translate-y-1 transition">
          <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-purple-500/30 grid place-items-center text-[26px]">🤖</div>
              <div><b>Stark Agendador - API 24/7</b><br/><small className="text-[#a78bfa]">R$97/mês • R$847/ano • R$1497 vitalício</small></div>
            </div>
            <span className="text-[11px] font-bold text-[#10b981]">● API ONLINE 24/7 • LINKADO</span>
          </div>
          <p className="text-[#cbd5e1] text-[14px]">API REST 24/7 para agendamento automático de Reels no Instagram. Upload, agenda e esquece.</p>
        </div>

        {/* CTA Final */}
        <div id="websites" className="bg-gradient-to-br from-[rgba(0,209,255,0.08)] to-[rgba(168,85,247,0.08)] border-2 border-cyan-500/30 rounded-[20px] p-7 flex flex-col md:flex-row justify-between gap-5 items-center shadow-[0_0_40px_rgba(0,240,255,0.15)] scroll-mt-[100px]">
          <div>
            <h3 className="text-[20px] font-extrabold">Não achou? Fala direto comigo</h3>
            <p className="text-[#9ca3af] text-[13px] mt-1">Atendimento direto Pelotas/RS • PIX durandtechsysten@gmail.com</p>
          </div>
          <a href="https://wa.me/5553997073648?text=Olá%20Otávio%20-%20vim%20pela%20página%20de%20Vendas" target="_blank" className="px-6 py-3 rounded-full bg-[#00FF88] text-black font-extrabold text-[14px] shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:scale-105 transition">💬 Falar no WhatsApp (53) 99707-3648 ↗</a>
        </div>

      </section>

      <footer className="py-10 border-t border-white/5 text-center relative z-10">
        <div className="flex justify-center gap-5 mb-4 flex-wrap text-[13px]">
          <Link href="/" className="text-white">🏠 Site Institucional</Link>
          <a href="/portfolio.html" className="text-[#9ca3af]">📁 Portfólio Completo</a>
          <a href="https://instagram.com/durandtechsysten" target="_blank" className="text-[#E1306C]">Instagram @durandtechsysten</a>
          <a href="https://wa.me/5553997073648" target="_blank" className="text-[#00FF88]">WhatsApp (53) 99707-3648</a>
        </div>
        <p className="text-[11px] text-[#6b7280]">© 2026 Durand Tech System - Otavio Renan Durand Rosa - PIX durandtechsysten@gmail.com - Pelotas/RS</p>
      </footer>
    </div>
  );
}
