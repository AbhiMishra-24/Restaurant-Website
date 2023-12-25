
// SEARCHBAR DROPDOWN TOGGLE THORUGH SEARCH ICON

let searchIcon = document.querySelector("[data-search-icon]");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        let searchDropdown = document.querySelector("[data-search-dropdown]");

        searchDropdown.classList.toggle("hide");
    })
}


// TOGGLE SEARCH DROPDOWN MENU THROUGH SEARCHBAR --> BIG SCREEN

let searchbar = document.querySelector("[data-search-dropdown]");

if (window.innerWidth > 600 && searchbar) {
    searchbar.addEventListener("click", () => {
        let searchDropdownMenu = document.querySelector("[data-search-dropdown-menu]");

        searchDropdownMenu.classList.toggle("hide");
    })
}


// TOGGLE NAVBAR THROUGH PROFILE ICON.

let profileIcon = document.querySelector("[data-profile-icon-dropdown]");

if (profileIcon) {
    profileIcon.addEventListener("click", () => {
        let navbar = document.querySelector("[data-navbar]");
        
        navbar.classList.remove("hide");
    })    
}



document.addEventListener("click", (event) => {

    // SEARCH DROPDOWN HIDE

    if (searchIcon) {
        let searchDropdown = document.querySelector("[data-search-dropdown]");

        if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.classList.add("hide");
        }
    }

    // HIDE SEARCH DROPDOWN MENU WHEN SCREEN-SIZE >= 601px
    
    if (window.innerWidth > 600 && searchbar) {
        let searchDropdownMenu = document.querySelector("[data-search-dropdown-menu]");

        if (!searchDropdownMenu.contains(event.target) && !searchbar.contains(event.target) ) {
            searchDropdownMenu.classList.add("hide");
        }
    }

    // NAVBAR HIDE

    if (profileIcon) {
        let navbar = document.querySelector("[data-navbar]");

        if (!profileIcon.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.add("hide");
        }
    }

})


// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;