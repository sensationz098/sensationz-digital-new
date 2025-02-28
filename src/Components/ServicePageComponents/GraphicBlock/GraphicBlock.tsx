import { useState } from "react";

import "./GraphicBlock.css"; // Import the CSS file
type gratphic = {
  imageLink: string;
}[];

interface GraphicBlockProps {
  graphicImage: gratphic;
}
export function GraphicBlock({ graphicImage }: GraphicBlockProps) {
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
}
