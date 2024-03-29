const productsContainer = document.querySelector('#products-container');

async function getProducts()
{
    const response = await fetch ('./js/winter.json');

const productsArray = await response.json();


    render(productsArray);
}


getProducts();

function render(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = ` 
           <li class="sales">
                <figure>
                    <a href="page.html?id=${item.id}&collection=winter"><img src="${item.imgSrc}" alt="Фотография ${item.id}"></a>
                    <figcaption>${item.title}</figcaption>
                </figure>
            </li>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    });
}

