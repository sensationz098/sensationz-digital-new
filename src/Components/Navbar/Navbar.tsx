import "./NavbarStyle.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { logoMain, MenuIcon } from "../../assets";
import LazyLoadImageComponent from "../LazyLoadImage";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  // Close the mobile menu when overlay is clicked
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <LazyLoadImageComponent
        imageSource={logoMain}
        alt="Logo"
        className="logo-main"
      />
      <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu} />

      {/* Overlay (only visible when mobile menu is open) */}
      {mobileMenu && <div className="overlay" onClick={closeMenu}></div>}

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="services" smooth={true} offset={-210} duration={500}>
          <li>Services</li>
        </Link>
        <Link to="about" smooth={true} offset={-240} duration={500}>
          <li>About Us</li>
        </Link>

        <Link to="testimonials" smooth={true} offset={-290} duration={500}>
          <li>Testimonials</li>
        </Link>
        <Link to="contact" smooth={true} offset={-250} duration={500}>
          <li className="btn-li btn">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
