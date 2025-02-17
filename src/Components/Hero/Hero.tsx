import { MessageCircleMore } from "lucide-react";
import "./HeroStyle.css";
import { HeroTagLine } from "../../constant/index";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text hero-block">
        <h1>welcome</h1>
        <h3>to</h3>
        <h1 className="last-line">sensationz digital</h1>
        <p>{HeroTagLine}</p>
        <a href={import.meta.env.VITE_WHATSAPP_API} target="blank_">
          <button className="btn btn-wp">
            <span>
              <MessageCircleMore style={{ color: "black" }} />
            </span>
            Chat on whatsapp
          </button>
        </a>
      </div>
    </div>
  );
}
