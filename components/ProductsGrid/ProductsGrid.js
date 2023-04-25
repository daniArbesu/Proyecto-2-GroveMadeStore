import './ProductsGrid.css';

const template = (products) => {
  return ` 
  <h3>The Walnut Desk Collection</h3>
  <section id="products-grid" class="products-grid">
  ${products
    .map(
      ({ name, price, image, imageHover, newProduct }) => `
      <article class="shop-product">
                ${newProduct ? '<div class="shop-product__badge">NEW</div>' : ''}
                  <a
                    href="#"
                    rel="nofollow noopener noreferrer"
                  >
                    <figure class="shop-product__img">
                      <img
                        src=${image}
                        alt=${name}
                        class="shop-product-main"
                      />
                      <img
                        src=${imageHover}
                        alt=${name}
                        class="shop-product-alternative"
                      />
                    </figure>
                    <div class="shop-product__description">
                      <h4>${name}</h4>
                      <p>$${price}</p>
                    </div>
                  </a>
                </article>
          `
    )
    .join('')}
    </section>
    `;
};

const printProductsGrid = (products) => {
  document.querySelector('#products').innerHTML = template(products);
};

export default printProductsGrid;
