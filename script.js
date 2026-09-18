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

    .trust-proof,
    .client-reviews {
      border-top: 1px solid var(--line);
    }

    .trust-head,
    .reviews-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 50px;
      margin-bottom: 60px;
    }

    .trust-head h2,
    .reviews-head h2 {
      font-family: var(--display);
      font-size: clamp(42px, 6vw, 86px);
      line-height: .98;
      letter-spacing: -4px;
      font-weight: 600;
    }

    .trust-head h2 span,
    .reviews-head h2 span {
      color: #7e8491;
    }

    .trust-head p:last-child,
    .reviews-head p:last-child {
      max-width: 390px;
      color: #777d89;
      line-height: 1.7;
      font-size: 13px;
    }

    .trust-grid,
    .review-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .trust-card,
    .review-card {
      min-height: 190px;
      padding: 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
      transition: .3s;
    }

    .trust-card:hover,
    .review-card:hover {
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

    .trust-card h3,
    .review-card h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .trust-card p,
    .review-card p {
      color: #747a87;
      font-size: 13px;
      line-height: 1.65;
    }

    .review-stars {
      color: var(--blue2);
      letter-spacing: 4px;
      font-size: 13px;
      margin-bottom: 22px;
    }

    .review-author {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-top: 26px;
      padding-top: 18px;
      border-top: 1px solid var(--line);
      color: #8d93a1;
      font-size: 11px;
    }

    .review-form-wrap {
      margin-top: 24px;
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 28px;
      background: radial-gradient(circle at top right, rgba(65,105,255,.14), transparent 32%), rgba(255,255,255,.025);
    }

    .review-form-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 24px;
      margin-bottom: 22px;
    }

    .review-form-head h3 {
      font-size: 26px;
      font-weight: 500;
    }

    .review-form-head p {
      max-width: 430px;
      color: #777d89;
      font-size: 12px;
      line-height: 1.7;
    }

    .review-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .review-form label {
      display: grid;
      gap: 8px;
      color: #858b98;
      font-size: 10px;
      letter-spacing: 1.7px;
      text-transform: uppercase;
    }

    .review-form label.full {
      grid-column: span 2;
    }

    .review-form input,
    .review-form select,
    .review-form textarea {
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: rgba(255,255,255,.035);
      color: #fff;
      padding: 15px;
      font: 14px var(--font);
      outline: none;
    }

    .review-form textarea {
      min-height: 130px;
      resize: vertical;
    }

    .review-form input::placeholder,
    .review-form textarea::placeholder {
      color: #5f6572;
    }

    .review-form select option {
      color: #111;
    }

    .review-submit {
      grid-column: span 2;
      justify-content: center;
      border: none;
      cursor: pointer;
      margin-top: 6px;
    }

    .review-note {
      margin-top: 14px;
      color: #707681;
      font-size: 11px;
      line-height: 1.6;
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

      .trust-head,
      .reviews-head,
      .review-form-head {
        display: block;
      }

      .trust-head p:last-child,
      .reviews-head p:last-child,
      .review-form-head p {
        margin-top: 28px;
      }

      .trust-grid,
      .review-grid,
      .contact-options {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 650px) {
      .trust-grid,
      .review-grid,
      .contact-options,
      .review-form {
        grid-template-columns: 1fr;
      }

      .review-form label.full,
      .review-submit {
        grid-column: auto;
      }

      .trust-card,
      .review-card {
        min-height: auto;
      }
    }
  `;

  document.head.appendChild(style);
}

function addNavigationLinks() {
  if (nav && !nav.querySelector('a[href="#avaliacoes"]')) {
    const contactLink = nav.querySelector('a[href="#contato"]');
    const reviewLink = document.createElement('a');
    reviewLink.href = '#avaliacoes';
    reviewLink.textContent = 'Avaliações';
    if (contactLink) contactLink.insertAdjacentElement('beforebegin', reviewLink);
    else nav.appendChild(reviewLink);
  }

  const footerLinks = document.querySelector('.footer-links');
  if (footerLinks && !footerLinks.querySelector('a[href="#avaliacoes"]')) {
    const contactFooter = footerLinks.querySelector('a[href="#contato"]');
    const reviewFooter = document.createElement('a');
    reviewFooter.href = '#avaliacoes';
    reviewFooter.textContent = 'Avaliações';
    if (contactFooter) contactFooter.insertAdjacentElement('beforebegin', reviewFooter);
    else footerLinks.appendChild(reviewFooter);
  }
}

function enhanceContent() {
  addNavigationLinks();

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

  if (contactSection && !document.querySelector('.client-reviews')) {
    contactSection.insertAdjacentHTML(
      'beforebegin',
      `<section class="client-reviews section-pad" id="avaliacoes">
        <div class="reviews-head reveal">
          <div>
            <p class="section-label">06 / AVALIAÇÕES</p>
            <h2>O que dizem sobre a <span>GAR Studio.</span></h2>
          </div>
          <p>Clientes podem enviar uma nota e comentar a experiência. As avaliações passam por análise antes de aparecerem publicamente.</p>
        </div>

        <div class="review-grid">
          <article class="review-card reveal">
            <div class="review-stars">★★★★★</div>
            <h3>Atendimento direto</h3>
            <p>Um espaço para destacar comentários reais de clientes sobre comunicação, entrega e resultado do projeto.</p>
            <div class="review-author"><span>Cliente GAR</span><span>5.0</span></div>
          </article>

          <article class="review-card reveal">
            <div class="review-stars">★★★★★</div>
            <h3>Site profissional</h3>
            <p>Depoimentos futuros podem mostrar como o site ajudou o negócio a passar mais confiança para novos clientes.</p>
            <div class="review-author"><span>Projeto entregue</span><span>5.0</span></div>
          </article>

          <article class="review-card reveal">
            <div class="review-stars">★★★★★</div>
            <h3>Experiência completa</h3>
            <p>Depois dos primeiros clientes, esta área pode receber avaliações reais aprovadas pela GAR Studio.</p>
            <div class="review-author"><span>Avaliação futura</span><span>5.0</span></div>
          </article>

          <article class="review-card reveal">
            <div class="review-stars">★★★★★</div>
            <h3>Feedback do cliente</h3>
            <p>O formulário abaixo envia a avaliação para o WhatsApp da GAR Studio para aprovação manual.</p>
            <div class="review-author"><span>Envio seguro</span><span>Manual</span></div>
          </article>
        </div>

        <div class="review-form-wrap reveal">
          <div class="review-form-head">
            <h3>Deixe sua avaliação</h3>
            <p>O comentário será enviado para a GAR Studio. Assim evitamos spam e só publicamos avaliações aprovadas.</p>
          </div>

          <form class="review-form" id="reviewForm">
            <label>
              Seu nome
              <input type="text" id="reviewName" placeholder="Digite seu nome" required>
            </label>

            <label>
              Nota
              <select id="reviewRating" required>
                <option value="">Escolha uma nota</option>
                <option value="5 estrelas">★★★★★ 5 estrelas</option>
                <option value="4 estrelas">★★★★☆ 4 estrelas</option>
                <option value="3 estrelas">★★★☆☆ 3 estrelas</option>
                <option value="2 estrelas">★★☆☆☆ 2 estrelas</option>
                <option value="1 estrela">★☆☆☆☆ 1 estrela</option>
              </select>
            </label>

            <label class="full">
              Comentário
              <textarea id="reviewMessage" placeholder="Conte como foi sua experiência com a GAR Studio" required></textarea>
            </label>

            <button type="submit" class="button primary review-submit">
              Enviar avaliação pelo WhatsApp
              <span>↗</span>
            </button>
          </form>

          <p class="review-note">Para avaliações aparecerem automaticamente no site no futuro, o ideal é conectar essa área a um banco de dados com aprovação manual.</p>
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

function setupReviews() {
  document.addEventListener('submit', (event) => {
    if (!event.target.matches('#reviewForm')) return;

    event.preventDefault();

    const name = document.getElementById('reviewName')?.value.trim() || '';
    const rating = document.getElementById('reviewRating')?.value || '';
    const message = document.getElementById('reviewMessage')?.value.trim() || '';

    if (!name || !rating || !message) return;

    const text = `Olá! Quero deixar uma avaliação da GAR Studio.\n\nNome: ${name}\nNota: ${rating}\nComentário: ${message}\n\nAutorizo a GAR Studio a analisar e usar esse depoimento no site.`;
    window.open(`https://wa.me/5511983897886?text=${encodeURIComponent(text)}`, '_blank');
    event.target.reset();
  });
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
setupReviews();