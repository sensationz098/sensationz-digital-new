import "./FooterStyle.css";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot1">
        <div className="foot1-1">
          <Link
            to="https://www.instagram.com/sensationzdigital/"
            target="_blank"
          >
            <li>
              <Instagram className="social" />
            </li>
          </Link>
          <Link
            to="https://www.facebook.com/people/Sensationz-Digital/61557248046281/"
            target="_blank"
          >
            <li>
              <Facebook className="social" />
            </li>
          </Link>
        </div>
        <div className="foot1-2">
          <Link to="/PrivacyPolicy">
            <li className="privacy">Privacy Policy</li>
          </Link>
        </div>
      </div>

      <div className="foot2">
        <p>
          © {new Date().getFullYear()} Sensationz Media & Arts Pvt. Ltd. | All
          rights reserved
        </p>
      </div>
    </div>
  );
}
