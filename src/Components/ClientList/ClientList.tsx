import { useState } from "react";
import "./ClientListStyle.css";

// pics

import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  down,
  up,
} from "../../assets";

type ClientListPropsType = {
  src: string;
  name: string;
  instaHandle?: string;
};

function ClientListElement({ src, name, instaHandle }: ClientListPropsType) {
  return (
    <div className="list">
      <div className="imgBox">
        <img src={src} alt="" className="list-img" />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>{instaHandle}</p>
      </div>
    </div>
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

              <ClientListElement
                src={client1}
                name={"Shveta Sharma"}
                instaHandle={"@ahaana_holistichealing"}
              />
              <ClientListElement
                src={client2}
                name={"Naira Sri"}
                instaHandle={"@cutiekuhoo"}
              />
              <ClientListElement
                src={client3}
                name={"Virender Sharma"}
                instaHandle={"@virendersharmababa_ji"}
              />
              <ClientListElement
                src={client4}
                name={"Glance Fire & Safety"}
                instaHandle={"@glanceenterprise"}
              />

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                <ClientListElement
                  src={client5}
                  name={"Suchitha joshi"}
                  instaHandle={"@p5yoga_wellness"}
                />
                <ClientListElement
                  src={client6}
                  name={"Aiman Mehtab"}
                  instaHandle={"@thetribeofhealing"}
                />
                <ClientListElement
                  src={client7}
                  name={"Durvam's Diary"}
                  instaHandle={"@durvasumedha"}
                />
                <ClientListElement
                  src={client8}
                  name={"Dr. Mukesh Kumar"}
                  instaHandle={"@urocaredrmukeshkumarvijay"}
                />
                <ClientListElement
                  src={client9}
                  name={"Adit Sinha"}
                  instaHandle={"@aditsinhashow"}
                />
                <ClientListElement
                  src={client10}
                  name={"Avi Sinha"}
                  instaHandle={"@avisinhashow"}
                />
                <ClientListElement
                  src={client11}
                  name={"Yuva 4 Life"}
                  instaHandle={"@yuva4life.in"}
                />
                <ClientListElement
                  src={client12}
                  name={"Shveta sharma"}
                  instaHandle={"@shvetazworld"}
                />
                {/* <ClientListElement
                  src={client13}
                  name={"NUB'S"}
                  instaHandle={"@nubs_nitika_"}
                /> */}
              </div>
            </div>
          </div>

          <div className="list-2">
            <div className="client-box">
              <h3 className="client-title">Brand Promotion</h3>

              <ClientListElement src={brand1} name={"Virendra Sharma"} />
              <ClientListElement src={brand2} name={"Shivani"} />
              <ClientListElement src={brand3} name={"Bina Kedia"} />
              <ClientListElement src={brand4} name={"Car Vegas"} />

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                <ClientListElement src={brand5} name={"P5"} />
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
