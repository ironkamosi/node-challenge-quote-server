import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
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
        <header className="App-header">
          <p>{quotesData.quote}</p>
          <h5>{quotesData.author}</h5>
        </header>
      </header>
    </div>
  );
}

export default App;
