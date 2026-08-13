
function enviar(){
  const nome=document.getElementById('nome').value;
  const zap=document.getElementById('zap').value;
  const msg=`Olá DurandTechSysten, sou ${nome}, meu zap é ${zap}. Quero um orçamento!`;
  window.open(`https://wa.me/5553999999999?text=${encodeURIComponent(msg)}`,'_blank');
}
