import './ProductsGrid.css';

const template = `
<article class="shop-product">
            <a
              href="#"
              rel="nofollow noopener noreferrer"
            >
              <figure class="shop-product__img">
                <img
                  src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-magsafe-dock-grid-A2.jpg%3F_v%3D1620162209.66?auto=format&ixlib=python-1.1.2&w=900&s=33560c81386dedc0016f6fd1b799c781"
                  alt="Walnut MagSafe Stand"
                  class="shop-product-main"
                />
                <img
                  src="https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fwalnut-magsafe-dock-grid-B2.jpg%3F_v%3D1620162209.66?auto=format&ixlib=python-1.1.2&w=900&s=ce6d616652b5986325b69264f3aee881"
                  alt="Walnut MagSafe Stand Alternative"
                  class="shop-product-alternative"
                />
              </figure>
              <div class="shop-product__description">
                <h4>Walnut MagSafe Stand</h4>
                <p>$155</p>
              </div>
            </a>
          </article>
    `;

const printProductsGrid = () => {
  document.querySelector('#products-grid').innerHTML = template;
};

export default printProductsGrid;
