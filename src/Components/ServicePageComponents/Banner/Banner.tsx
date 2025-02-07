import "./BannerStyle.css";
export default function Banner({ bannerImg }: { bannerImg: string }) {
  return (
    <div className="banner-cover">
      <img src={bannerImg} alt="" className="banner-img" />
    </div>
  );
}
