
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


// ABOUT US -> READ MORE 

let readMoreBtn = document.getElementById("readMoreBtn");

if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
        let textToShow = document.getElementsByClassName("more-aboutus-text");
        
        for (var i=0; i<textToShow.length; i++){
            textToShow[i].classList.toggle("display-none");
        }
        
        readMoreBtn.classList.add("display-none");
    })
}




// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;