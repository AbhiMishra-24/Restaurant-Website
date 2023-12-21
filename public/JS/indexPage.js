
// PRELOAD -> loading will end after document is loaded.

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


// TOGGLE SEARCHBAR

let searchIcon = document.querySelector("[data-search-icon]");

searchIcon.addEventListener("click", () => {
    let searchDropdown = document.querySelector("[data-search-dropdown]");

    searchDropdown.classList.toggle("hide");
});


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


// TOGGLE PROFILE ICON.

let profileIcon = document.querySelector("[data-profile-icon-dropdown]");

profileIcon.addEventListener("click", () => {
    navbar.classList.toggle("hide");
})


// TOGGLE MENU BUTTON.

let menuBtn = document.querySelectorAll(".menu > button");

menuBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {

        let menu = document.querySelector("[data-menu-wrapper]")

        let showMenuBtn = document.querySelector("[data-show-menu]");
        let closeMenuBtn = document.querySelector("[data-close-menu]");

        showMenuBtn.classList.toggle("hide");
        closeMenuBtn.classList.toggle("hide");

        menu.classList.toggle("hide");
    });
});


// DOCUMENT.

document.addEventListener("click", (event) => {

    // HAMBURGER

    let hamburgerElement1 = document.querySelector(".hamburger-icon p:first-child");
    let hamburgerElement2 = document.querySelector(".hamburger-icon p:nth-child(2)");
    let hamburgerElement3 = document.querySelector(".hamburger-icon p:last-child");

    // SEARCH DROPDOWN

    let searchDropdown = document.querySelector("[data-search-dropdown]");

    // MENU 

    let menu = document.querySelector("[data-menu-wrapper]");

    let showMenuBtn = document.querySelector("[data-show-menu]");
    let closeMenuBtn = document.querySelector("[data-close-menu]");


    if (!hamburger.contains(event.target) && !navbar.contains(event.target) && !profileIcon.contains(event.target) ) {

        navbar.classList.add("hide");

        if (hamburgerElement1.classList.contains("rotate1")) {
            hamburgerElement1.classList.remove("rotate1");
            hamburgerElement3.classList.remove("rotate2");
            hamburgerElement2.classList.remove("display-none");

        }
    }

    if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
        searchDropdown.classList.add("hide");
    }

    if (!menu.contains(event.target) && !showMenuBtn.contains(event.target)) {
        menu.classList.add("hide");
        showMenuBtn.classList.remove("hide");
        closeMenuBtn.classList.add("hide");
    }
    
})



// SEARCHING ITTEM

let searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keyup", (event) => {

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

            const direction = button.id === "prev" ? -0.9 : 0.9;

            const scrollAmount = itemsList.clientWidth * direction;

            itemsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        })
    })


    // hiding the buttons.
    // itemsList.addEventListener("scroll", () => {
    //     handleSlideButtons();
    // })

    // const handleSlideButtons = () => {

    //     // console.log(maxScrollLeft, itemsList.scrollLeft);

    //     slideButtons[0].style.display = itemsList.scrollLeft <= 0 ? "none" : "flex";
    //     slideButtons[1].style.display = itemsList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    // }

}

window.addEventListener("load", carousel);


// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;
