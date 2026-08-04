// Durand Tec Systen - script.js - WhatsApp Form + Links normais
// (53) 99707-3648 - Otavio Renan Durand Rosa

document.addEventListener('DOMContentLoaded', () => {
  // Form -> WhatsApp
  const form = document.getElementById('waForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const servico = document.getElementById('servico').value;
      const detalhes = document.getElementById('detalhes').value.trim();

      if(!nome){
        alert('Informe seu nome');
        return;
      }

      let msg = `Ola Otavio, vim pelo site www.durandtechsysten.com.br%0A%0A`;
      msg += `*Nome:* ${encodeURIComponent(nome)}%0A`;
      if(telefone) msg += `*WhatsApp:* ${encodeURIComponent(telefone)}%0A`;
      if(servico) msg += `*Servico:* ${encodeURIComponent(servico)}%0A`;
      if(detalhes) msg += `*Detalhes:* ${encodeURIComponent(detalhes)}%0A`;
      msg += `%0AQuero orcamento - (53) 99707-3648`;

      window.open(`https://wa.me/5553997073648?text=${msg}`, '_blank');
    });
  }

  // Apenas links externos abrem em nova aba
  document.querySelectorAll('a[href^="https://"]').forEach(a => {
    try{
      if(!a.href.includes(location.host)){
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    }catch(e){}
  });

  console.log('DTS - 24 anos de hardware - carregado');
});
