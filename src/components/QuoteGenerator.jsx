import React, { useState, useEffect } from 'react';

function  QuoteGenerator() {
  // State to store the quote and author
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote
  const randomQuote = () => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((data) => {
        // Check if data is valid and not null
        if (data && data.quotes && data.quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.quotes.length);
          setQuote(data.quotes[randomIndex].quote);
          setAuthor(data.quotes[randomIndex].author);
        }
      })
      .catch((error) => console.log('Error fetching the quote:', error));
  };

  // useEffect to fetch the first quote when the component mounts
  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <>
      <div className="container">
        <header>A New Quote Everyday</header>
        <div className="content">
          <div className="quote-content">
            <i className="fa-solid fa-quote-left"></i>
            <p className="quote">{quote}</p>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <div className="author">
            <span>_</span>
            <span className="author-name">{author}</span>
          </div>
        </div>
        <div className="buttons">
          <div className="features">
            <ul>
              <li className="sound">
                <i className="fa-solid fa-volume-high"></i>
              </li>
              <li className="copy">
                <i className="fa-solid fa-copy"></i>
              </li>
            </ul>
            <button onClick={randomQuote}>Next Quote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;