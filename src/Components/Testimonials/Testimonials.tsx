import "./TestimonialsStyle.css";
import { clientImage1, clientImage2, clientImage3 } from "../../assets";

import CardTest from "../CardTest/CardTest";

export default function Testimonials() {
  return (
    <div className="testimonials stiff-block">
      <div className="section1">
        <CardTest
          name={"Adi Sinha"}
          image={clientImage1}
          to={"https://www.facebook.com/reel/790279912242501"}
          test={
            "I would like to thank sensationz for handling my accounts and I refer you to use their services..."
          }
        />
        <CardTest
          name={"Shetal Maynak"}
          image={clientImage2}
          to={"https://www.youtube.com/watch?v=h_c5ZlBcNaw"}
          test={
            "I have taken yearly membership for my workshop promotions and earned profits within 1st month..."
          }
        />
        <CardTest
          name={"Client Screen Shots"}
          image={clientImage3}
          to={
            "https://www.instagram.com/reel/C-7n6DLSryD/?igsh=cHZoMnJkY3hhMnkx"
          }
          test={
            "A shot video showing our happy client expressing their gratitude..."
          }
        />
      </div>
    </div>
  );
}
