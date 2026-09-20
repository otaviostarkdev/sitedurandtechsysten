
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
      header.classList.remove('bg-transparent', 'border-transparent');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('bg-transparent', 'border-transparent');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('Durand Tech Systen - Sobre loaded');
});
