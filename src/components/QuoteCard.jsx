import React from 'react';


const QuoteCard = ({ card }) => (
  <figure className="QuoteCard">
    <img src={card.image} alt={card.character} />
    <figcaption>
      <blockquote>{card.quote}</blockquote>
      <cite>{card.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;

