import './Filter.css';
import { sellers, products } from '../../utils/products';
import printProductsGrid from '../ProductsGrid/ProductsGrid';

let FILTEREDSELLER = '';
let MAXPRICE = 1000;

const template = `
<div class="filter-bar" id="filter-bar">
<span>FILTER</span>
<img class="filter-bar__x" id="filter-bar__x"src="https://grovemade.com/static/img/icons/x.svg?_v=1500009016.84" alt="Close button" aria-label="Close Filter">
</div>
<div class="filter__menu" id="filter__menu">
<select id="seller-select" class="seller-select">
  ${sellers.map((seller) => `<option value=${seller} >${seller}</option>`)}
</select>
<input type="number" placeholder="Max. price $" id="maxprice-filter">
<button id="filter-search" class="cta">Search</button>
<button id="clean-filter" class="cta">Clean Filters</button>
</div>
    `;

const listeners = () => {
  const filterBar = document.querySelector('#filter-bar');
  const filterBarX = document.querySelector('#filter-bar__x');
  const filterMenuMobile = document.querySelector('#filter__menu');
  const select = document.querySelector('#seller-select');
  const maxpriceInput = document.querySelector('#maxprice-filter');
  const filterButton = document.querySelector('#filter-search');
  const clearFiltersButton = document.querySelector('#clean-filter');

  filterBar.onclick = () => {
    if (filterMenuMobile.style.display === 'none') {
      filterMenuMobile.style.display = 'flex';
      filterBarX.style.transform = 'rotate(90deg)';
    } else {
      filterMenuMobile.style.display = 'none';
      filterBarX.style.transform = 'rotate(45deg)';
    }
  };

  select.onchange = (e) => {
    FILTEREDSELLER = e.target.value;
    if (FILTEREDSELLER === 'All') {
      printProductsGrid(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.seller === FILTEREDSELLER && product.price <= MAXPRICE
      );
      printProductsGrid(filteredProducts);
    }
  };

  filterButton.onclick = () => {
    MAXPRICE = maxpriceInput.value;
    if (!MAXPRICE) {
      printProductsGrid(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.seller === FILTEREDSELLER && product.price <= MAXPRICE
      );
      printProductsGrid(filteredProducts);
    }
  };

  clearFiltersButton.onclick = () => {
    // reset all filter values
    select.value = 'All';
    FILTEREDSELLER = 'All';
    maxpriceInput.value = null;
    MAXPRICE = 1000;

    // reset product shown
    printProductsGrid(products);
  };
};

const printFilter = () => {
  document.querySelector('#filter').innerHTML = template;
  listeners();
};

export default printFilter;
