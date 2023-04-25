// import './style.css';
import printNavbar from './components/Navbar/Navbar';
import printHero from './components/Hero/Hero';
import printFilter from './components/Filter/Filter';
import printProductsGrid from './components/ProductsGrid/ProductsGrid';
import printFooter from './components/Footer/Footer';
import { products } from './utils/products';

// renderize all components
printNavbar();
printHero();
printFilter();
printProductsGrid(products);
printFooter();
