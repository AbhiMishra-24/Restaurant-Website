
// PRELOAD -> loading will end after document is loaded.

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


// TOGGLE MENU THROUGH HAMBURGER ICON.
let hamburger = document.querySelector(".hamburger-icon");

hamburger.addEventListener("click", () => {
    let hamburgerElement1 = document.querySelector(".hamburger-icon p:first-child");
    let hamburgerElement2 = document.querySelector(".hamburger-icon p:nth-child(2)");
    let hamburgerElement3 = document.querySelector(".hamburger-icon p:last-child");

    let menu = document.querySelector("[data-menu]")

    hamburgerElement1.classList.toggle("rotate1");
    hamburgerElement3.classList.toggle("rotate2");
    hamburgerElement2.classList.toggle("display-none");

    menu.classList.toggle("hide");
});





// TOGGLE MENU BUTTON.

let menuBtn = document.querySelectorAll(".menu > button");

if (menuBtn) {

    menuBtn.forEach(btn => {
        btn.addEventListener("click", (event) => {

            let menu = document.querySelector("[data-menu-wrapper]")

            let showMenuBtn = document.querySelector("[data-show-menu]");
            let closeMenuBtn = document.querySelector("[data-close-menu]");

            showMenuBtn.classList.toggle("hide");
            closeMenuBtn.classList.toggle("hide");

            menu.classList.toggle("hide");
        })
    })
}


// DOCUMENT.

document.addEventListener("click", (event) => {

    // MENU 

    if (menuBtn) {

        let menu = document.querySelector("[data-menu-wrapper]");

        let showMenuBtn = document.querySelector("[data-show-menu]");
        let closeMenuBtn = document.querySelector("[data-close-menu]");

        if (!menu.contains(event.target) && !showMenuBtn.contains(event.target)) {
            menu.classList.add("hide");
            showMenuBtn.classList.remove("hide");
            closeMenuBtn.classList.add("hide");
        }

    }

})



// SEARCHING ITTEM

let searchbarInput = document.getElementById("searchbar")

searchbarInput.addEventListener("keyup", (event) => {

    var inputValue = event.target.value.split(' ').join('');
    inputValue = inputValue.toLowerCase();

    let menu = document.querySelectorAll(".search-dropdown-menu a");

    menu.forEach(item => {
        var itemsInMenu = item.innerText.split(' ').join('').toLowerCase();

        item.classList.add("hide");

        document.querySelector("[data-no-item]").classList.add("hide");

        if (inputValue === '') {
            let categoryName = document.querySelectorAll("[data-each-category]");

            for (var i=0; i<categoryName.length; i++) {
                categoryName[i].classList.remove("hide");
            }

        } else {

            var found = itemsInMenu.search(inputValue);

            if (found > -1) {
                item.classList.remove("hide");
            }

            // check if dropdown has any element after search.

            let check = document.querySelectorAll(".search-dropdown-menu a.hide");

            if (check.length === menu.length) {
                document.querySelector("[data-no-item]").classList.remove("hide");
            }
        }
    })
})



// CAROUSEL

const carousel = () => {
    const itemsList = document.querySelector(".carousel-wrapper .items-list");
    const slideButtons = document.querySelectorAll(".carousel-wrapper .slide-button");

    const maxScrollLeft = itemsList.scrollWidth - itemsList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {

            const direction = button.id === "prev" ? -0.4 : 0.4;

            const scrollAmount = itemsList.clientWidth * direction;

            itemsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        })
    })


    // hiding the buttons.
    itemsList.addEventListener("scroll", () => {
        handleSlideButtons();
    })

    const handleSlideButtons = () => {

        // console.log(maxScrollLeft, itemsList.scrollLeft);

        slideButtons[0].style.display = itemsList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = itemsList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

}

window.addEventListener("load", carousel);
