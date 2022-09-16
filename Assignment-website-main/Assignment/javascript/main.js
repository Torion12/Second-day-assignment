const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const active = document.querySelectorAll(".menu-item");


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
})

active.forEach( n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	menu.classList.remove("active");
}))