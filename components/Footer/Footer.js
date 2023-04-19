import './Footer.css';

const template = `
  <div class="footer-row">
  <section>
    <ul class="footer-menu">
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/shop/"
          >Shop</a
        >
      </li>
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/explore/"
          >About</a
        >
      </li>
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/journal/"
          >Journal</a
        >
      </li>
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/support/"
          >Support</a
        >
      </li>
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/covid-19-update/"
          >COVID-19 Info</a
        >
      </li>
      <li>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://grovemade.com/support/order-status/"
          >Order Status</a
        >
      </li>
    </ul>
  </section>
  <section class="newsletter">
    <h5>Newsletter Signup</h5>
    <p class="subtitle secondary">
      Sign up to our Newsletter to hear about new product releases, learn about our design
      process, and everything else going on behind the scenes at Grovemade.
    </p>
    <form action="" class="newsletter-email">
      <input
        type="text"
        required
        placeholder="Enter your Email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        aria-label="Join our Newsletter by entering your email"
      />
      <button type="submit">SUBMIT</button>
    </form>
  </section>
</div>
<section class="footer-other-links">
  <div class="social-media">
    <a
      rel="nofollow noopener noreferrer"
      class="social-media__link"
      target="_blank"
      href="https://www.facebook.com/grovemade"
      ><img
        src="https://grovemade.com/static/img/icons/facebook.svg?_v=1502333300.56"
        alt="Facebook Profile"
    /></a>
    <a
      rel="nofollow noopener noreferrer"
      class="social-media__link"
      target="_blank"
      href="https://instagram.com/grovemade"
      ><img
        src="https://grovemade.com/static/img/icons/instagram.svg?_v=1502333300.56"
        alt="Instagram Profile"
    /></a>
    <a
      rel="nofollow noopener noreferrer"
      class="social-media__link"
      target="_blank"
      href="https://www.linkedin.com/company/grove-llc/"
      ><img
        src="https://grovemade.com/static/img/icons/linkedin.svg?_v=1525642239.94"
        alt="linkedin Profile"
    /></a>
  </div>
  <div class="copyright-links">
    <p>©2020 Grovemade</p>
    <a
      href="https://grovemade.com/support/policies/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      >Terms & Conditions</a
    >
    <a
      href="https://grovemade.com/privacy-policy/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      >Privacy Policy</a
    >
  </div>
  <div class="website-author">
    <p>
      Made with 💖 by
      <a
        href="https://github.com/daniArbesu"
        target="_blank"
        rel="nofollow noopener noreferrer"
        >Daniel Arbesú</a
      >
    </p>
  </div>
</section>
    `;

const printFooter = () => {
  document.querySelector('#footer').innerHTML = template;
};

export default printFooter;
