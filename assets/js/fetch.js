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
		productArray.map((product) => contentRender(product));
	});

// //Specific product
// let productNum = 1;

// //Endpoint
// const productEndpoint = `http://localhost:4000/product/${productNum}`;
// fetch(productEndpoint)
// 	.then((result) => result.json())
// 	.then((data) => console.log(data));

function contentRender(data) {
	if (data.categoryId === 1) {
        console.log(data);
    }
}
