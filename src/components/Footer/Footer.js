import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footer_column">
        <h1>
          TRUVI<span>MONS</span>
        </h1>
        <ul className="first_column">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className="footer_icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="footer_icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="footer_icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <h1>PRODUCT</h1>
        <ul>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Compare</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <h1>ABOUT US</h1>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Press Release</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <h1>LEARN MORE</h1>
        <ul>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">Get Started Guide</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
