let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

let popup = document.getElementById("popup");

function openbox(){
    popup.classList.add("open-box");
}
function closebox(){
    popup.classList.remove("open-box");
}