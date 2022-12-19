const linkList = document.querySelectorAll(".navbarLink");
linkList.forEach((link) => {
	link.addEventListener("click", (event) => {
		directToCatPage(event.currentTarget.id);
	});
});

const directToCatPage = (categoryId) => {
	let category = categoryId;
	localStorage.setItem("category", category);
	window.location.href = "/assets/pages/categoryPage.html";
};
