import './Filter.css';

const template = `
<span>FILTER</span>
<img class="filter-bar__x" src="https://grovemade.com/static/img/icons/x.svg?_v=1500009016.84" alt="Close button" aria-label="Close Filter">
    `;

const printFilter = () => {
  document.querySelector('#filter').innerHTML = template;
};

export default printFilter;
