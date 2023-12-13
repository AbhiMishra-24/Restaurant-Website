// SEARCHING ITEM

var input = document.getElementById('search');
let category = document.querySelectorAll('#menu-section div>ul>a');
let catcontainer = document.getElementsByClassName('container');
let searchmenu = document.querySelector('.searchmenu');
let searchmenuitems = searchmenu.getElementsByTagName('li');
let button = document.getElementsByClassName('food-button');
let dropdown = document.getElementsByClassName('food-dropdown');

let j, k, l;
let b;
let i;
// console.log(searchmenuitems)

// ADDING AVAILABLE FOOD ITEMS INTO THE SEARCH DROPDOWN MENU

for (k = 0; k < category.length; k++) {
    let menu = catcontainer[k].getElementsByTagName('li');
    searchmenu.innerHTML += `<li><a href="#` + category[k].innerHTML.split(" ").join("").toLowerCase() + `">` + category[k].innerHTML + `</li>`;
    for (l = 0; l < menu.length; l++) {
        searchmenu.innerHTML += `<li><a href="#` + category[k].innerHTML.split(" ").join("").toLowerCase() + `">` + menu[l].innerHTML + `</li>`;
    }
}

// DISPLAY OFF WHEN NO SEARCH INPUT

for (l = 0; l < searchmenuitems.length; l++) {
    searchmenuitems[l].className = "remove";
}

// ADDING AVAILABLE FOOD ITEMS INTO FOOD DROP OR MAIN DISPLAY

let fooditems = document.getElementById('food-items');

for (k = 0; k < category.length; k++) {
    fooditems.innerHTML += `<div id="` + category[k].innerHTML.split(" ").join("").toLowerCase() + `">`;
}

let fooditemsinner = document.querySelectorAll('#food-items>div');
for (k = 0; k < fooditemsinner.length; k++) {
    fooditemsinner[k].innerHTML = `<button class="food-items" onclick="togglefood(` + k + `)">` + category[k].innerHTML + `</button>\n<div class="food-dropdown active">\n</div>`;
}

for (k=0; k<dropdown.length; k++){
    let menu=catcontainer[k].getElementsByTagName('li');
    for (l=0; l<menu.length; l++){
        dropdown[k].innerHTML += `<div></div>`;
    }
}

// ADDING IMAGE, ITEM NAME, PRICE TAG, AND ADD TO CART TO THE MENU ITEMS

let indiitems = document.querySelectorAll('.food-dropdown>div');
let menulistitems=document.querySelectorAll('.container li');

for (k=0; k<indiitems.length; k++){
    indiitems[k].innerHTML += `<img src="../BackgroundImages/bkcdkjs (1).jpg" alt="">\n<p>` + menulistitems[k].innerHTML + `</p>\n<p>&#8377 _____</p>\n<button>add to cart</button>`;
}

// FOOD DISPLAY TOGGLE

function togglefood(n) {
    if (dropdown[n].classList.contains('active')) {
        dropdown[n].className = "food-dropdown remove";
    }
    else {
        dropdown[n].classList = "food-dropdown active";
    }
}

// SHOWING ONLY SEARCHED ITEM IN DROPDOWN

function searchfor() {
    for (j = 0; j < searchmenuitems.length; j++) {
        b = searchmenuitems[j];
        if (input.value.split(" ").join("") == "") {
            b.className = "remove";
        }

        else if (b.getElementsByTagName('a')[0].innerHTML.split(" ").join("").toUpperCase().indexOf(input.value.split(" ").join("").toUpperCase()) > -1) {
            b.className = ""; 
        }

        else {
            b.className = "remove";
        }
    }

}

// ADDING THE ELEMNT TO CART

// let addtocartbutton=document.querySelectorAll('.food-dropdown button');
// let insidecart=document.getElementById('insidecartitems');
// let addingimg=document.querySelectorAll('.food-dropdown img');
// let itemcount=document.getElementsByClassName('itemcountsummary')[0];

// let insideelent=insidecart.getElementsByTagName('p');

// function addtocart(n){
//     for (k=0; k<addtocartbutton.length; k++){
//         if (k==n){
//             check = document.getElementById('n');
//             if (check) {
//                 itemcount.innerHTML = (itemcount.innerHTML+1);
//             }
//             else {
//                 insidecart.innerHTML += `<p id="` + n +`">`+ (n+1) + `</p>`;
//                 itemcount.innerHTML = (itemcount.innerHTML+1);

//             }
//         }
//     }
// }


// OPENING AND CLOSING OF SEARCH DROPDOWN MENU ONLCICK

// input.onclick = function () {
//     if (searchmenu.classList.contains('notactive')) {
//         searchmenu.className = "searchmenu menupopup";
//     }
//     else {
//         searchmenu.className = "searchmenu notactive";
//     }
// }

// CART TOGGLE

let cart = document.getElementById('cart');
let blur = document.getElementById('blur');
let cartitems = document.getElementById('cart-items');
let yourcart = document.getElementsByClassName('your-cart');
cart.onclick = function () {
    if (cart.classList.contains('active')) {
        blur.className = "";
        cartitems.className = "";
        yourcart[0].className = "your-cart closing";
        cart.className = "";
    }
    else {
        blur.className = "blured";
        cartitems.className = "open";
        yourcart[0].className = "your-cart opening";
        cart.className = "active";
    }

}

// OPENING AND CLOSING OF MENU

let menubutton = document.querySelector('#menu-section>h2>button');
let menudropdown = document.getElementsByClassName('menu-dropdown');

menubutton.onclick = function () {
    if (menudropdown[0].classList.contains('active')) {
        menudropdown[0].className = 'menu-dropdown remove';
    }
    else {
        menudropdown[0].className = 'menu-dropdown active';
    }
}


// FOOTER COPYRIGHT YEAR DISPLAY

// let foot=document.getElementById('foot');
// let date=new Date();
// let year=date.getFullYear();
// foot.innerHTML=year;