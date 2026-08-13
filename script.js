const CONFIG = { // LINKS AFILIADOS JULIANA - NAO ALTERAR REFERER

  julianaWhatsApp: '5548998290105',
  affiliateLinks: {
    'T1': 'https://ton.com.br/checkout/cart/?productId=TONMEGA_TIER_D150&referrer=8F39C28B-C5E4-415C-94D4-8F505EC72DDB&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor',
    'T2+': 'https://ton.com.br/checkout/cart/?productId=TONMEGA_TIER_D195&referrer=8F39C28B-C5E4-415C-94D4-8F505EC72DDB&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor',
    'T2': 'https://ton.com.br/checkout/cart/?productId=TONMEGA_TIER_D195&referrer=8F39C28B-C5E4-415C-94D4-8F505EC72DDB&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor',
    'T3 Smart': 'https://ton.com.br/checkout/cart/?productId=TONMEGA_TIER_SMART_POS&referrer=8F39C28B-C5E4-415C-94D4-8F505EC72DDB&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor',
    'T3': 'https://ton.com.br/checkout/cart/?productId=TONMEGA_TIER_SMART_POS&referrer=8F39C28B-C5E4-415C-94D4-8F505EC72DDB&userAnticipation=0&userTag=tonmega_tier&utm_medium=invite_share&utm_source=revendedor'
  },
  googleSheetsWebhook: 'https://script.google.com/macros/s/AKfycbzxo98JiLBAsXI94IAx5SpHktMUsGzVdCa0G7TaThifzfQ4myaeRs2SCFvzIeHcgbgbpfuA/exec'
};

let stage = 'inicio';
let lead = { categoria:'', nome:'', cidade:'', modelo:'', whatsapp:'', origem: window.location.href, data: new Date().toLocaleString('pt-BR') };

function sanitize(str){ 
  let d=document.createElement('div'); d.textContent=str; return d.innerHTML; 
}

function toggleChat(){
  const p=document.getElementById('chatPanel');
  if(!p) return;
  p.classList.toggle('open');
  const b=document.getElementById('botBubble');
  if(b) b.style.display='none';
  if(p.classList.contains('open') && document.getElementById('chatMessages').children.length===0){
    setTimeout(()=> startFlow(), 300);
  }
}

function addBotMsg(t, delay=0){
  setTimeout(()=>{
    const m=document.getElementById('chatMessages');
    if(!m) return;
    const d=document.createElement('div'); d.className='msg bot'; d.innerHTML=t;
    m.appendChild(d); m.scrollTop=m.scrollHeight;
  }, delay);
}
function addUserMsg(t){
  const m=document.getElementById('chatMessages');
  if(!m) return;
  const d=document.createElement('div'); d.className='msg user'; d.textContent=t;
  m.appendChild(d); m.scrollTop=m.scrollHeight;
}
function setQuickButtons(btns){
  const g=document.getElementById('qGrid'); if(!g) return; g.innerHTML='';
  btns.forEach(b=>{
    const el=document.createElement('button'); el.className='chat-qbtn'+(b.primary?' primary':''); el.textContent=b.label; el.onclick=()=>{ sendQuick(b.value||b.label) };
    g.appendChild(el);
  });
}
function updateProgress(p){ const el=document.getElementById('progressBar'); if(el) el.style.width=p+'%'; }

function startFlow(){
  updateProgress(15);
  addBotMsg('Oi! Eu sou a <b>Juliana Oliveira</b> 💚<br>Sua representante oficial Ton em São José, SC.<br><br>Vi que você quer a taxa <b>0,74% no débito</b> com frete grátis. Me conta, você é?');
  setQuickButtons([
    {label:'👏 Sou comerciante', value:'Sou comerciante'},
    {label:'🚀 Sou autônomo', value:'Sou autônomo'},
    {label:'🏢 Sou empresário', value:'Sou empresário'},
    {label:'✍️ Digite seu nome', value:'Digite seu nome'}
  ]);
  stage='categoria';
}
function sendQuick(t){ const inp=document.getElementById('chatInput'); if(inp) inp.value=t; sendChat(); }
function askCity(){
  addBotMsg('Legal, <b>'+sanitize(lead.nome)+'</b>! Você é de qual cidade? 📍',400);
  setTimeout(()=>{
    setQuickButtons([
      {label:'📍 São José', value:'São José'},
      {label:'📍 Florianópolis', value:'Florianópolis'},
      {label:'📍 Palhoça', value:'Palhoça'},
      {label:'📍 Biguaçu', value:'Biguaçu'},
      {label:'🌎 Outra cidade', value:'Outra cidade'}
    ]);
  },500);
  stage='cidade';
}
function askModel(){
  addBotMsg('Perfeito! Atendo <b>'+sanitize(lead.cidade)+'</b> com frete grátis e ativação na hora. ✅<br><br><b>Qual modelo você quer garantir com 0,74% hoje?</b><br><small>Todos sem aluguel nunca!</small>',400);
  setTimeout(()=>{
    setQuickButtons([
      {label:'💳 T1 - Essencial', value:'T1'},
      {label:'🔥 T2+ - Mais Vendida', value:'T2+', primary:true},
      {label:'🤖 T3 Smart Android', value:'T3 Smart'}
    ]);
  },600);
  stage='modelo';
}

