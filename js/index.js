const scroll = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
	window.scrollY > 500
		? scroll.classList.add("visible")
		: scroll.classList.remove("visible");
});
