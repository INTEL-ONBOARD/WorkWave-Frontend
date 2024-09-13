import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardDeck = ({ searchQuery, category, serviceOptions, sellerDetails, budget, deliveryTime }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8083/api/ListService/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
        setFilteredServices(data); // Initialize filtered services
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter services based on search and filters
  useEffect(() => {
    let filtered = services;

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter((service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (category) {
      filtered = filtered.filter((service) => service.category === category);
    }

    // Apply additional filters like service options, seller details, budget, and delivery time
    if (serviceOptions) {
      filtered = filtered.filter((service) => service.serviceOptions === serviceOptions);
    }
    if (sellerDetails) {
      filtered = filtered.filter((service) => service.sellerDetails === sellerDetails);
    }
    if (budget) {
      // Add logic to filter based on budget range
    }
    if (deliveryTime) {
      // Add logic to filter based on delivery time
    }

    setFilteredServices(filtered);
  }, [services, searchQuery, category, serviceOptions, sellerDetails, budget, deliveryTime]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {filteredServices.map((service, index) => (
        <Link
        to={`/marketplace/${encodeURIComponent(service.freelancerId)}`}
        state={{
          imageSrc: service.coverImage
            ? `data:image/jpeg;base64,${service.coverImage}`
            : 'https://via.placeholder.com/600x300',
          title: service.title,
          text: service.miniDescription,
          price: service.price,
          authorName: service.freelancerId,
          description: service.description,
          id: service.id, // Correctly passing id
          freelancerId: service.freelancerId, // Correctly passing freelancerId
        }}
        key={index}
      >
      
          <Card
            imageSrc={
              service.coverImage
                ? `data:image/jpeg;base64,${service.coverImage}`
                : 'https://via.placeholder.com/600x300'
            }
            profileSrc="profile-url.jpg"
            authorName={service.freelancerId}
            title={service.title}
            text={service.miniDescription}
            rating="5.0"
            price={`$${service.price}`}
          />
          {/* Hidden input field to send the id */}
          <input type="hidden" value={service.id} />
        </Link>
      ))}
    </div>
  );
};

export default CardDeck;
