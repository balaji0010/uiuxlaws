import React from "react";

const LawDetail = ({ law, onClose }) => {
  if (!law) return null;

  return (
    <div className="law-detail-overlay">
      <div className="law-detail">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{law.title}</h2>
        <div className="law-detail-content">
          <img src={law.image} alt={law.title} />
          <p>{law.explanation}</p>
          <h4>Examples:</h4>
          <ul>
            {law.examples.map((ex, idx) => <li key={idx}>{ex}</li>)}
          </ul>
          <h4>Real-world:</h4>
          <ul>
            {law.realworld.map((rw, idx) => <li key={idx}>{rw}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LawDetail;
