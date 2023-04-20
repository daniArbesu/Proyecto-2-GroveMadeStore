import './Navbar.css';

const template = `
<button id="navbar__menu" class="navbar__menu" type="button">
<img src="./public/menu_black_24dp.svg" alt="menu button" />
</button>
<div class="navbar-menu-desktop">
<a href="https://grovemade.com/shop/" rel="nofollow noopener noreferrer" target="_blank"
  >SHOP</a
>
<a href="https://grovemade.com/explore/" rel="nofollow noopener noreferrer" target="_blank"
  >EXPLORE</a
>
</div>
<a href="/" rel="noopener noreferrer">
<img src="public/logo.png" alt="grovemade logo" class="navbar__logo" />
</a>
<a href="/" class="navbar__cart" rel="nofollow noopener noreferrer">MY CART</a>
    `;

const printNavbar = () => {
  document.querySelector('#navbar').innerHTML = template;
};

export default printNavbar;
