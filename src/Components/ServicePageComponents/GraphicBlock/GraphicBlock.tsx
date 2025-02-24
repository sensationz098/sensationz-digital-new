import { useState } from "react";
import { graphicImage } from "../../../constant";
import "./GraphicBlock.css"; // Import the CSS file

export const GraphicBlock = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);
  return (
    <>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Modal" />
        </div>
      )}
      <div className="graphic-grid stiff-block">
        {graphicImage.map(({ imageLink }, index) => (
          <div key={index} className="graphic-item">
            <div onClick={() => setSelectedImage(imageLink)}>
              <img
                src={imageLink}
                alt="gallery-photo"
                className="graphic-image"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
