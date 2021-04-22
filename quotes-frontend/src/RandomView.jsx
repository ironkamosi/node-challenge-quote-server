import React, { useState, useEffect } from "react";

const RandomView = () => {
  const [quotesData, setQuotesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotesData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <blockquote>{quotesData.quote}</blockquote>
        <cite>{quotesData.author}</cite>
      </header>
    </div>
  );
};

export default RandomView;
