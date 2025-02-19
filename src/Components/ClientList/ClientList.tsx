import { useState } from "react";
import "./ClientListStyle.css";

// pics

// Add these interfaces
interface BrandPromo {
  id: number;
  name: string;
  image: string;
}

// Add the arrays

type ClientListPropsType = {
  src: string;
  name: string;
  instaHandle?: string;
  link: string;
};

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
export default function ClientList({
  brandPromo,
}: {
  brandPromo: BrandPromo[];
}) {
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

      <div className="list-2">
        <div className="client-box">
          {/* Make the grid responsive */}
          <div className="ko">
            {brandPromo?.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div onClick={() => setSelectedImage(ind.image)}>
                  <ClientListElement1 link="" src={ind.image} name={ind.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
