import './Filter.css';
import { sellers, products } from '../../utils/products';
import printProductsGrid from '../ProductsGrid/ProductsGrid';

const template = `
<span>FILTER</span>
<img class="filter-bar__x" src="https://grovemade.com/static/img/icons/x.svg?_v=1500009016.84" alt="Close button" aria-label="Close Filter">
<div class="filter__menu-mobile">
<select id="seller-select">
  ${sellers.map((seller) => `<option value=${seller} >${seller}</option>`)}
</select>
<br>
<input type="number">
<button>Search</button>
<br>
<button>Clean Filters</button>
</div>
    `;

const listeners = () => {
  const select = document.querySelector('#seller-select');

  select.onchange = (e) => {
    const filteredSeller = e.target.value;
    const filteredProducts = products.filter((product) => product.seller === filteredSeller);
    printProductsGrid(filteredProducts);
  };
};

const printFilter = () => {
  document.querySelector('#filter').innerHTML = template;
  listeners();
};

export default printFilter;
