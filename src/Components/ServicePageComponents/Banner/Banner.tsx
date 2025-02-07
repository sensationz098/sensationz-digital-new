import "./BannerStyle.css";
import { bannerImg } from "../../../assets";

export default function Banner() {
  return (
    <div className="banner-cover">
      <img src={bannerImg} alt="" className="banner-img" />
    </div>
  );
}
