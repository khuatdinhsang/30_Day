// const products = document.querySelector('.products')
// const filter = document.getElementById('filter')
// const listItems = []

// getData()

// filter.addEventListener('input', (e) => filterData(e.target.value))

// async function getData() {
// 	const res = await fetch('https://fakestoreapi.com/products')

// 	const results = await res.json()

// 	// Clear products
// 	products.innerHTML = ''

// 	results.forEach((product) => {
// 		const div = document.createElement('div')
// 		div.setAttribute('class', 'product')
// 		listItems.push(div)

// 		div.innerHTML = `
// 			<img src="${product.image}" alt="">
// 			<div class="product-detail">
// 				<h4>${product.title.slice(0, 30)}</h4>
// 				<p>$${product.price}</p>
// 			</div>
//         `

// 		products.appendChild(div)
// 	})
// }

// function filterData(search) {
// 	listItems.forEach((item) => {
// 		if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
// 			item.classList.remove('hide')
// 		} else {
// 			item.classList.add('hide')
// 		}
// 	})
// }

// do data
var mockData = fetch('https://fakestoreapi.com/products')
    .then(res => {
        return res.json();
    })
    .then(data => {
        var products = document.querySelector('.products');
        products.innerHTML = ''
        data.forEach((item) => {
            var newProduct = document.createElement('div')
            newProduct.classList.add('product')
            newProduct.innerHTML = `
			<img src="${item.image}" alt="">
					<div class="product-detail">
						<h4>${item.title}</h4>
						<p>${item.price}</p>
					</div>
			`

            products.appendChild(newProduct);
        })
    })

var searchInput = document.querySelector('.form-input input')
searchInput.addEventListener('input', function(e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDOM = document.querySelectorAll('.product');
    listProductDOM.forEach(function(item) {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})