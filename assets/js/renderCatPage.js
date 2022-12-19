//get ID from localstorage
let category = localStorage.getItem("category");

//Fetch API list
const endpoint = "http://localhost:4000/product/list";

//Our array for storage
let productArray = [];

const fetchData = () => {
	//Fetch data
	fetch(endpoint)
		.then((result) => result.json())
		.then((data) => productArray.push(...data))
		.catch((error) => console.error(error))
		.finally(() => {
			loopProducts(productArray);
		});
};

renderCategory = (product) => {
	const container = document.getElementById("categoryProducts");
	let { name, image, description, price, categoryId } = product;

	container.innerHTML += `
	<div class='productCard category${categoryId}'>
	<img src="${image}">
		<h2>${name}</h2>
		<div class="thumbnailDesc"><p>${description}</p></div>
			<div class="cardFlex">
				<div class="thumbnailPrice"><p>Kr ${price}</p></div>
			</div>
	</div>
	`;
};

const loopProducts = (product) => {
	for (let i = 0; i < product.length; i++) {
		if (product[i].categoryId === catId) {
			renderCategory(product[i]);
		}
	}
};

let catId;
if (category === "Laptops") {
	catId = 1;
	fetchData();
} else if (category === "Smartphones") {
	catId = 2;
	fetchData();
} else if (category === "Smartwatches") {
	catId = 3;
	fetchData();
} else if (category === "Monitors") {
	catId = 4;
	fetchData();
} else {
	console.error("Category ID not matched", catId);
}

let title;
if (category === "Laptops") {
	title = "Bærbar";
} else if (category === "Smartphones") {
	//hm
	title = category;
} else if (category === "Smartwatches") {
	title = category;
} else if (category === "Monitors") {
	title = "Skærme";
} else {
	console.error("Can't find title", title, category);
}
const categoryTitle = (document.getElementById("categoryTitle").innerHTML =
	title);
