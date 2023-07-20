import "./Header.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [mobile, setMobile] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  function closeNav() {
    setMobile(true);
  }
  function openNav() {
    setMobile(false);
  }

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className={isScrolling ? "activeNav" : ""}>
        <div className="nav_logo">
          <a href="#">
            TRUVI<span>MONS</span>
          </a>
        </div>
        <div className="nav_items">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className="open_nav" icon={faBars} onClick={openNav} />
        <div className={`nav_mobile ${mobile ? "mobile_close" : ""}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className="close_nav"
            onClick={closeNav}
          />
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header_info">
        <h1>Ultimate Data Analyse Platform</h1>
        <p>
          We help to create SaaS product that are innovative, differentiated
          with a superb User Experience, fully accessible through mobile
          devices. SaaS products are changing the world.
        </p>
        <div className="header_buttons">
          <button className="active">Start Now</button>
          <button>Explore More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
