import { AlignJustify, House } from "lucide-react";
import "./webDesign.css";
import { WebData } from "../../constant";

type WebComp = {
  name: string;
  link: string;
  image: string;
};
function WebDesignComp(WebComp: WebComp) {
  return (
    <div className="stiff-block">
      <div className="tab">
        <div className="header">
          {/* <div> */}
          {/* </div> */}
          <div className="link-tab">
            <House className="icon" />
            <a href={WebComp.link}>{WebComp.link}</a>
            <AlignJustify className="icon" />
          </div>
          {/* <div> */}
          {/* </div> */}
        </div>

        <div className="tab-image">
          <img src={WebComp.image} alt="" loading="lazy" />
          <div className="overlay">
            <div className="text">{WebComp.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const WebDesign = () => {
  return (
    <div className="tabs-grid">
      {WebData.map((ind) => {
        return (
          <div key={ind.id}>
            <WebDesignComp image={ind.image} link={ind.link} name={ind.name} />
          </div>
        );
      })}
    </div>
  );
};
