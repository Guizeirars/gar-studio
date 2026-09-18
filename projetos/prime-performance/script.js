const loader=document.getElementById('loader');
const header=document.getElementById('header');
const glow=document.querySelector('.cursor-glow');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const modal=document.getElementById('enrollModal');
const modalClose=document.getElementById('modalClose');
const enrollForm=document.getElementById('enrollForm');
const planSelect=document.getElementById('plan');
const preview=document.getElementById('disciplinePreview');
const disciplines=document.querySelectorAll('.discipline');

window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),900));
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>40));

document.addEventListener('mousemove',e=>{
  if(!glow)return;
  glow.style.left=`${e.clientX}px`;
  glow.style.top=`${e.clientY}px`;
});

menuBtn?.addEventListener('click',()=>{
  const opened=nav?.classList.toggle('mobile-open');
  menuBtn.classList.toggle('open',opened);
  document.body.style.overflow=opened?'hidden':'';
});

document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    nav?.classList.remove('mobile-open');
    menuBtn?.classList.remove('open');
    document.body.style.overflow='';
  });
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));

disciplines.forEach((item,index)=>{
  item.addEventListener('mouseenter',()=>{
    disciplines.forEach(discipline=>discipline.classList.remove('active'));
    item.classList.add('active');
    if(preview)preview.style.background=`linear-gradient(145deg,#05070b,#172033 45%,#4169ff)`;
  });
});

const counterObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const element=entry.target;
    const target=Number(element.dataset.counter);
    const suffix=element.dataset.suffix||'';
    let current=0;
    const duration=1500;
    const startTime=performance.now();
    function animateCounter(time){
      const progress=Math.min((time-startTime)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      current=Math.floor(target*eased);
      element.textContent=current.toLocaleString('pt-BR')+suffix;
      if(progress<1)requestAnimationFrame(animateCounter);
      else element.textContent=target.toLocaleString('pt-BR')+suffix;
    }
    requestAnimationFrame(animateCounter);
    counterObserver.unobserve(element);
  });
},{threshold:.5});

document.querySelectorAll('[data-counter]').forEach(counter=>counterObserver.observe(counter));

function openModal(plan=''){
  modal?.classList.add('active');
  document.body.style.overflow='hidden';
  if(plan&&planSelect)planSelect.value=plan;
}
function closeModal(){modal?.classList.remove('active');document.body.style.overflow=''}

document.querySelectorAll('.open-enroll').forEach(button=>{
  button.addEventListener('click',()=>openModal(button.dataset.plan||''));
});
modalClose?.addEventListener('click',closeModal);
document.querySelector('.modal-backdrop')?.addEventListener('click',closeModal);
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});

enrollForm?.addEventListener('submit',event=>{
  event.preventDefault();
  alert('Projeto demonstrativo da GAR Studio. As informações de matrícula e contato são fictícias.');
  closeModal();
  enrollForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',event=>{
    const target=document.querySelector(anchor.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

const heroImage=document.querySelector('.hero-image');
const bannerImage=document.querySelector('.banner-image');
const finalBg=document.querySelector('.final-bg');
let ticking=false;

window.addEventListener('scroll',()=>{
  if(window.innerWidth<800)return;
  if(!ticking){
    requestAnimationFrame(()=>{
      const scroll=window.scrollY;
      if(heroImage)heroImage.style.transform=`scale(1.04) translateY(${scroll*.08}px)`;
      [bannerImage,finalBg].forEach(image=>{
        if(!image)return;
        const section=image.parentElement;
        const rect=section.getBoundingClientRect();
        if(rect.top<window.innerHeight&&rect.bottom>0){
          const offset=(window.innerHeight/2-(rect.top+rect.height/2))*.06;
          image.style.transform=`translateY(${offset}px)`;
        }
      });
      ticking=false;
    });
    ticking=true;
  }
});

function applyDemoSafety(){
  const style=document.createElement('style');
  style.textContent=`
    .hero-image,.banner-image,.final-bg,.structure-photo,.trainer-image,.discipline-preview-image{background-image:none!important;background:radial-gradient(circle at 70% 25%,rgba(65,105,255,.45),transparent 28%),repeating-linear-gradient(120deg,rgba(255,255,255,.08) 0 2px,transparent 2px 28px),linear-gradient(145deg,#070911,#172033 46%,#05060a)!important}
    .structure-photo-two,.trainer-two{background:radial-gradient(circle at 25% 25%,rgba(255,255,255,.22),transparent 26%),linear-gradient(145deg,#111827,#4169ff)!important}
    .trainer-three{background:repeating-linear-gradient(135deg,rgba(65,105,255,.22) 0 2px,transparent 2px 24px),linear-gradient(145deg,#05060a,#1c263e)!important}
    .demo-badge{display:inline-flex;margin-top:20px;padding:9px 13px;border:1px solid rgba(65,105,255,.55);color:#8aa1ff;font-size:9px;letter-spacing:2px;text-transform:uppercase}
  `;
  document.head.appendChild(style);

  const columns=document.querySelectorAll('.contact-column');
  columns.forEach(column=>{
    const label=column.querySelector('span')?.textContent.trim();
    const text=column.querySelector('p');
    if(label==='ENDEREÇO'&&text)text.innerHTML='Endereço demonstrativo<br>São Paulo — SP';
    if(label==='CONTATO'&&text)text.innerHTML='(00) 00000-0000<br>contato@exemplo.com';
  });

  document.querySelector('.hero-bottom')?.insertAdjacentHTML('afterend','<div class="demo-badge reveal visible">Projeto fictício para portfólio</div>');
}

applyDemoSafety();
