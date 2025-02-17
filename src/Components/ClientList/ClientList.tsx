import { useState } from "react";
import "./ClientListStyle.css";

// pics
import { down, up } from "../../assets";
import { data, data2, brandPromo, brandPromo2 } from "../../constant";

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

function ClientListElement1({ src, name, instaHandle }: ClientListPropsType) {
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      {/* Add the modal component */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Modal" />
        </div>
      )}

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

              {/* <ClientListElement
                link=""
                src={brand1}
                name={"Virendra Sharma"}
              />
              <ClientListElement link="" src={brand2} name={"Shivani"} />
              <ClientListElement link="" src={brand3} name={"Bina Kedia"} />
              <ClientListElement link="" src={brand4} name={"Car Vegas"} /> */}
              {brandPromo.map((ind) => (
                <div key={ind.id}>
                  <div onClick={() => setSelectedImage(ind.image)}>
                    <ClientListElement1
                      link=""
                      src={ind.image}
                      name={ind.name}
                    />
                  </div>
                </div>
              ))}
              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                {brandPromo2.map((ind) => {
                  {
                    return (
                      <div onClick={() => setSelectedImage(ind.image)}>
                        <ClientListElement1
                          key={ind.id}
                          link=""
                          src={ind.image}
                          name={ind.name}
                        />
                      </div>
                    );
                  }
                })}
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
