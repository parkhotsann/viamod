const productsContainer = document.querySelector('#products-container');

async function getProducts()
{
    const response = await fetch ('./js/[age].json');
    console.log(response);

    const productsArray = await response.json();
    console.log(productsArray);

    render(productsArray);
}


getProducts();

function render(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = ` `;
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    });
}