function sendChat(){
  const input=document.getElementById('chatInput');
  if(!input) return;
  const txt=input.value.trim(); if(!txt) return;
  const low = txt.toLowerCase();
  const qGrid = document.getElementById('qGrid');
  if(qGrid) qGrid.innerHTML='';

  // Fluxos especiais
  if(low.includes('já garanti') || low.includes('ja garanti') || low.includes('garanti minha ton')){
    addUserMsg(txt); input.value='';
    handleJaGaranti();
    return;
  }
  if(low.includes('enviar comprovante')){
    addUserMsg(txt); input.value='';
    const inp = document.getElementById('comprovanteInput');
    if(inp) inp.click();
    return;
  }
  if(low.includes('falar com juliana')){
    addUserMsg(txt); input.value='';
    window.open('https://wa.me/'+CONFIG.julianaWhatsApp+'?text=Oi Juliana, sou '+encodeURIComponent(lead.nome||'cliente')+' do site, já garanti minha '+encodeURIComponent(lead.modelo||'Ton')+' e quero confirmar','_blank');
    return;
  }
  if(stage==='comprovante'){
    addUserMsg(txt); input.value='';
    lead.comprovante = txt.substring(0,200);
    lead.status = 'COMPROVANTE_TEXTO_ENVIADO';
    addBotMsg('✅ <b>Recebido, '+sanitize(lead.nome)+'!</b> Anotei seu comprovante:<br><i>"'+sanitize(lead.comprovante)+'"</i><br><br>Já encaminhei pra Juliana no WhatsApp com todos os seus dados. Ela confirma em até 30 min! 💚',600);
    salvarComprovanteNoSheets();
    notificarJulianaComprovante();
    setQuickButtons([{label:'✅ Obrigado, Juliana!'}]);
    return;
  }

  // FLUXO PRINCIPAL EDITADO CONFORME PEDIDO
  addUserMsg(txt);
  input.value='';

  if(stage==='categoria'){
    // Se clicou em "Digite seu nome"
    if(low.includes('digite seu nome')){
      addBotMsg('Pode digitar seu nome. 👇',400);
      stage='nome';
      setQuickButtons([]);
      return;
    }
    // Se escolheu categoria
    lead.categoria = txt;
    addBotMsg('Pode digitar seu nome. 👇',400);
    stage='nome';
    setQuickButtons([]);
    return;
  }

  if(stage==='nome'){
    lead.nome = txt;
    updateProgress(40);
    askCity();
    return;
  }

  if(stage==='cidade'){
    if(low.includes('outra cidade')){
      addBotMsg('Me diz de qual cidade e estado você é? Ex: Pelotas - RS 📍',400);
      stage='cidade_custom';
      setQuickButtons([]);
      return;
    }
    lead.cidade = txt;
    updateProgress(65);
    askModel();
    return;
  }

  if(stage==='cidade_custom'){
    lead.cidade = txt;
    updateProgress(65);
    addBotMsg('Que ótimo! Atendo em <b>todo o Brasil</b> 🚚✅<br>Inclusive em <b>'+sanitize(txt)+'</b> com <b>frete grátis</b> e ativação na hora!',600);
    setTimeout(()=> askModel(), 800);
    return;
  }

  if(stage==='modelo'){
    lead.modelo = txt.includes('T3') ? 'T3 Smart' : (txt.includes('T1') ? 'T1' : 'T2+');
    updateProgress(80);
    addBotMsg('Excelente escolha, <b>'+sanitize(lead.nome)+'</b>! A <b>'+sanitize(lead.modelo)+'</b> com <b>0,74%</b> é sucesso aqui em <b>'+sanitize(lead.cidade)+'</b>. Qual seu WhatsApp com DDD?',400);
    stage='whatsapp';
    return;
  }

  if(stage==='whatsapp'){
    let nums = txt.replace(/[^0-9]/g,'');
    if(nums.length < 10){
      addBotMsg('Ops, número incompleto. Me manda com DDD: ex (48) 99829-0105');
      return;
    }
    lead.whatsapp = nums;
    updateProgress(90);
    addBotMsg('Fechado, '+sanitize(lead.nome)+'! Gerando seu link exclusivo da '+sanitize(lead.modelo)+'... ⏳',300);
    setTimeout(()=> fecharVenda(), 1300);
    stage='final';
    return;
  }
}

