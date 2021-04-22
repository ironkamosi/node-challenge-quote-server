import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [quotesData, setQuotesData] = useState([]); // random
  const [searchTerm, setSearchTerm] = useState(""); // search term

  useEffect(() => {
    fetch(`http://localhost:3001/quotes/search?term=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setQuotesData(data);
      });
  }, [searchTerm]);

  const handleClick = () => {
    fetch("http://localhost:3001/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotesData(data);
      });
  };

  return (
    <div className="App">
      <NavBar data={handleClick} onSearch={setSearchTerm} />
      <header className="App-header">
        {Array.isArray(quotesData) ? (
          quotesData.map((quote) => {
            return (
              <>
                <blockquote>{quote.quote}</blockquote>
                <cite>{quote.author}</cite>
              </>
            );
          })
        ) : (
          <>
            <blockquote>{quotesData.quote}</blockquote>
            <cite>{quotesData.author}</cite>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
