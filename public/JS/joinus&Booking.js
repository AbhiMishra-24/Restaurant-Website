
// TOGGLE PROFILE DROPDOWN

let profileImg = document.getElementById("profileImg");
let dropdownContent = document.querySelector(".dropdown .dropdown-content");

if (profileImg) {
    profileImg.addEventListener("click", () => {
        dropdownContent.classList.toggle("display-none");
    })
    
    document.addEventListener("click", (event) => {
        
        if (!profileImg.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.add("display-none");
        }
    })
}

// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;