const header = document.getElementById('header');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const demoButton = document.getElementById('demoButton');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.textContent = '☰';
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-head,.category-grid article,.about-visual,.about-copy,.product-grid article,.cta').forEach(element => {
  element.classList.add('reveal');
  observer.observe(element);
});

demoButton.addEventListener('click', () => {
  alert('Este botão é demonstrativo. Em um projeto real, ele pode abrir o WhatsApp da empresa com uma mensagem pronta.');
});
