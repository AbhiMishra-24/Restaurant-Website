// TOGGLE HAMBURGER ICON

let hamburger = document.querySelector(".hamburger-icon");
let hamburgerElement1 = document.querySelector(".hamburger-icon>p:first-child");
let hamburgerElement2 = document.querySelector(".hamburger-icon>p:nth-child(2)");
let hamburgerElement3 = document.querySelector(".hamburger-icon>p:last-child");

hamburger.addEventListener("click", () => {
    hamburgerElement1.classList.toggle("rotate1");
    hamburgerElement3.classList.toggle("rotate2");
    hamburgerElement2.classList.toggle("display-none");
});



// PROFILE PHOTO

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let urlInput = document.getElementById("url");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);

    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
        urlInput.value = reader.result;
        // console.log(reader.result);
    }
}



// COPYRIGHT YEAR

let copyright = document.querySelector("#copyright-year");

const year = new Date().getFullYear();

copyright.innerHTML = year;