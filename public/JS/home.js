
// TOGGLE HAMBURGER ICON & MENU SECTION

let menuSection = document.querySelector(".menu-section");

let hamburger = document.querySelector(".hamburger-icon");

let hamburgerElement1 = document.querySelector(".hamburger-icon p:first-child");
let hamburgerElement2 = document.querySelector(".hamburger-icon p:nth-child(2)");
let hamburgerElement3 = document.querySelector(".hamburger-icon p:last-child");

hamburger.addEventListener("click", () => {
    hamburgerElement1.classList.toggle("rotate1");
    hamburgerElement3.classList.toggle("rotate2");
    hamburgerElement2.classList.toggle("display-none");

    menuSection.classList.toggle("menu-display-none");
});


// ADVERTISEMENT SLIDER

const advertisementSlider = () => {
    const itemsList = document.querySelector(".items-wrapper .items-list");
    const slideButtons = document.querySelectorAll(".items-wrapper .slide-button");

    const maxScrollLeft = itemsList.scrollWidth - itemsList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {

            const direction = button.id === "prev-slide" ? -0.5 : 0.5;
            const scrollAmount = itemsList.clientWidth * direction;

            itemsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        })
    })


    // hiding the buttons.
    itemsList.addEventListener("scroll", () => {
        handleSlideButtons();
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = itemsList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = itemsList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
}

window.addEventListener("load", advertisementSlider);



// SEARCH DROPDOWN.

let searchbarWrapper = document.getElementById("searchbar-wrapper");

searchbarWrapper.addEventListener("click", () => {
    let searchDropdown = document.getElementsByClassName("search-dropdown");

    searchDropdown[0].classList.remove("display-none");
});

document.addEventListener("click", (event) => {
    let searchDropdown = document.getElementsByClassName("search-dropdown");

    if (!searchbarWrapper.contains(event.target) && !searchDropdown[0].contains(event.target)) {
        searchDropdown[0].classList.add("display-none");
    }
})



// SEARCHING ITTEM

let searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keyup", (event) => {

    var inputValue = event.target.value.split(' ').join('');
    inputValue = inputValue.toLowerCase();

    console.log("value is :" + inputValue);

    let menu = document.querySelectorAll(".search-dropdown-content > a");
    let dropdownWrapper = document.getElementsByClassName("search-dropdown");



    menu.forEach(item => {
        var itemsInMenu = item.innerText.split(' ').join('').toLowerCase();

        item.classList.add("display-none");

        document.getElementsByClassName("no-item-found-msg")[0].classList.add("display-none");

        if (inputValue === '') {
            let categoryName = document.getElementsByClassName("category-name-indropdown");

            for (var i=0; i<categoryName.length; i++) {
                categoryName[i].classList.remove("display-none");
            }

            console.log(categoryName);

        } else {

            var found = itemsInMenu.search(inputValue);

            if (found > -1) {
                item.classList.remove("display-none");
                dropdownWrapper[0].classList.remove("display-none");
            }

            // check if dropdown has any element after search.

            let check = document.querySelectorAll(".search-dropdown-content > a.display-none");

            if (check.length === menu.length) {
                document.getElementsByClassName("no-item-found-msg")[0].classList.remove("display-none");
            }
        }
    })
})
