import { useState } from "react";
import "./ClientListStyle.css";

// Add the arrays

type ClientListPropsType = {
  id: number;
  image: string;
  name: string;
  username: string;
};

function ClientListElement({ image, name, username }: ClientListPropsType) {
  return (
    <div className="list  kl">
      <div className="imgBox">
        <img src={image} alt="" className="list-img" />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>{username}</p>
      </div>
    </div>
  );
}

export default function ClientList1({
  brandPromo,
}: {
  brandPromo: ClientListPropsType[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);
  // Toggle the state when the button is clicked

  // Determine how many items to show based on the `showAll` state
  return (
    <>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Modal" />
        </div>
      )}
      <div className="list-2 stiff-block">
        <div className="client-box">
          <div className="ko">
            {brandPromo.map((ind) => (
              <div key={ind.id} onClick={() => setSelectedImage(ind.image)}>
                <ClientListElement
                  id={ind.id}
                  image={ind.image}
                  name={ind.name}
                  username={ind.username}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
        </div>
        <div className="viewBtn"></div>
      </div>
    </>
  );
}
