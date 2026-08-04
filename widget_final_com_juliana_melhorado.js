
// widget_final_com_juliana.js - Durand Bot MELHORADO - Stark + 1-6 menu
// Resgatado do deploy 72877bc / bd58cb7
(function(){
  const WHATSAPP = '5553997073648';
  const PIX = 'durandtechsysten@gmail.com';
  const SITE = 'https://www.durandtechsysten.com.br';
  
  const style = document.createElement('style');
  style.textContent = `
  #durand-bubble{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:linear-gradient(135deg,#4f46e5,#7c3aed);border-radius:50%;display:grid;place-items:center;cursor:pointer;z-index:9998;box-shadow:0 8px 30px rgba(79,70,229,0.4);font-size:28px;transition:.2s}
  #durand-bubble:hover{transform:scale(1.05)}
  #durand-chat{position:fixed;bottom:90px;right:20px;width:360px;max-width:92vw;height:480px;background:#fff;border-radius:16px;box-shadow:0 20px 80px rgba(0,0,0,0.3);z-index:9999;display:none;flex-direction:column;overflow:hidden;font-family:Inter,sans-serif;border:1px solid #e2e8f0}
  #durand-header{background:#0f172a;color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center}
  #durand-header b{font-size:14px}
  #durand-header small{color:#10b981;font-size:11px}
  #durand-close{background:none;border:none;color:#fff;font-size:18px;cursor:pointer}
  #durand-msgs{flex:1;overflow-y:auto;padding:12px;background:#f8fafc;display:flex;flex-direction:column;gap:8px}
  .msg-bot{background:#fff;border:1px solid #e2e8f0;border-radius:12px 12px 12px 2px;padding:10px 12px;font-size:13px;color:#0f172a;max-width:85%;align-self:flex-start;line-height:1.4}
  .msg-user{background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border-radius:12px 12px 2px 12px;padding:10px 12px;font-size:13px;max-width:85%;align-self:flex-end}
  #durand-input{border-top:1px solid #e2e8f0;padding:8px;display:flex;gap:6px;background:#fff}
  #durand-input input{flex:1;border:1px solid #e2e8f0;border-radius:20px;padding:8px 12px;font-size:13px;outline:none}
  #durand-input button{width:36px;height:36px;border:none;background:#4f46e5;color:#fff;border-radius:50%;cursor:pointer;font-weight:800}
  `;
  document.head.appendChild(style);

  const chat = document.createElement('div');
  chat.id='durand-chat';
  chat.innerHTML=`
    <div id="durand-header"><div><b>Durand Bot</b><br><small>● ONLINE 24/7</small></div><button id="durand-close">✕</button></div>
    <div id="durand-msgs"></div>
    <div id="durand-input"><input id="durand-in" placeholder="Digite..." /><button id="durand-send">➤</button></div>
  `;
  const bubble = document.createElement('div');
  bubble.id='durand-bubble'; bubble.textContent='💬';
  document.body.appendChild(bubble); document.body.appendChild(chat);

  const msgs = document.getElementById('durand-msgs');
  function addBot(t){ const d=document.createElement('div'); d.className='msg-bot'; d.innerHTML=t; msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; }
  function addUser(t){ const d=document.createElement('div'); d.className='msg-user'; d.textContent=t; msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; }

  function menuInicial(){
    addBot(`Olá! Eu sou o <b>Stark</b> 🤖 da Durand Tech!<br>Tô <b>ONLINE 24/7</b> 🚀<br><br>👉 Digite:<br>1️⃣ <b>ORÇAMENTO</b> (nova aba)<br>2️⃣ Sites<br>3️⃣ CondoManager<br>4️⃣ Stark<br>5️⃣ PIX<br>6️⃣ WhatsApp`);
  }

  function responder(t){
    const x=t.toLowerCase();
    if(x==='1' || x.includes('orçamento')){
      addBot(`📋 <b>Orçamento em nova aba</b> abriu!<br><a href="${SITE}/#orcamento" target="_blank" rel="noopener">Clique aqui se não abriu ↗</a>`);
      window.open(SITE+'/#orcamento','_blank');
    } else if(x==='2' || x.includes('site')){
      addBot(`💻 <b>Sites modernos</b> a partir de R$ 497<br>Responsivo, SEO, rápido. Quer ver portfólio?<br><a href="${SITE}/portfolio.html" target="_blank">📁 Portfólio ↗</a>`);
    } else if(x==='3' || x.includes('condo')){
      addBot(`🏢 <b>CondoManager PRO v2.6</b><br>• R$135/mês<br>• R$847/ano<br>• R$3500 vitalício<br>PIX ${PIX}<br><a href="${SITE}" target="_blank">Ver Demo ↗</a>`);
    } else if(x==='4' || x.includes('stark')){
      addBot(`🤖 <b>Stark Agendador API</b><br>• R$97/mês • R$847/ano • R$1497 vitalício<br>API REST 24/7 + Swagger<br><a href="${SITE}/stark.html" target="_blank">Página Stark ↗</a><br><a href="https://stark-agendador.onrender.com/docs" target="_blank">Docs API ↗</a>`);
    } else if(x==='5' || x.includes('pix')){
      addBot(`💳 <b>PIX</b>: ${PIX}<br>CNPJ Otavio Renan Durand Rosa<br>Envie comprovante no WhatsApp`);
    } else if(x==='6' || x.includes('whats')){
      addBot(`💬 WhatsApp: (53) 99707-3648<br><a href="https://wa.me/${WHATSAPP}" target="_blank">Abrir WhatsApp ↗</a>`);
    } else if(x.includes('pricewar') || x.includes('price')){
      addBot(`⚔️ <b>PriceWar SaaS</b><br>R$47/m Starter • R$97/m Pro • R$197/m Agency<br><a href="${SITE}/pricewar.html" target="_blank">Ver PriceWar ↗</a>`);
    } else {
      addBot(`Não entendi 😅<br>Digite:<br>1️⃣ ORÇAMENTO (nova aba)<br>2️⃣ Sites<br>3️⃣ CondoManager<br>4️⃣ Stark<br>5️⃣ PIX<br>6️⃣ WhatsApp`);
    }
  }

  bubble.onclick=()=>{ chat.style.display= chat.style.display==='flex' ? 'none':'flex'; if(chat.style.display==='flex' && msgs.children.length===0) menuInicial(); };
  document.getElementById('durand-close').onclick=()=> chat.style.display='none';
  document.getElementById('durand-send').onclick=()=>{
    const inp=document.getElementById('durand-in'); const t=inp.value.trim(); if(!t) return;
    addUser(t); inp.value=''; setTimeout(()=>responder(t),400);
  };
  document.getElementById('durand-in').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('durand-send').click(); });

  setTimeout(()=>{ if(chat.style.display==='none') bubble.style.display='grid'; },1500);
})();
