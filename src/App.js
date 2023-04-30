import './App.css';
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


function App() {
  // states
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  
  // fetch quotes 
  async function fetchData() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    console.log(data[0]);
    setQuotes(data);
    setQuote(data[0]);
  }
  useEffect(() => {
    fetchData();
    }, []);
  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }
  return (
    <>
    <h1>
      Project 3: Quote Generator
    </h1>
    <div className='container'>
    <div className='quoteBox'>
      <button onClick={getNewQuote}>
        New Quote
      </button>
      <h3>
        {quote?.text}
      </h3>
      <p>
        {quote?.author}
      </p>
    </div>
    </div>
    </>
  );
}
// "https://type.fit/api/quotes"
export default App;


