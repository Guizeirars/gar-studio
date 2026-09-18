const loader = document.getElementById("loader");
const header = document.getElementById("header");
const glow = document.querySelector(".cursor-glow");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const modal = document.getElementById("enrollModal");
const modalClose = document.getElementById("modalClose");
const enrollForm = document.getElementById("enrollForm");

const planSelect = document.getElementById("plan");

const preview = document.getElementById("disciplinePreview");
const disciplines = document.querySelectorAll(".discipline");

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});


window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

});


document.addEventListener("mousemove", e => {

    if (!glow) return;

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

});


menuBtn.addEventListener("click", () => {

    const opened = nav.classList.toggle("mobile-open");

    menuBtn.classList.toggle(
        "open",
        opened
    );

    document.body.style.overflow = opened ? "hidden" : "";

});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");
        menuBtn.classList.remove("open");

        document.body.style.overflow = "";

    });

});


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


disciplines.forEach(item => {

    item.addEventListener("mouseenter", () => {

        disciplines.forEach(discipline => {
            discipline.classList.remove("active");
        });

        item.classList.add("active");

        const image = item.dataset.image;

        preview.style.backgroundImage =
            `url("${image}")`;

    });

});


const counters = document.querySelectorAll("[data-counter]");


const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;

            const target =
                Number(element.dataset.counter);

            const suffix =
                element.dataset.suffix || "";

            let current = 0;

            const duration = 1500;

            const startTime =
                performance.now();


            function animateCounter(time) {

                const progress =
                    Math.min(
                        (time - startTime) / duration,
                        1
                    );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(
                        target * eased
                    );

                element.textContent =
                    current.toLocaleString("pt-BR")
                    + suffix;

                if (progress < 1) {

                    requestAnimationFrame(
                        animateCounter
                    );

                } else {

                    element.textContent =
                        target.toLocaleString("pt-BR")
                        + suffix;

                }

            }

            requestAnimationFrame(
                animateCounter
            );

            counterObserver.unobserve(
                element
            );

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


function openModal(plan = "") {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    if (plan) {

        planSelect.value = plan;

    }

}


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.querySelectorAll(".open-enroll").forEach(button => {

    button.addEventListener("click", () => {

        const selectedPlan =
            button.dataset.plan || "";

        openModal(selectedPlan);

    });

});


modalClose.addEventListener(
    "click",
    closeModal
);


document.querySelector(".modal-backdrop")
.addEventListener("click", closeModal);


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeModal();

    }

});


enrollForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name")
        .value.trim();

    const phone =
        document.getElementById("phone")
        .value.trim();

    const plan =
        planSelect.value;


    const message =
`Olá! Vim pelo site da Prime Performance.

Meu nome é ${name}.
Meu WhatsApp é ${phone}.
Tenho interesse no plano: ${plan}.

Gostaria de saber mais sobre a matrícula.`;


    const whatsappNumber =
        "5511988887777";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

        const target =
            document.querySelector(
                anchor.getAttribute("href")
            );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


const heroImage =
    document.querySelector(".hero-image");

const bannerImage =
    document.querySelector(".banner-image");

const finalBg =
    document.querySelector(".final-bg");


let ticking = false;


window.addEventListener("scroll", () => {

    if (window.innerWidth < 800) return;

    if (!ticking) {

        requestAnimationFrame(() => {

            const scroll =
                window.scrollY;

            if (heroImage) {

                heroImage.style.transform =
                    `scale(1.04) translateY(${scroll * 0.08}px)`;

            }


            if (bannerImage) {

                const banner =
                    document.querySelector(
                        ".performance-banner"
                    );

                const rect =
                    banner.getBoundingClientRect();

                if (
                    rect.top < window.innerHeight &&
                    rect.bottom > 0
                ) {

                    const offset =
                        (
                            window.innerHeight / 2 -
                            (
                                rect.top +
                                rect.height / 2
                            )
                        ) * 0.08;

                    bannerImage.style.transform =
                        `translateY(${offset}px)`;

                }

            }


            if (finalBg) {

                const section =
                    document.querySelector(
                        ".final-cta"
                    );

                const rect =
                    section.getBoundingClientRect();

                if (
                    rect.top < window.innerHeight &&
                    rect.bottom > 0
                ) {

                    const offset =
                        (
                            window.innerHeight / 2 -
                            (
                                rect.top +
                                rect.height / 2
                            )
                        ) * 0.06;

                    finalBg.style.transform =
                        `translateY(${offset}px)`;

                }

            }

            ticking = false;

        });

        ticking = true;

    }

});