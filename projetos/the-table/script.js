const header = document.getElementById("header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

const loader = document.querySelector(".loader");

const tabs = document.querySelectorAll(".tab");
const dishes = document.querySelectorAll(".dish");

const modal = document.getElementById("reservationModal");
const openReservation = document.getElementById("openReservation");
const closeReservation = document.getElementById("closeReservation");
const modalBg = document.querySelector(".modal-bg");
const reservationForm = document.getElementById("reservationForm");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000);
});

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
});

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        nav.classList.remove("open");
    });
});

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => item.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.dataset.category;

        dishes.forEach(dish => {

            if (dish.dataset.category === category) {
                dish.classList.remove("hidden-dish");
                dish.style.animation = "dishIn .5s ease";
            } else {
                dish.classList.add("hidden-dish");
            }

        });

    });

});

const dishAnimation = document.createElement("style");

dishAnimation.innerHTML = `
@keyframes dishIn {
    from {
        opacity:0;
        transform:translateY(15px);
    }
    to {
        opacity:1;
        transform:translateY(0);
    }
}
`;

document.head.appendChild(dishAnimation);

function openModal() {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

openReservation.addEventListener("click", openModal);

closeReservation.addEventListener("click", closeModal);

modalBg.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {
        closeModal();
    }

});

const reservationDate = document.getElementById("reservationDate");

const today = new Date();

const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
)
.toISOString()
.split("T")[0];

reservationDate.min = localDate;

reservationForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const guests = document.getElementById("guestCount").value;
    const date = document.getElementById("reservationDate").value;
    const time = document.getElementById("reservationTime").value;

    if (!name || !guests || !date || !time) {
        return;
    }

    const formattedDate = new Date(
        `${date}T12:00:00`
    ).toLocaleDateString(
        "pt-BR",
        {
            day:"2-digit",
            month:"2-digit",
            year:"numeric"
        }
    );

    const message =
        `Olá! Meu nome é ${name}.%0A%0A` +
        `Gostaria de solicitar uma reserva no The Table.%0A%0A` +
        `🍽️ Pessoas: ${guests}%0A` +
        `📅 Data: ${formattedDate}%0A` +
        `🕐 Horário: ${time}`;

    const whatsappNumber = "5511988887777";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );

    closeModal();

    reservationForm.reset();

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

});

const revealElements = document.querySelectorAll(
    ".section-number, .manifesto-grid, .experience-image, .menu-heading, .menu-tabs, .dish, .gallery-heading, .gallery-item, .chef-grid, .reservation-content, .contact-grid"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold:.1
    }
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1)";

    observer.observe(element);

});

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `
.revealed {
    opacity:1 !important;
    transform:translateY(0) !important;
}
`;

document.head.appendChild(revealStyle);

const parallaxImages = document.querySelectorAll(
    ".hero-image, .statement-image, .reservation-image"
);

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    parallaxImages.forEach(image => {

        const section = image.parentElement;
        const rect = section.getBoundingClientRect();

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const offset =
                (window.innerHeight - rect.top) * .025;

            image.style.transform =
                `translateY(${offset}px) scale(1.03)`;

        }

    });

});