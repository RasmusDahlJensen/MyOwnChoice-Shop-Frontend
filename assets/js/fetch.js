/**Categories:
 * 
Laptops -1

Smartphones -2

Smartwatches -3

Monitor - 4
 */

//Fetch API list
const endpoint = "http://localhost:4000/product/list";

//Our array for storage
let productArray = [];
//Fetch data
fetch(endpoint)
	.then((result) => result.json())
	.then((data) => productArray.push(...data))
	.catch((error) => console.error(error))
	.finally(() => {
		// productArray.map((product) => contentRender(product));
		sortFunction(productArray);
		console.log(productArray[1].categoryId);
	});

//Picking out an entirely random product to highlight on the frontpage
let productNum = Math.floor(Math.random() * 23);
//Endpoint
const productEndpoint = `http://localhost:4000/product/${productNum}`;
fetch(productEndpoint)
	.then((result) => result.json())
	.then((data) => highlightProduct(data));

//highlight function
const highlightProduct = (product) => {
	const container = document.getElementById("highlightProduct");
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

//Sorts the most popular products from review amount
function sortFunction(data) {
	const sortedProducts = data.sort((p1, p2) =>
		p1.reviewAmount < p2.reviewAmount
			? 1
			: p1.reviewAmount > p2.reviewAmount
			? -1
			: 0
	);
	//After the products have been sorted the new array gets sent to the next function
	renderBestSellers(sortedProducts);
}

//This function renders 6 of the most popular products onto the page
const renderBestSellers = (products) => {
	//Grab container ID
	const bestSellersContainer = document.getElementById("bestsellerProducts");
	for (let i = 0; i < 6; i++) {
		//Destructure assignment
		let { name, image, description, price, categoryId } = products[i];

		bestSellersContainer.innerHTML += `
		<div class='productCard category${categoryId}'>
		<img src="${image}">
			<h2>${name}</h2>
			<div class="thumbnailDesc"><p>${description}</p></div>
				<div class="cardFlex">
					<div class="thumbnailPrice"><p>Kr ${price}</p></div>
				</div>
		</div>
		`;
	}
};
