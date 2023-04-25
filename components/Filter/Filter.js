import './Filter.css';
import { sellers } from '../../utils/products';

const template = `
<span>FILTER</span>
<img class="filter-bar__x" src="https://grovemade.com/static/img/icons/x.svg?_v=1500009016.84" alt="Close button" aria-label="Close Filter">
<div class="filter__menu-mobile">
<select name="select">
  <option value="all" selected>All</option>
  ${sellers.map((seller) => `<option value=${seller} >${seller}</option>`)}
</select>
<br>
<input type="number">
<button>Search</button>
<br>
<button>Clean Filters</button>
</div>
    `;

const printFilter = () => {
  document.querySelector('#filter').innerHTML = template;
};

export default printFilter;
