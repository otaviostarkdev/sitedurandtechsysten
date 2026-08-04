// Durand Tech System - script.js 
// WhatsApp (53) 99707-3648

document.addEventListener('DOMContentLoaded', () => {
  // Apenas links externos abrem em nova aba
  document.querySelectorAll('a[href^="https://"]').forEach(a => {
    if (!a.href.includes(location.host)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  });
  console.log('Durand Tech System carregado');
});
