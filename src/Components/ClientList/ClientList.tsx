import { useState } from "react";
import "./ClientListStyle.css";

// pics

import { brand1, brand2, brand3, brand4, brand5, down, up } from "../../assets";
import { data, data2 } from "../../constant";

type ClientListPropsType = {
  src: string;
  name: string;
  instaHandle?: string;
  link: string;
};

function ClientListElement({
  src,
  name,
  instaHandle,
  link,
}: ClientListPropsType) {
  return (
    <a href={link} target="_blank">
      <div className="list">
        <div className="imgBox">
          <img src={src} alt="" className="list-img" />
        </div>
        <div className="content">
          <h4>{name}</h4>
          <p>{instaHandle}</p>
        </div>
      </div>
    </a>
  );
}

export default function ClientList() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="ClientList stiff-block">
        <div className="clientListContainer">
          <div className="list-1">
            <div className="client-box">
              <h3 className="client-title">social media handling</h3>

              {data.map((ind) => (
                <ClientListElement
                  key={ind.id}
                  link={`https://www.instagram.com/${ind.insta}`}
                  src={ind.image}
                  name={`${ind.name}`}
                  instaHandle={`@${ind.insta}`}
                />
              ))}

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                {data2.map((ind) => (
                  <ClientListElement
                    key={ind.id}
                    link={`https://www.instagram.com/${ind.insta}`}
                    src={ind.image}
                    name={ind.name}
                    instaHandle={`@${ind.insta}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="list-2">
            <div className="client-box">
              <h3 className="client-title">Brand Promotion</h3>

              <ClientListElement
                link=""
                src={brand1}
                name={"Virendra Sharma"}
              />
              <ClientListElement link="" src={brand2} name={"Shivani"} />
              <ClientListElement link="" src={brand3} name={"Bina Kedia"} />
              <ClientListElement link="" src={brand4} name={"Car Vegas"} />

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                <ClientListElement link="" src={brand5} name={"P5"} />
              </div>
            </div>
          </div>
        </div>
        <div className="viewBtn">
          <button className="btn dark-btn" onClick={() => setToggle(!toggle)}>
            View {toggle ? "More" : "Less"}
            <span>
              <img src={toggle ? down : up} alt="" className="arrows" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
