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

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <LazyLoadImageComponent
        imageSource={logoMain}
        alt="Logo"
        className="logo-main"
      />

      <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-210} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-240} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="ClientList" smooth={true} offset={-230} duration={500}>
            Clients
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-290} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="btn-li">
          <Link
            to="contact"
            smooth={true}
            offset={-250}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
