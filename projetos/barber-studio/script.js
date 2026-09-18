const header = document.getElementById("header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const loader = document.querySelector(".page-loader");
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
const modal = document.getElementById("bookingModal");
const openBooking = document.getElementById("openBooking");
const closeBooking = document.getElementById("closeBooking");
const backdrop = document.querySelector(".modal-backdrop");
const bookingForm = document.getElementById("bookingForm");

window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hide"), 900);
});

window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 40);
});

menuButton?.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav?.classList.toggle("mobile-open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        menuButton?.classList.remove("open");
        nav?.classList.remove("mobile-open");
    });
});

document.addEventListener("mousemove", event => {
    if (!cursor || !follower) return;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    follower.animate(
        { left: `${event.clientX}px`, top: `${event.clientY}px` },
        { duration: 450, fill: "forwards" }
    );
});

document.querySelectorAll("a, button, .service, .barber-card, .gallery-item").forEach(element => {
    element.addEventListener("mouseenter", () => {
        if (!follower) return;
        follower.style.width = "55px";
        follower.style.height = "55px";
        follower.style.borderColor = "rgba(185,147,90,.7)";
    });

    element.addEventListener("mouseleave", () => {
        if (!follower) return;
        follower.style.width = "34px";
        follower.style.height = "34px";
        follower.style.borderColor = "rgba(233,227,215,.4)";
    });
});

const revealElements = document.querySelectorAll(
    ".section-label, .intro-content, .intro-image, .service, .barber-card, .gallery-item, .review, .booking-content, .contact-grid"
);

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
    });
}, { threshold: .12 });

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";
    revealObserver.observe(element);
});

const parallaxElements = document.querySelectorAll(".hero-image, .booking-background");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    parallaxElements.forEach(element => {
        const rect = element.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            element.style.transform = `translateY(${scroll * 0.08}px) scale(1.03)`;
        }
    });
});

function openModal() {
    modal?.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal?.classList.remove("active");
    document.body.classList.remove("modal-open");
}

openBooking?.addEventListener("click", openModal);
closeBooking?.addEventListener("click", closeModal);
backdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal?.classList.contains("active")) closeModal();
});

const dateInput = document.getElementById("dateSelect");
if (dateInput) {
    const today = new Date();
    dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
}

bookingForm?.addEventListener("submit", event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    alert("Este é um projeto demonstrativo da GAR Studio. As informações de contato e agendamento são fictícias.");
    closeModal();
    bookingForm.reset();
}, true);

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

function applyDemoSafety() {
    const style = document.createElement("style");
    style.textContent = `
        .hero-image{
            background:
                linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.32)),
                radial-gradient(circle at 70% 30%,rgba(185,147,90,.34),transparent 30%),
                linear-gradient(135deg,#11110f,#2a241b 45%,#080807) !important;
        }
        .intro-image,.booking-background{
            background:
                linear-gradient(135deg,rgba(0,0,0,.18),rgba(0,0,0,.35)),
                repeating-linear-gradient(45deg,rgba(185,147,90,.20) 0 2px,transparent 2px 28px),
                linear-gradient(135deg,#d8c7a8,#1b1712) !important;
        }
        .barber-image,.gallery-photo{
            background-image:none !important;
            background:
                radial-gradient(circle at 25% 20%,rgba(185,147,90,.55),transparent 26%),
                linear-gradient(145deg,#14120f,#3a2f22 48%,#0b0a08) !important;
        }
        .barber-two,.photo-two,.photo-five{
            background:
                radial-gradient(circle at 70% 30%,rgba(233,227,215,.22),transparent 26%),
                linear-gradient(145deg,#272018,#0d0c0a) !important;
        }
        .barber-three,.photo-three,.photo-six{
            background:
                repeating-linear-gradient(120deg,rgba(185,147,90,.18) 0 2px,transparent 2px 22px),
                linear-gradient(145deg,#0e0d0b,#302719) !important;
        }
        .map{
            background:
                linear-gradient(90deg,rgba(0,0,0,.06) 1px,transparent 1px),
                linear-gradient(0deg,rgba(0,0,0,.06) 1px,transparent 1px),
                #d7cbb8 !important;
            background-size:42px 42px !important;
        }
        .demo-badge{
            display:inline-flex;
            margin-top:18px;
            padding:9px 13px;
            border:1px solid rgba(185,147,90,.45);
            color:var(--accent);
            font-size:9px;
            letter-spacing:2px;
            text-transform:uppercase;
        }
    `;
    document.head.appendChild(style);

    const contactBlocks = document.querySelectorAll(".contact-block");
    contactBlocks.forEach(block => {
        const label = block.querySelector("span")?.textContent.trim();
        const text = block.querySelector("p");
        if (label === "ENDEREÇO" && text) text.innerHTML = "Endereço demonstrativo<br>São Paulo — SP";
    });

    document.querySelectorAll("a[href^='tel:']").forEach(link => {
        link.removeAttribute("href");
        link.textContent = "(00) 00000-0000";
    });

    const mapLabel = document.querySelector(".map-label small");
    if (mapLabel) mapLabel.textContent = "LOCALIZAÇÃO DEMO";

    const footerContact = [...document.querySelectorAll(".footer-middle > div")].find(item => item.querySelector("span")?.textContent.trim() === "FALE CONOSCO");
    if (footerContact) footerContact.querySelector("a").textContent = "Contato demonstrativo";

    const heroActions = document.querySelector(".hero-actions");
    if (heroActions && !document.querySelector(".demo-badge")) {
        heroActions.insertAdjacentHTML("afterend", '<div class="demo-badge">Projeto fictício para portfólio</div>');
    }
}

applyDemoSafety();
