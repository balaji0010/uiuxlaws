import React from "react";

const LawCard = ({ law, onClick }) => {
  return (
    <div className="law-card" onClick={() => onClick(law.id)}>
      <img src={law.image} alt={law.title} />
      <h3>{law.title}</h3>
      <p>{law.short}</p>
    </div>
  );
};

export default LawCard;
