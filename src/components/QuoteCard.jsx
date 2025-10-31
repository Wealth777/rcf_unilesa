import React from 'react';
import '../styles/componentsStyle/QuoteCard.css';

const quotes = [
  {
    id: 1,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
    imageUrl: "",
  },
  {
    id: 2,
    author: "Elon Musk",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    imageUrl: "",
  },
  {
    id: 2,
    author: "Elon Musk",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    imageUrl: "",
  },
  {
    id: 2,
    author: "Elon Musk",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    imageUrl: "",
  },
];

export default function QuoteCard() {
  return (
    <section className="quote-carousel">
      <h2 className="carousel-title">Inspiring Quotes</h2>
      <div className="carousel-container">
        {quotes.map((item) => (
          <div key={item.id} className="quote-card">
            <div className="quote-image">
              <img src={item.imageUrl} alt={item.author} />
              <div className="overlay">
                <button className="details-btn">View Quote</button>
              </div>
            </div>

            <div className="quote-content">
              <p className="quote-text">“{item.quote}”</p>
              <h3 className="quote-author">— {item.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

