import './Filter.css';
import { sellers, products } from '../../utils/products';
import printProductsGrid from '../ProductsGrid/ProductsGrid';

const template = `
<span>FILTER</span>
<img class="filter-bar__x" id="filter-bar__x"src="https://grovemade.com/static/img/icons/x.svg?_v=1500009016.84" alt="Close button" aria-label="Close Filter">
<div class="filter__menu-mobile" id="filter__menu-mobile">
<select id="seller-select">
  ${sellers.map((seller) => `<option value=${seller} >${seller}</option>`)}
</select>
<br>
<input type="number" placeholder="Max. price $" id="maxprice-filter">
<button id="filter-search">Search</button>
<br>
<button id="clean-filter">Clean Filters</button>
</div>
    `;

const listeners = () => {
  const filterBar = document.querySelector('#filter');
  const filterMenuMobile = document.querySelector('#filter__menu-mobile');
  const select = document.querySelector('#seller-select');
  const maxpriceInput = document.querySelector('#maxprice-filter');
  const filterButton = document.querySelector('#filter-search');
  const clearFiltersButton = document.querySelector('#clean-filter');

  filterBar.onclick = () => {
    if (filterMenuMobile.style.display === 'none') {
      filterMenuMobile.style.display = 'block';
    } else {
      filterMenuMobile.style.display = 'none';
    }
  };

  select.onchange = (e) => {
    const filteredSeller = e.target.value;
    if (filteredSeller === 'All') {
      printProductsGrid(products);
    } else {
      const filteredProducts = products.filter((product) => product.seller === filteredSeller);
      printProductsGrid(filteredProducts);
    }
  };

  filterButton.onclick = () => {
    const maxPrice = maxpriceInput.value;
    if (!maxPrice) {
      printProductsGrid(products);
    } else {
      const filteredProducts = products.filter((product) => product.price <= maxPrice);
      printProductsGrid(filteredProducts);
    }
  };

  clearFiltersButton.onclick = () => {
    // reset all filter values
    select.value = 'All';
    maxpriceInput.value = null;

    // reset product shown
    printProductsGrid(products);
  };
};

const printFilter = () => {
  document.querySelector('#filter').innerHTML = template;
  listeners();
};

export default printFilter;
