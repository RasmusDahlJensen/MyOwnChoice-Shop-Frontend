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

const categoryButton = document.getElementById("dropdownButton");
const categoryModal = document.getElementById("categoryModal");

categoryButton.addEventListener("click", () => {
	if (categoryModal.style.display === "none") {
		categoryModal.style.display = "block";
		categoryModal.classList.add("slideStart");
	} else {
		categoryModal.style.display = "none";
		categoryModal.classList.remove("slideStart");
	}
});
