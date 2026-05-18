const menuBtn = document.querySelector(".navbar-t");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});