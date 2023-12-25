
// HEADER DROPDOWN 

const profileImg = document.querySelector("[data-header-dropdown] > figure");

profileImg.addEventListener("click", () => {
    let dropdown = document.querySelector("[data-header-dropdown-content]");

    dropdown.classList.toggle("hide");
})


document.addEventListener("click", (event) => {
    let dropdown = document.querySelector("[data-header-dropdown-content]");

    if (!profileImg.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hide");
    }
})


// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;