import './footer.css';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <footer id="mainFooter">
      
      {/* Logo */}
      <section className="logo">
        <img src="./logo-vert.png" alt="Little Lemon Logo"/>
      </section>

      {/* Site Map */}
      <section className="sitemap">
        <h3>Sitemap</h3>

        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="menu">Menu</Link></li>
          <li><Link to="reservations">Reservations</Link></li>
          <li><Link to="online-orders">Order Online</Link></li>
          <li><Link to="auth">Login</Link></li>
        </ul>
      </section>

      {/* Contact Us */}
      <section className="contact">
        <h3>Contact Us</h3>

        <ul>
          <li>
            <span className="md-icon">location_on</span> <span>439 N Wells St, Chicago, IL 60654</span>
          </li>
          <li>
            <span className="md-icon">phone_iphone</span> (312) 828-9800
          </li>
          <li>
            <span className="md-icon">mail</span> contact@littlelemon.com
          </li>
        </ul>
      </section>

      {/* Lets connect */}
      <section className="connect">
        <h3>Let&apos;s Connect</h3>

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
         <img src="./img/social-icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
         <img src="./img/social-icons/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
         <img src="./img/social-icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
         <img src="./img/social-icons/youtube.png" alt="Youtube" />
        </a>
        
      </section>
    </footer>
  )
}

export default Footer;
