//Hover functions
let profileBox = document.querySelector(".user-nav__user");
let userInfo = document.querySelector(".user-nav__info");
let galleryBox = document.querySelectorAll(".gallery__item");
let galleryTxt = document.querySelectorAll(".gallery__text");

let hoverEnter = () => {
    let styles = {
        top: "100%",
        zIndex: 99
    };
    Object.assign(userInfo.style, styles);
}

let hoverLeave = () => {
    let styles = {
        top: "80%",
        zIndex: -1
    };
    Object.assign(userInfo.style, styles);
}
profileBox.addEventListener('mouseenter', hoverEnter);
profileBox.addEventListener('mouseleave', hoverLeave);