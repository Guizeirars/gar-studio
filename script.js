const header = document.getElementById('header');
const glow = document.querySelector('.cursor-glow');
const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=contato.garstudio@gmail.com';
const whatsappLink = 'https://wa.me/5511983897886?text=Olá!%20Encontrei%20a%20GAR%20Studio%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

function injectUpgradesCss() {
  if (document.getElementById('gar-upgrades-css')) return;

  const style = document.createElement('style');
  style.id = 'gar-upgrades-css';
  style.textContent = `
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible {
      outline: 2px solid var(--blue2);
      outline-offset: 4px;
    }

    .menu-btn.open {
      color: var(--blue2);
    }

    body.menu-open {
      overflow: hidden;
    }

    .statement-desc {
      max-width: 610px;
      margin-top: 34px;
      color: #9ba1ad !important;
      font-size: 15px !important;
      line-height: 1.8;
    }

    .project-desc {
      max-width: 420px;
      margin-top: 10px;
      color: #838998;
      font-size: 13px;
      line-height: 1.6;
      letter-spacing: 0;
    }

    .trust-proof {
      border-top: 1px solid var(--line);
    }

    .trust-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 50px;
      margin-bottom: 60px;
    }

    .trust-head h2 {
      font-family: var(--display);
      font-size: clamp(42px, 6vw, 86px);
      line-height: .98;
      letter-spacing: -4px;
      font-weight: 600;
    }

    .trust-head h2 span {
      color: #7e8491;
    }

    .trust-head p:last-child {
      max-width: 360px;
      color: #777d89;
      line-height: 1.7;
      font-size: 13px;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .trust-card {
      min-height: 190px;
      padding: 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
      transition: .3s;
    }

    .trust-card:hover {
      transform: translateY(-6px);
      border-color: rgba(65, 105, 255, .45);
      background: linear-gradient(145deg, rgba(65,105,255,.09), rgba(255,255,255,.02));
    }

    .trust-card b {
      display: inline-flex;
      width: 34px;
      height: 34px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(65, 105, 255, .14);
      color: var(--blue2);
      margin-bottom: 28px;
      font-size: 13px;
    }

    .trust-card h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .trust-card p {
      color: #747a87;
      font-size: 13px;
      line-height: 1.65;
    }

    .contact-options {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      width: min(840px, 90vw);
      margin: 38px auto 0;
    }

    .contact-card {
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 18px;
      text-align: left;
      background: rgba(255, 255, 255, .025);
      transition: .3s;
    }

    .contact-card:hover {
      transform: translateY(-4px);
      border-color: rgba(65, 105, 255, .45);
      background: rgba(65, 105, 255, .06);
    }

    .contact-card span {
      display: block;
      margin-bottom: 8px;
      color: #6e8aff;
      font: 10px var(--display);
      letter-spacing: 1.8px;
      text-transform: uppercase;
    }

    .contact-card strong {
      display: block;
      color: #fff;
      font-size: 14px;
      line-height: 1.45;
    }

    .contact-card small {
      display: block;
      margin-top: 7px;
      color: #858b98;
      line-height: 1.5;
    }

    .contact-email {
      display: none !important;
    }

    @media (max-width: 960px) {
      .nav.mobile-open {
        position: fixed;
        top: 92px;
        left: 50%;
        transform: translateX(-50%);
        width: min(94vw, 520px);
        display: flex !important;
        flex-direction: column;
        gap: 0;
        margin: 0;
        padding: 14px;
        background: rgba(10, 11, 16, .96);
        border: 1px solid var(--line);
        border-radius: 22px;
        box-shadow: 0 30px 80px rgba(0,0,0,.5);
        backdrop-filter: blur(18px);
        z-index: 1000;
      }

      .nav.mobile-open a {
        padding: 15px 16px;
        border-radius: 14px;
        font-size: 15px;
      }

      .nav.mobile-open a:hover {
        background: rgba(255,255,255,.055);
      }

      .nav.mobile-open .mobile-menu-cta {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        background: linear-gradient(135deg,#4f7cff,#6f54ff);
        color: #fff;
        font-weight: 700;
      }

      .trust-head {
        display: block;
      }

      .trust-head p:last-child {
        margin-top: 28px;
      }

      .trust-grid,
      .contact-options {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 650px) {
      .trust-grid,
      .contact-options {
        grid-template-columns: 1fr;
      }

      .trust-card {
        min-height: auto;
      }
    }
  `;

  document.head.appendChild(style);
}

