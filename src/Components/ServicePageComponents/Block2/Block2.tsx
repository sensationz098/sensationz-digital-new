import "./Block2Style.css";
import { Link } from "react-router-dom";

export default function Block2({ quote }: { quote: string }) {
  return (
    <div className="container stiff-block">
      <div className="box">
        <h3>{quote}</h3>
        <Link to="/">
          <button className="btn ">back to home</button>
        </Link>
      </div>
    </div>
  );
}
