import { useState } from "react";
import "./ClientListStyle.css";

// Add the arrays

type ClientListPropsType = {
  id: number;
  image: string;
  name: string;
  username: string;
  link: string;
};

function ClientListElement({
  image,
  name,
  username,
  link,
}: ClientListPropsType) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="list  kl">
        <div className="imgBox">
          <img src={image} alt="" className="list-img" />
        </div>
        <div className="content">
          <h4>{name}</h4>
          <p>{username}</p>
        </div>
      </div>
    </a>
  );
}

export default function ClientList1({
  brandPromo,
}: {
  brandPromo: ClientListPropsType[];
}) {
  const [showAll, setShowAll] = useState(false);

  // Toggle the state when the button is clicked
  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  // Determine how many items to show based on the `showAll` state
  const displayedItems = showAll ? brandPromo : brandPromo.slice(0, 10);

  return (
    <>
      <div className="list-2 stiff-block">
        <div className="client-box">
          <div className="ko">
            {displayedItems.map((ind) => (
              <div key={ind.id}>
                <ClientListElement
                  id={ind.id}
                  image={ind.image}
                  name={ind.name}
                  username={ind.username}
                  link={ind.link}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
        </div>
        <div className="viewBtn">
          <button
            onClick={handleViewAllClick}
            className="client-box btn dark-btn view-all-btn"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </>
  );
}