function enhanceContent() {
  const statementTitle = document.querySelector('.statement-copy h2');
  if (statementTitle && !document.querySelector('.statement-desc')) {
    statementTitle.insertAdjacentHTML(
      'afterend',
      '<p class="statement-desc">A GAR Studio cria sites modernos para pequenos negócios que querem transmitir mais confiança, valorizar sua marca e facilitar o contato com novos clientes.</p>'
    );
  }

  const descriptions = [
    'Site moderno para barbearias, com foco em serviços, agendamento e contato rápido pelo WhatsApp.',
    'Experiência digital para restaurantes, com apresentação elegante e foco em reservas e presença online.',
    'Landing page para academia, com visual forte, impacto rápido e foco em conversão.'
  ];

  document.querySelectorAll('.project-card').forEach((card, index) => {
    if (card.querySelector('.project-desc')) return;
    const title = card.querySelector('.project-info h3');
    if (title && descriptions[index]) {
      title.insertAdjacentHTML('afterend', `<p class="project-desc">${descriptions[index]}</p>`);
    }
  });

  const processSection = document.querySelector('.process');
  const contactSection = document.querySelector('.cta-section');

  if (processSection && contactSection && !document.querySelector('.trust-proof')) {
    contactSection.insertAdjacentHTML(
      'beforebegin',
      `<section class="trust-proof section-pad">
        <div class="trust-head reveal">
          <div>
            <p class="section-label">05 / CONFIANÇA</p>
            <h2>Detalhes que deixam seu site <span>mais profissional.</span></h2>
          </div>
          <p>Cada projeto é pensado para funcionar bem no celular, carregar rápido e facilitar o contato entre cliente e empresa.</p>
        </div>

        <div class="trust-grid">
          <div class="trust-card reveal">
            <b>01</b>
            <h3>Responsivo</h3>
            <p>Layout adaptado para celular, tablet e computador.</p>
          </div>

          <div class="trust-card reveal">
            <b>02</b>
            <h3>WhatsApp integrado</h3>
            <p>Botões estratégicos para o cliente entrar em contato rápido.</p>
          </div>

          <div class="trust-card reveal">
            <b>03</b>
            <h3>Publicado online</h3>
            <p>Entrega com o site no ar, funcionando e pronto para divulgação.</p>
          </div>

          <div class="trust-card reveal">
            <b>04</b>
            <h3>Visual sob medida</h3>
            <p>Design alinhado ao estilo, objetivo e público do negócio.</p>
          </div>
        </div>
      </section>`
    );
  }

  const ctaContent = document.querySelector('.cta-content');
  const ctaButton = document.querySelector('.cta-content .button.primary.large');

  if (ctaContent && ctaButton && !document.querySelector('.contact-options')) {
    ctaButton.insertAdjacentHTML(
      'afterend',
      `<div class="contact-options">
        <a class="contact-card" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
          <span>WhatsApp</span>
          <strong>Solicitar orçamento</strong>
          <small>Resposta rápida para novos projetos.</small>
        </a>

        <a class="contact-card" href="${gmailLink}" target="_blank" rel="noopener noreferrer">
          <span>E-mail</span>
          <strong>contato.garstudio@gmail.com</strong>
          <small>Abre direto no Gmail.</small>
        </a>

        <div class="contact-card">
          <span>Atendimento</span>
          <strong>São Paulo e todo Brasil</strong>
          <small>Projetos online para negócios locais.</small>
        </div>
      </div>`
    );
  }

  document.querySelector('.contact-email')?.remove();
}

function setupMobileMenu() {
  if (!menu || !nav) return;

  menu.setAttribute('aria-label', 'Abrir menu');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-controls', 'mainNavigation');
  nav.id = 'mainNavigation';

  if (!nav.querySelector('.mobile-menu-cta')) {
    const mobileCta = document.createElement('a');
    mobileCta.href = whatsappLink;
    mobileCta.className = 'mobile-menu-cta';
    mobileCta.target = '_blank';
    mobileCta.rel = 'noopener noreferrer';
    mobileCta.innerHTML = 'Solicitar orçamento <span>↗</span>';
    nav.appendChild(mobileCta);
  }

  const closeMenu = () => {
    nav.classList.remove('mobile-open');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menu.setAttribute('aria-expanded', 'false');
  };

  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function setupAnimations() {
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
}

function setupQuoteModal() {
  const quoteModal = document.getElementById('quoteModal');
  const quoteClose = document.getElementById('quoteClose');
  const quoteOverlay = document.querySelector('.quote-overlay');
  const quoteForm = document.getElementById('quoteForm');

  if (!quoteModal) return;

  quoteModal.setAttribute('role', 'dialog');
  quoteModal.setAttribute('aria-modal', 'true');
  quoteModal.setAttribute('aria-hidden', 'true');

  if (quoteClose) quoteClose.setAttribute('aria-label', 'Fechar formulário de orçamento');

  document.getElementById('clientName')?.setAttribute('aria-label', 'Seu nome');
  document.getElementById('companyName')?.setAttribute('aria-label', 'Nome da empresa');
  document.getElementById('projectType')?.setAttribute('aria-label', 'Tipo de projeto');
  document.getElementById('budget')?.setAttribute('aria-label', 'Orçamento disponível');

  const openModal = () => {
    quoteModal.classList.add('active');
    quoteModal.setAttribute('aria-hidden', 'false');
    document.getElementById('clientName')?.focus();
  };

  const closeModal = () => {
    quoteModal.classList.remove('active');
    quoteModal.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('.nav-cta,.button.ghost,.button.primary.large').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  quoteClose?.addEventListener('click', closeModal);
  quoteOverlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  quoteForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('clientName')?.value || '';
    const empresa = document.getElementById('companyName')?.value || '';
    const tipo = document.getElementById('projectType')?.value || '';
    const orcamento = document.getElementById('budget')?.value || '';

    const texto = `Olá! Vim pelo site da GAR Studio.\n\nNome: ${nome}\n\nEmpresa: ${empresa}\n\nProjeto: ${tipo}\n\nOrçamento: ${orcamento}`;

    window.open(`https://wa.me/5511983897886?text=${encodeURIComponent(texto)}`, '_blank');
  });
}

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
});

document.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

injectUpgradesCss();
enhanceContent();
setupMobileMenu();
setupAnimations();
setupQuoteModal();