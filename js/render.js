const productsContainer = document.querySelector('#products-container');

async function getProducts()
{
    const response = await fetch ('./js/winter.json');
console.log(response);

const productsArray = await response.json();
console.log(productsArray);

    render(productsArray);
}


getProducts();

function render(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = ` 
           <div class="sales">
                <figure>
                    <a href="page.html"><img src="${item.imgSrc}" alt="Фотография ${item.id}"></a>
                    <figcaption>${item.title}</figcaption>
                </figure>
            </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    });
}

