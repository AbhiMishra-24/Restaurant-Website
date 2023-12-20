
// PRELOAD -> loading will end after document is loaded.

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})



// TOGGLE HAMBURGER ICON.
let hamburger = document.querySelector(".hamburger-icon");
let navbar = document.querySelector("[data-navbar]");

hamburger.addEventListener("click", () => {
    let hamburgerElement1 = document.querySelector(".hamburger-icon p:first-child");
    let hamburgerElement2 = document.querySelector(".hamburger-icon p:nth-child(2)");
    let hamburgerElement3 = document.querySelector(".hamburger-icon p:last-child");

    hamburgerElement1.classList.toggle("rotate1");
    hamburgerElement3.classList.toggle("rotate2");
    hamburgerElement2.classList.toggle("display-none");

    navbar.classList.toggle("hide");
});

document.addEventListener("click", (event) => {

    let hamburgerElement1 = document.querySelector(".hamburger-icon p:first-child");
    let hamburgerElement2 = document.querySelector(".hamburger-icon p:nth-child(2)");
    let hamburgerElement3 = document.querySelector(".hamburger-icon p:last-child");

    if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.toggle("hide");

        if (hamburgerElement1.classList.contains("rotate1")) {
            hamburgerElement1.classList.remove("rotate1")
            hamburgerElement3.classList.toggle("rotate2");
            hamburgerElement2.classList.toggle("display-none");

        }
    }
})
