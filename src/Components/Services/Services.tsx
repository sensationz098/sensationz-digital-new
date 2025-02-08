type ServicesPropsType = {
  img: string;
  to: string;
  capImg: string;
  caption: string;
};

import "./ServicesStyle.css";

import {
  programIcon1,
  programIcon2,
  programIcon3,
  seo,
  webDesign,
  graphicDesign,
  videoEditing,
  socialMedia,
  brandPromo,
} from "../../assets";
import LazyLoadImageComponent from "../LazyLoadImage";

function Service({ img, capImg, caption, to }: ServicesPropsType) {
  return (
    <div className="service stiff-block">
      <LazyLoadImageComponent imageSource={img} alt="image" />
      <a href={to}>
        <div className="caption">
          <LazyLoadImageComponent imageSource={capImg} alt="image" />
          <p>{caption}</p>
        </div>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <div className="services">
        <Service
          img={seo}
          to={"/services/seo"}
          capImg={programIcon1}
          caption={"S.E.O"}
        />
        <Service
          img={webDesign}
          to={"/services/webdesigning"}
          capImg={programIcon2}
          caption={"Web Designing"}
        />
        <Service
          img={graphicDesign}
          to={"/services/graphicdesigning"}
          capImg={programIcon3}
          caption={"Graphic Designing"}
        />
      </div>

      <div className="services">
        <Service
          img={videoEditing}
          to={"/services/videoediting"}
          capImg={programIcon1}
          caption={"Video Editing"}
        />
        <Service
          img={socialMedia}
          to={"/services/socialmediamanagement"}
          capImg={programIcon2}
          caption={"Social Media Management"}
        />
        <Service
          img={brandPromo}
          to={"/services/brandpromotion"}
          capImg={programIcon3}
          caption={"Brand Promotion"}
        />
      </div>
    </>
  );
}
