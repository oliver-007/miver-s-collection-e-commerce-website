// -----------navigation bar js  ---------

const burger = document.getElementById("burger");
const navUl = document.querySelector("nav ul");

burger.addEventListener("click", () => {
    navUl.classList.toggle("show");
});

// --------- single product js -----------

const productImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("smallImg");

smallImg[0].addEventListener("click", () => {
    productImg.src = smallImg[0].src;
});

smallImg[1].addEventListener("click", () => {
    productImg.src = smallImg[1].src;
});

smallImg[2].addEventListener("click", () => {
    productImg.src = smallImg[2].src;
});

smallImg[3].addEventListener("click", () => {
    productImg.src = smallImg[3].src;
});