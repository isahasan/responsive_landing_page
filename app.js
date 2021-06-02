const manu = document.querySelector("#mobile-manu");
const manuLinks = document.querySelector(".navbar__manu");

manu.addEventListener("click", () => {
	manu.classList.toggle("is-active");
	manuLinks.classList.toggle("active");
});