async function salvarNoSheets(){
  const payload = {
    nome: lead.nome || '',
    negocio: lead.categoria || '',
    volumeMensal: lead.cidade || '',
    modeloEscolhido: lead.modelo || '',
    whatsapp: lead.whatsapp || '',
    linkAfiliadoClicado: CONFIG.affiliateLinks[lead.modelo] || CONFIG.affiliateLinks['T2+'],
    dataCliente: lead.data || new Date().toLocaleString('pt-BR'),
    origem: lead.origem + ' | Cidade: ' + (lead.cidade||''),
    cidade: lead.cidade,
    evento: 'LEAD_VENDA_TON',
    link: CONFIG.affiliateLinks[lead.modelo] || ''
  };
  lead.link = payload.linkAfiliadoClicado;
  try{
    await fetch(CONFIG.googleSheetsWebhook, {
      method:'POST', mode:'no-cors', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
  }catch(e){}
}

function notificarJuliana(){
  const msg = '🚀 *NOVA VENDA TON - SITE*%0A%0A👤 *Nome:* '+encodeURIComponent(lead.nome)+'%0A🏷️ *Categoria:* '+encodeURIComponent(lead.categoria)+'%0A📍 *Cidade:* '+encodeURIComponent(lead.cidade)+'%0A📱 *Modelo:* '+encodeURIComponent(lead.modelo)+'%0A📞 *WhatsApp Cliente:* '+encodeURIComponent(lead.whatsapp)+'%0A🔗 *Link:* '+encodeURIComponent(CONFIG.affiliateLinks[lead.modelo])+'%0A🕒 *Data:* '+encodeURIComponent(lead.data)+'%0A🌐 *Origem:* '+encodeURIComponent(lead.origem);
  window.open('https://wa.me/'+CONFIG.julianaWhatsApp+'?text='+msg, '_blank');
}
function showCheckoutButton(){
  const link = CONFIG.affiliateLinks[lead.modelo] || CONFIG.affiliateLinks['T2+'];
  // Salva link da Juliana no lead
  lead.linkAfiliado = link;
  console.log('Abrindo checkout afiliado Juliana:', link);
  
  addBotMsg('✅ <b>LINK LIBERADO - TAXA 0,74% GARANTIDA!</b><br><br>👉 <a href="'+link+'" target="_blank" id="linkCheckoutJuliana" style="background:#00ff88;color:#000;padding:12px 20px;border-radius:24px;text-decoration:none;font-weight:900;display:inline-block;text-align:center;width:100%">GARANTIR MINHA '+sanitize(lead.modelo.toUpperCase())+' AGORA →</a><br><br><small>Checkout oficial Ton • Frete grátis • Suporte Juliana (48) 99829-0105<br>Link afiliado: Juliana Oliveira</small>',400);
  
  // ABRE CHECKOUT AFILIADO DA JULIANA AUTOMATICAMENTE - 3 métodos pra garantir
  setTimeout(()=> {
    // Método 1: window.open direto
    const win = window.open(link, '_blank');
    // Método 2: se bloqueou, clica no link via JS
    if(!win || win.closed || typeof win.closed == 'undefined'){
      const a = document.getElementById('linkCheckoutJuliana');
      if(a){ a.click(); }
    }
  }, 1200);
  
  setTimeout(()=> {
    addBotMsg('👆 <b>Cliquei no botão acima</b> pra te levar pro checkout oficial da Ton com meu link de representante. Se não abriu automático, clica no botão verde aí em cima! 💚',1800);
  }, 2000);
}
async function fecharVenda(){
  updateProgress(100);
  await salvarNoSheets();
  addBotMsg('<b>'+sanitize(lead.nome)+'</b>, seu link da <b>'+sanitize(lead.modelo)+'</b> com <b>0,74%</b> está pronto! 🎉',400);
  showCheckoutButton();
  setTimeout(()=> {
    addBotMsg('Já avisei a Juliana. Se precisar, me chama direto: <b>(48) 99829-0105</b> 💚',1500);
    notificarJuliana();
  }, 2200);
  setQuickButtons([{label:'✅ Já garanti minha Ton'}, {label:'❓ Falar com Juliana'}]);
}

function handleJaGaranti(){
  addBotMsg('🎉 <b>Parabéns pela compra!</b> Você fez uma ótima escolha!<br><br>📸 <b>Me envia aqui o comprovante do pagamento Pix</b> (foto ou código) pra eu liberar sua ativação com <b>prioridade máxima</b> e te acompanhar até chegar! 🚀<br><br><small>Pode arrastar a imagem aqui ou clicar no clipe 📎</small>',600);
  setQuickButtons([
    {label:'📎 Enviar comprovante', value:'enviar_comprovante'},
    {label:'📞 Falar com Juliana', value:'falar_juliana'}
  ]);
  if(!document.getElementById('comprovanteInput')){
    const fileInput = document.createElement('input');
    fileInput.type='file'; fileInput.id='comprovanteInput'; fileInput.accept='image/*,.pdf'; fileInput.style.display='none';
    fileInput.onchange=(e)=>{
      const file = e.target.files[0];
      if(file){
        addUserMsg('📎 Comprovante enviado: '+file.name);
        lead.comprovante = file.name + ' (' + (file.size/1024).toFixed(0)+'KB)';
        lead.status = 'COMPROVANTE_ENVIADO';
        updateProgress(100);
        addBotMsg('✅ <b>Comprovante recebido, '+sanitize(lead.nome)+'!</b><br><br>Já encaminhei tudo pra <b>Juliana</b> no WhatsApp <b>(48) 99829-0105</b>. Ela vai confirmar seu pagamento e ativar sua maquininha com taxa <b>0,74%</b> garantida em até 30 minutos! 💚<br><br>Seu código de ativação chega no seu WhatsApp.',800);
        salvarComprovanteNoSheets();
        notificarJulianaComprovante();
      }
    };
    document.body.appendChild(fileInput);
  }
  stage='comprovante';
}
function salvarComprovanteNoSheets(){
  const payload = {
    nome: lead.nome || '',
    negocio: lead.categoria || '',
    volumeMensal: lead.cidade || '',
    modeloEscolhido: lead.modelo || '',
    whatsapp: lead.whatsapp || '',
    linkAfiliadoClicado: lead.link || CONFIG.affiliateLinks[lead.modelo] || '',
    dataCliente: lead.data || '',
    origem: 'COMPROVANTE: ' + (lead.comprovante||'') + ' | ' + lead.origem,
    evento: 'COMPROVANTE_PIX_ENVIADO',
    comprovante: lead.comprovante || '',
    status: lead.status || ''
  };
  fetch(CONFIG.googleSheetsWebhook, {method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
}

function notificarJulianaComprovante(){
  const msg = '🧾 *COMPROVANTE PIX RECEBIDO - SITE TON*%0A%0A👤 *Cliente:* '+encodeURIComponent(lead.nome)+'%0A🏷️ *Categoria:* '+encodeURIComponent(lead.categoria)+'%0A📍 *Cidade:* '+encodeURIComponent(lead.cidade)+'%0A📱 *Modelo:* '+encodeURIComponent(lead.modelo)+'%0A📞 *WhatsApp:* '+encodeURIComponent(lead.whatsapp)+'%0A🧾 *Comprovante:* '+encodeURIComponent(lead.comprovante||'Texto enviado')+'%0A🔗 *Link:* '+encodeURIComponent(lead.link)+'%0A🕒 *Data:* '+encodeURIComponent(lead.data)+'%0A%0A_Cliente enviou comprovante Pix! Confirma o pagamento e ativa com prioridade!_';
  window.open('https://wa.me/'+CONFIG.julianaWhatsApp+'?text='+msg, '_blank');
}
function handleModelClick(modelo){
  window.open(CONFIG.affiliateLinks[modelo],'_blank');
  const clickLead = {categoria:'Clique Foto Juliana', nome:(lead.nome||'Visitante'), cidade:(lead.cidade||'Nao informado'), modelo:modelo, whatsapp:(lead.whatsapp||'Nao informado'), origem:window.location.href+' #foto-'+modelo, data:new Date().toLocaleString('pt-BR'), link:CONFIG.affiliateLinks[modelo], evento:'CLICK_FOTO_JULIANA_'+modelo};
  fetch(CONFIG.googleSheetsWebhook,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(clickLead)});
}

setTimeout(()=>{ 
  const b=document.getElementById('botBubble'); 
  if(b && !document.getElementById('chatPanel').classList.contains('open')){ 
    b.style.display='block'; 
    b.onclick=()=>toggleChat(); 
  } 
},2500);
setTimeout(()=>{ const b=document.getElementById('botBubble'); if(b) b.style.display='none'; },9500);