const loginModalButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");

loginModalButton.addEventListener("click", () => {
	if (loginModal.style.display === "none") {
		loginModal.style.display = "block";
		loginModal.classList.add("slideStart");
	} else {
		loginModal.style.display = "none";
		loginModal.classList.remove("slideStart");
	}
});
