const header = document.getElementById('header');
const glow = document.querySelector('.cursor-glow');
const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

document.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menu.classList.toggle('open', open);
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

const contactEmail = document.querySelector('.contact-email');

if (contactEmail) {
  contactEmail.innerHTML = 'GAR STUDIO <span>•</span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.garstudio@gmail.com" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">contato.garstudio@gmail.com</a>';
}

const quoteModal = document.getElementById("quoteModal");

const quoteClose = document.getElementById("quoteClose");

document.querySelectorAll(".nav-cta,.button.ghost,.button.primary.large")
.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

quoteModal.classList.add("active");

});

});

quoteClose.onclick=()=>{

quoteModal.classList.remove("active");

}

document.querySelector(".quote-overlay").onclick=()=>{

quoteModal.classList.remove("active");

}

document.getElementById("quoteForm")
.addEventListener("submit",function(e){

e.preventDefault();

const nome=document.getElementById("clientName").value;

const empresa=document.getElementById("companyName").value;

const tipo=document.getElementById("projectType").value;

const orcamento=document.getElementById("budget").value;

const texto=`Olá! Vim pelo site da GAR Studio.

Nome: ${nome}

Empresa: ${empresa}

Projeto: ${tipo}

Orçamento: ${orcamento}`;

window.open(

`https://wa.me/5511983897886?text=${encodeURIComponent(texto)}`,

"_blank"

);

});
