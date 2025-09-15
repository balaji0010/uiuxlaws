import React, { useState } from "react";
import { lawsData } from "./data/LawsData";
import LawCard from "./components/LawCard";
import LawDetail from "./components/LawDetail";
import "./App.css";

const App = () => {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const handleCardClick = (id) => {
    const law = lawsData.find((l) => l.id === id);
    setSelectedLaw(law);
  };

  const closeDetail = () => setSelectedLaw(null);

  return (
    <div className="app-container">
      <h1>UI/UX Laws & Color Psychology</h1>
      <div className="law-grid">
        {lawsData.map((law) => (
          <LawCard key={law.id} law={law} onClick={handleCardClick} />
        ))}
      </div>

      {selectedLaw && <LawDetail law={selectedLaw} onClose={closeDetail} />}
    </div>
  );
};

export default App;
