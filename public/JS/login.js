// FORM TOGGLING

let removeemail=document.getElementById('email');
let removephone=document.getElementById('phone');
let btnphone=document.getElementById('login-phone');
let btnemail=document.getElementById('login-email');
let email=document.querySelector('#email>input');
let phone=document.querySelector('#phone>input');
let password=document.querySelector('#password>input');
let submit=document.getElementById('submit');

btnphone.onclick=function(){
    removeemail.className="remove";
    removephone.className="input-field";
    btnphone.className="remove";
    btnemail.classList="input-field btn";
}

btnemail.onclick=function(){
    removeemail.className="input-field";
    removephone.className="remove";
    btnphone.className="input-field btn";
    btnemail.classList="remove";
}

submit.onclick = function(){
    if (email.value.split(" ").join("") == ""){
        
    }
}





// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;
