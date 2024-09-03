import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import RecentReviews from '../components/Review/RecentReviews';

const CardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, imageSrc, text, price, authorName } = location.state || {};

  // Debug the location state
  console.log("Location State:", location.state);

  const handleOrderClick = () => {
    if (authorName) {
      navigate(`/marketplace/${encodeURIComponent(authorName)}/payment`);
    } else {
      // Handle the case where authorName is not available
      console.error("Author name is not available.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Breadcrumbs />

      <h1 className="text-2xl font-bold text-center mb-6">{title || 'Default Title'}</h1>

      <div className="flex flex-col items-center mb-8">
        <img
          src={imageSrc || "https://via.placeholder.com/600x300"}
          alt={title}
          className="rounded-2xl shadow-md w-full mb-4"
        />

        <h2 className="text-lg font-semibold mb-2 self-start">Service Cost</h2>

        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md flex justify-between items-center">
          <div className="text-left">
            <p className="text-3xl font-bold">{price}</p>
            <p className="text-sm text-gray-500">Basic Package</p>
          </div>
          <div className="text-right">
            <button
              className="bg-orange-300 text-white py-2 px-9 rounded-lg hover:bg-orange-600"
              onClick={handleOrderClick}
            >
              Order
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About this gig</h2>
        <p className="text-gray-700 mb-4">
          Modern. Elegant. Effective. Video Editing Made Simple!
        </p>
        {/* Other content */}
      </div>

      <RecentReviews />

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">About the Gig Creator</h2>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Ms. Alex Johnson"
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">Ms. Alex Johnson</h3>
            <p className="text-sm text-gray-600 mb-2">Graphic Designer</p>
            <p className="text-gray-700">
              Alex Johnson is a talented web developer and UI/UX designer...
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 rounded-3xl mb-12 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-2">Wanna Become a Freelancer?</h2>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm flex-1">
            Join WorkWave and take the first step towards a fulfilling freelance career...
          </p>
          <button className="bg-white text-black py-2 px-9 rounded-full hover:bg-gray-300 ml-4">
            Try now.
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
