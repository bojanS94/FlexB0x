//Hover functions

let profileBox = document.querySelector(".user-nav__user");
let userInfo = document.querySelector(".user-nav__info");
let galleryBox = document.querySelectorAll(".gallery__item");
let galleryTxt = document.querySelectorAll(".gallery__text");

profileBox.addEventListener('mouseenter', () => {

    userInfo.style.top = "100%";
    userInfo.style.zIndex = "10";

});

profileBox.addEventListener('mouseleave', () => {

    userInfo.style.top = "90%";
    userInfo.style.zIndex = "-1";

});

galleryBox.forEach(el => {


})