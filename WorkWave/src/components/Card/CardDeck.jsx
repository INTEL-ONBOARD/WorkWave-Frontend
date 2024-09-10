import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardDeck = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8083/api/ListService/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Link
          to={`/marketplace/${encodeURIComponent(service.freelancerId)}`}
          state={{
            imageSrc: service.coverImage ? `data:image/jpeg;base64,${service.coverImage}` : 'https://via.placeholder.com/600x300',
            title: service.title,
            text: service.miniDescription,
            price: service.price, // Pass the price as a number, no formatting
            authorName: service.freelancerId, // Adjust with actual author data if available
            description: service.description, // Pass the description to CardDetail
            id: service.id, // Pass the id but keep it hidden in CardDetail
            freelancerId: service.freelancerId, // Pass freelancerId but keep it hidden in CardDetail
          }}
          key={index}
        >
          <Card
            imageSrc={service.coverImage ? `data:image/jpeg;base64,${service.coverImage}` : 'https://via.placeholder.com/600x300'}
            profileSrc="profile-url.jpg" // Placeholder, adjust if you have author profile data
            authorName={service.freelancerId} // Adjust if you have actual author names
            title={service.title}
            text={service.miniDescription}
            rating="5.0" // Replace with actual rating data if available
            price={`$${service.price}`} // Display formatted price here
          />
        </Link>
      ))}
    </div>
  );
};

export default CardDeck;
