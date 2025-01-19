import React from 'react';
import './styles/footer.css';
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Outstanding Interface</h3>
        <p>
          Design outstanding interface with advanced Figma features in a matter of minutes.
        </p>
        <div className="icons">
          <FaFacebook size={24} />
          <FaGoogle size={24} />
          <FaApple size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
      <div className="column">
        <h3>Star a Business</h3>
        <ul>
          <li>Features</li>
          <li>Solutions</li>
          <li>Integrations</li>
          <li>Enterprise</li>
          <li>Solutions</li>
        </ul>
      </div>
      <div className="column">
        <h3>Government Registration</h3>
        <ul>
          <li>Partners</li>
          <li>Community</li>
          <li>Developers</li>
          <li>App</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="column">
        <h3>Compliance & Tax</h3>
        <ul>
          <li>Channels</li>
          <li>Scales</li>
          <li>Watch the demo</li>
          <li>Our Compition</li>
        </ul>
      </div>
      <div className="column">
        <h3>Bis & CDSCO</h3>
        <ul>
          <li>About Us</li>
          <li>News</li>
          <li>Leadership</li>
          <li>Media Kit</li>
        </ul>
      </div>
      <div>
      &#169; 2024 RegisterKaro. All Rights Reversed.
      </div>
    </footer>
  );
};

export default Footer;
