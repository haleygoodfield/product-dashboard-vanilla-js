// Task 1: Task 1: Set Up the Project Structure (done in HTML)

// Task 2: Task 2: Fetch Products with .then()
function fetchProductsThen () {  // create a function fetchProductsThen()
    fetch('https://www.course-api.com/javascript-store-products') // Uses fetch() to get product data
    .then(response => { // Uses .then to get product data
        if (!response.ok) {
            throw new Error('Fetch products has failed');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(products => {
        products.forEach(product => {
            console.log(`${product.fields.name}`); // Logs each product’s name to the console.
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // uses .catch() to log any errors.
    });
};

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() { // create another function fetchProductsAsync() that uses async to fetch product data
    try { // uses try to fetch product data
        const response = await fetch('https://www.course-api.com/javascript-store-products'); // uses await to fetch product data
        const products = await response.json(); // Parse the response as JSON
        displayProducts(products); // Calls a helper function displayProducts(products) to render products to the page
    } catch (error) { // uses catch to fetch product data
        handleError(error); // if an error occurs, passes it to handleError(error)
    }
};

// d.f.im[0].url
// data field image


// Task 4: Display the Products
function displayProducts(products) { // Write a function displayProducts(products)
    const container = document.getElementById('product-container'); // Selects #product-container
    container.innerHTML = '';

    products.slice(0, 5).forEach(product => { // loops through the first 5 products
        const { name, price, image } = product.fields; // creates HTML elements to show each product’s name, price, and image

        const div = document.createElement('div'); // creates the container for product
        div.className = 'product';
        div.innerHTML = `
            <img src ="${image[0].url}" alt ="${name}">
            <h2>${name}</h2>
            <p>$${(price / 100).toFixed(2)}</p> `;
        container.appendChild(div); // appends them to the container.
    });
};

// Task 5: Reusable Error Handler
function handleError(error) { // create a function handleError(error)
    console.log(`An error occured: ${error.message}`) // Logs "An error occurred: " followed by the error message
};

// Task 6: Call Your Fetch Functions
fetchProductsThen(); // at the bottom of cc_16.js call these
fetchProductsAsync();


