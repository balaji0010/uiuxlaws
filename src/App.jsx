import React, { useState } from "react";
import { lawsData } from "./data/LawsData";
import LawCard from "./components/LawCard";
import LawDetail from "./components/LawDetail";
import "./App.css";

const App = () => {
  const [selectedLaw, setSelectedLaw] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentLaws = lawsData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(lawsData.length / itemsPerPage);

  const handleCardClick = (id) => {
    const law = lawsData.find((l) => l.id === id);
    setSelectedLaw(law);
  };

  const closeDetail = () => setSelectedLaw(null);

  return (
    <div className="app-container">
      <h1>UI/UX Laws</h1>

      {/* Grid of laws */}
      <div className="law-grid">
        {currentLaws.map((law) => (
          <LawCard key={law.id} law={law} onClick={handleCardClick} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Law detail modal */}
      {selectedLaw && <LawDetail law={selectedLaw} onClose={closeDetail} />}
    </div>
  );
};

export default App;
