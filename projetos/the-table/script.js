const header=document.getElementById('header');
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const loader=document.querySelector('.loader');
const modal=document.getElementById('reservationModal');
const openReservation=document.getElementById('openReservation');
const closeReservation=document.getElementById('closeReservation');
const modalBg=document.querySelector('.modal-bg');
const reservationForm=document.getElementById('reservationForm');

window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),1000));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>40));

menuToggle?.addEventListener('click',()=>{
  menuToggle.classList.toggle('open');
  nav?.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    menuToggle?.classList.remove('open');
    nav?.classList.remove('open');
  });
});

document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(item=>item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.dish').forEach(dish=>{
      dish.classList.toggle('hidden-dish',dish.dataset.category!==tab.dataset.category);
    });
  });
});

function openModal(){modal?.classList.add('active');document.body.classList.add('modal-open')}
function closeModal(){modal?.classList.remove('active');document.body.classList.remove('modal-open')}

openReservation?.addEventListener('click',openModal);
closeReservation?.addEventListener('click',closeModal);
modalBg?.addEventListener('click',closeModal);
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});

const reservationDate=document.getElementById('reservationDate');
if(reservationDate){
  const today=new Date();
  reservationDate.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split('T')[0];
}

reservationForm?.addEventListener('submit',event=>{
  event.preventDefault();
  alert('Projeto demonstrativo da GAR Studio. As informações de reserva e contato são fictícias.');
  closeModal();
  reservationForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.style.opacity='1';
    entry.target.style.transform='translateY(0)';
    revealObserver.unobserve(entry.target);
  });
},{threshold:.1});

document.querySelectorAll('.section-number,.manifesto-grid,.experience-image,.menu-heading,.menu-tabs,.dish,.gallery-heading,.gallery-item,.chef-grid,.reservation-content,.contact-grid').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(30px)';
  el.style.transition='opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1)';
  revealObserver.observe(el);
});

function applyDemoSafety(){
  const style=document.createElement('style');
  style.textContent=`
    .hero-image,.experience-image,.statement-image,.reservation-image{background:linear-gradient(120deg,rgba(16,16,14,.82),rgba(16,16,14,.25)),radial-gradient(circle at 75% 25%,rgba(201,166,104,.34),transparent 30%),linear-gradient(135deg,#11100e,#2b2419 46%,#0b0a08)!important}
    .dish-image,.gallery-photo,.chef-photo{background-image:none!important;background:radial-gradient(circle at 30% 20%,rgba(201,166,104,.48),transparent 24%),repeating-linear-gradient(135deg,rgba(255,255,255,.08) 0 2px,transparent 2px 26px),linear-gradient(145deg,#1b1712,#4b3823 48%,#0d0b08)!important}
    .map{background:linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(0deg,rgba(255,255,255,.06) 1px,transparent 1px),#15130f!important;background-size:44px 44px!important}
    .demo-badge{display:inline-flex;margin-top:22px;padding:9px 13px;border:1px solid rgba(201,166,104,.45);color:#c9a668;font-size:9px;letter-spacing:2px;text-transform:uppercase}
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.contact-details>div').forEach(item=>{
    const label=item.querySelector('span')?.textContent.trim();
    const text=item.querySelector('p');
    if(label==='ENDEREÇO'&&text)text.innerHTML='Endereço demonstrativo<br>São Paulo, SP';
    if(label==='CONTATO'&&text)text.innerHTML='(00) 00000-0000<br>contato@exemplo.com';
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(link=>{link.removeAttribute('href');link.textContent='(00) 00000-0000'});
  const mapLabel=document.querySelector('.map-label small');
  if(mapLabel)mapLabel.textContent='LOCALIZAÇÃO DEMO';
  document.querySelector('.hero-reserve')?.insertAdjacentHTML('afterend','<div class="demo-badge">Projeto fictício para portfólio</div>');
}

applyDemoSafety();
