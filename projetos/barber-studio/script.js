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
    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);
});

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
});

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("mobile-open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("open");
        nav.classList.remove("mobile-open");
    });
});

document.addEventListener("mousemove", event => {
    if (cursor && follower) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        follower.animate(
            {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            },
            {
                duration: 450,
                fill: "forwards"
            }
        );
    }
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

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        });
    },
    {
        threshold: .12
    }
);

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

        const parent = element.parentElement;
        const rect = parent.getBoundingClientRect();

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const movement = scroll * 0.08;
            element.style.transform = `translateY(${movement}px) scale(1.03)`;
        }

    });

});

function openModal() {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

openBooking.addEventListener("click", openModal);

closeBooking.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }

});

const dateInput = document.getElementById("dateSelect");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

bookingForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const service = document.getElementById("serviceSelect").value;
    const date = document.getElementById("dateSelect").value;
    const time = document.getElementById("timeSelect").value;

    if (!name || !service || !date || !time) {
        return;
    }

    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

    const message =
        `Olá! Meu nome é ${name}.%0A%0A` +
        `Gostaria de agendar um horário no Barber Studio.%0A%0A` +
        `✂️ Serviço: ${service}%0A` +
        `📅 Data: ${formattedDate}%0A` +
        `🕐 Horário: ${time}`;

    const whatsappNumber = "5511999999999";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );

    closeModal();

    bookingForm.reset();

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});