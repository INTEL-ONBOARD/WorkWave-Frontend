import React, { useEffect, useState } from 'react';

const View = ({ onButtonClick, onsingleClick }) => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const userProfile = JSON.parse(sessionStorage.getItem('userProfile'));

        if (userProfile && userProfile.userId) {
          const response = await fetch(`http://localhost:8083/api/ListService/services/freelancer/${userProfile.id}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch services');
          }

          const data = await response.json();
          setServices(data);
        } else {
          setError('User profile is missing.');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <div className="flex items-start justify-start bg-gray-100 w-full" style={{ marginTop: "3.5rem" }}>
        <section className="bg-white w-full">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
              Expand Your Reach and <span className="text-orange-500">Grow Your Business.</span>
            </h2>
            <p className="max-w-4xl mt-6 text-center text-gray-500">
              Showcase your skills, connect with clients, and turn your expertise into income. Our platform provides the tools you need to succeed—whether you're listing your first service or managing multiple gigs. Take control of your freelance career, track your progress, and watch your business thrive with every completed order. Start creating and listing your services today to reach new clients and maximize your earning potential!
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Earnings</dt>
                <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">$4.8m</dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Gigs</dt>
                <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">24</dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Orders Completed</dt>
                <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">86</dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Reaches</dt>
                <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">86k</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      <div className="flex items-start justify-start min-h-screen bg-gray-100 w-full" style={{ marginTop: "1rem" }}>
        <section className="bg-white w-full">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-lg font-medium text-gray-800">Your Services</h2>
            <p className="mt-1 text-sm text-gray-500">These are all the services that you have listed</p>
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
              <div>
                <div className="inline-flex rounded-md shadow-sm">
                  <a href="#" aria-current="page" className="px-4 py-2 text-sm font-medium text-orange-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:text-orange-700">
                    Listed
                  </a>
                  <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:text-orange-700">
                    Unlisted
                  </a>
                  <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:text-orange-700">
                    Draft
                  </a>
                </div>
              </div>
              <button type="button" className="focus:outline-none text-white bg-orange-600 hover:bg-orange-500 font-medium rounded-lg px-4 py-1.5 me-2 mb-2 text-md" onClick={onButtonClick}>
                Create a Service
              </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.length > 0 ? (
                services.map(service => (
                  <div key={service.id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg border">
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-bold text-gray-800 uppercase">{service.title}</h1>
                      <p className="mt-1 text-sm text-gray-600">{service.miniDescription}</p>
                    </div>
                    <img
                      className="object-cover w-full h-48 mt-2"
                      src={service.coverImage ? `data:image/jpeg;base64,${service.coverImage}` : 'https://via.placeholder.com/320x180'}
                      alt={service.title || 'Service Image'}
                    />
                    <div className="flex items-center justify-between px-4 py-2 bg-orange-400">
                      <h1 className="text-lg font-bold text-white">${service.price}</h1>
                      <button
                        className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                        onClick={() => onsingleClick(service)}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No services found.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default View;
