import './Hero.css';

const template = `
<h1>Design Inspires What You Do</h1>
    `;

const printHero = () => {
  document.querySelector('#hero').innerHTML = template;
};

export default printHero;
