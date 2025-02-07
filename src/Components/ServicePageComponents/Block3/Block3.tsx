import "./Block3Style.css";
import { TiTick } from "react-icons/ti";

type Block3PropsType = {
  block3Title: string;
  block3para: string;
  li1: string;
  li2: string;
  li3: string;
  rightImg: string;
};

export default function Block3({
  block3Title,
  block3para,
  li1,
  li2,
  li3,
  rightImg,
}: Block3PropsType) {
  return (
    <div className="container box1 stiff-block">
      <div className="left">
        <h1>{block3Title}</h1>
        <p>{block3para}</p>
        <ul>
          <li>
            <span>
              <TiTick />
            </span>
            {li1}
          </li>
          <li>
            <span>
              <TiTick />
            </span>
            {li2}
          </li>
          <li>
            <span>
              <TiTick />
            </span>
            {li3}
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={rightImg} alt="" />
      </div>
    </div>
  );
}
