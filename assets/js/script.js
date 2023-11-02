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