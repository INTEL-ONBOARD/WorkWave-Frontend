import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardDeck = () => {
  const cards = [
    {
      imageSrc: "https://via.placeholder.com/600x300",
      profileSrc: "profile-url.jpg",
      authorName: "Denis",
      title: "I will professionally edit your travel video",
      text: "I will professionally edit your travel video",
      rating: "5.0",
      price: "From $8.15",
      linkTo: `/marketplace/${encodeURIComponent("denis")}`,
      cardDetails: {
        imageSrc: "https://via.placeholder.com/600x300",
        title: "I will professionally edit your travel video",
        text: "I will professionally edit your travel video",
        price: "$8.15",
        authorName: "Denis",  // Include authorName here
      }
    },
    // Add other cards similarly
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Link
          to={card.linkTo}
          state={card.cardDetails}
          key={index}
        >
          <Card
            imageSrc={card.imageSrc}
            profileSrc={card.profileSrc}
            authorName={card.authorName}
            title={card.title}
            text={card.text}
            rating={card.rating}
            price={card.price}
            linkTo={card.linkTo}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardDeck;
