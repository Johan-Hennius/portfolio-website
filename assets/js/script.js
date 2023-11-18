// Navigation text reveal animation
let elements = document.querySelectorAll(".primary-navigation__item");

elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    };

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    });
});

// Mobile navigation reveal animation
const primaryNav = document.querySelector(".mobile-navigation__list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navToggle.style.color="var(--clr-light-grey)";
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navToggle.style.color="var(--clr-dark-blue)";
    }
});

// Mobile navigation reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden, .hiddenX");
hiddenElements.forEach((el) => observer.observe(el));


