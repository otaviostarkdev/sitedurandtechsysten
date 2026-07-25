
// Durand Tech Systen - Widget Chat Juliana v3 - Só Chat
const CONFIG = {
  API: "https://durand-bot-backend.onrender.com",
  WHATSAPP_JULIANA: "5548998290105",
  WHATSAPP_VENDAS: "5553997073648",
  SITE_URL: "https://durandtechsysten.com.br"
};

(function(){
  const style = document.createElement('style');
  style.innerHTML = `
    #durand-chat-btn { position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background: #111; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    #durand-chat-window { position: fixed; bottom: 90px; right: 20px; width: 350px; height: 450px; background: #fff; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); display: none; flex-direction: column; z-index: 9999; overflow: hidden; font-family: Arial, sans-serif; }
    #durand-chat-window.open { display: flex; }
    #durand-chat-header { background: #111; color: #fff; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
    #durand-chat-messages { flex: 1; padding: 15px; overflow-y: auto; background: #f5f5f5; }
    .msg { margin: 8px 0; padding: 10px 12px; border-radius: 10px; max-width: 80%; font-size: 14px; line-height: 1.4; }
    .msg.bot { background: #fff; border: 1px solid #ddd; }
    .msg.user { background: #111; color: #fff; margin-left: auto; }
    #durand-chat-input-area { padding: 10px; display: flex; gap: 8px; border-top: 1px solid #eee; background: #fff; }
    #durand-chat-input { flex: 1; border: 1px solid #ddd; border-radius: 20px; padding: 10px 15px; outline: none; }
    #durand-chat-send { background: #111; color: #fff; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; }
  `;
  document.head.appendChild(style);
  const btn = document.createElement('div');
  btn.id = 'durand-chat-btn';
  btn.innerHTML = '💬';
  const win = document.createElement('div');
  win.id = 'durand-chat-window';
  win.innerHTML = `
    <div id="durand-chat-header"><span><b>Durand Tech</b> • Juliana (IA)</span><span id="durand-chat-close" style="cursor:pointer">✕</span></div>
    <div id="durand-chat-messages"><div class="msg bot">Olá! Sou a Juliana, IA da Durand Tech Systen. Como posso te ajudar com seu projeto hoje? 🚀<br><br><a href="/orcamento.html" target="_blank" style="color:#4f46e5; font-weight:700">📋 Clique aqui para fazer um Orçamento</a></div></div>
    <div id="durand-chat-input-area"><input id="durand-chat-input" placeholder="Digite sua mensagem..." /><button id="durand-chat-send">➤</button></div>
  `;
  document.body.appendChild(btn);
  document.body.appendChild(win);
  const messages = win.querySelector('#durand-chat-messages');
  const input = win.querySelector('#durand-chat-input');
  const sendBtn = win.querySelector('#durand-chat-send');
  function addMsg(text, who){
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerHTML = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }
  async function sendMessage(){
    const text = input.value.trim();
    if(!text) return;
    addMsg(text, 'user');
    input.value = '';
    addMsg('Digitando...', 'bot');
    try {
      const res = await fetch(CONFIG.API + '/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message: text, page: window.location.href })
      });
      const data = await res.json();
      messages.lastChild.remove();
      let reply = data.reply || data.response || 'Desculpe, tive um problema. Me chama no WhatsApp?';
      // Se falar de orçamento, adiciona link que abre em nova aba
      if(text.toLowerCase().includes('orçamento') || text.toLowerCase().includes('orcamento')){
        reply += '<br><br><a href="/orcamento.html" target="_blank" style="display:inline-block; background:#4f46e5; color:#fff; padding:8px 14px; border-radius:8px; text-decoration:none; font-weight:700">📋 Abrir Formulário de Orçamento</a>';
      }
      addMsg(reply, 'bot');
      if(data.whatsapp_url){ window.open(data.whatsapp_url, '_blank'); }
      if(data.action === 'whatsapp_juliana'){ window.open(`https://wa.me/${CONFIG.WHATSAPP_JULIANA}?text=` + encodeURIComponent(text), '_blank'); }
      if(data.action === 'whatsapp_vendas'){ window.open(`https://wa.me/${CONFIG.WHATSAPP_VENDAS}?text=` + encodeURIComponent(text), '_blank'); }
    } catch(e){
      messages.lastChild.remove();
      addMsg('No momento estou offline! <br><br><a href="/orcamento.html" target="_blank" style="display:inline-block; background:#4f46e5; color:#fff; padding:8px 14px; border-radius:8px; text-decoration:none">📋 Fazer Orçamento</a>', 'bot');
    }
  }
  btn.onclick = ()=> win.classList.toggle('open');
  win.querySelector('#durand-chat-close').onclick = ()=> win.classList.remove('open');
  sendBtn.onclick = sendMessage;
  input.onkeypress = (e)=> { if(e.key === 'Enter') sendMessage(); };
})();
