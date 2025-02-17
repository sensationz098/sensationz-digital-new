import "./Block1Style.css";

type Block1PropsType = {
  leftImg: string;
  title: string;
  para1: string;
  para2: string;
};

export default function Block1({
  leftImg,
  title,
  para1,
  para2,
}: Block1PropsType) {
  return (
    <div className="container mainBlock stiff-block">
      <div className="leftBlock">
        <img src={leftImg} alt="" />
      </div>
      <div className="rightBlock">
        <h1>Sensationz</h1>
        <h3 className="title-block1">{title}</h3>
        <br />
        <p>{para1}</p>
        <br />
        <p>{para2}</p>
      </div>
    </div>
  );
}
