// let navbar = document.querySelectorAll('.navbar li');
// console.log(navbar);
// navbar[0].onclick=function(){
//     navbar[0].className="active";
// }




// FOOTER COPYRIGHT YEAR DISPLAY

let foot=document.getElementById('foot');
let date=new Date();
let year=date.getFullYear();
foot.innerHTML=year;