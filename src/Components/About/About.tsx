import "./AboutStyle.css";
import { aboutImg } from "../../assets";

import { AboutCompHeading, firstPara, secondPara } from "../../constant";
import LazyLoadImageComponent from "../LazyLoadImage";

export default function About() {
  return (
    <div className="about stiff-block">
      <div className="about-left">
        <LazyLoadImageComponent
          imageSource={aboutImg}
          className="about-img"
          alt="three people"
        />
      </div>
      <div className="about-right">
        <h2>{AboutCompHeading}</h2>
        <p>{firstPara}</p>
        <p>{secondPara}</p>
      </div>
    </div>
  );
}
