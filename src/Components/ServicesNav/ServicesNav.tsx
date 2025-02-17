import "./ServicesNavStyle.css";
import { useState } from "react";
import { logoMain, MenuIcon } from "../../assets";
import { Link } from "react-router-dom";

export default function ServicesNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <div className={`nav container`}>
      <div className="NavLogoCover">
        <Link to="/">
          <img src={logoMain} className="logo-main" alt="" />
        </Link>
      </div>

      <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
      <div className="top-links">
        <ul className={`top-links-ul ${mobileMenu ? "" : "hide-mobile-menu"}`}>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/servies/seo"}>
            <li>S.E.O</li>
          </Link>
          <Link to={"/services/webdesigning"}>
            <li>Web Designing</li>
          </Link>
          <Link to={"/services/graphicdesigning"}>
            <li>Graphic Designing</li>
          </Link>
          <Link to={"/services/videoediting"}>
            <li>Video Editing</li>
          </Link>
          <Link to={"/services/socialmediamanagement"}>
            <li>Social Media Management</li>
          </Link>
          <Link to={"/services/brandpromotion"}>
            <li>Brand Promotion</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
