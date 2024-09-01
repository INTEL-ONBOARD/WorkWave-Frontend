import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import searchIcon from '../assets/mingcute_search-line.png';
import marketPlaceImage from '../assets/marketnav.png';

const Navbar = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    // Check if the current path is related to the Market Place (including routes with parameters)
    const isMarketPlace = location.pathname.startsWith('/marketplace');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <nav className={`relative py-4 ${isMarketPlace ? 'bg-transparent' : 'bg-[#E8A427]'}`}>
            {isMarketPlace && (
                <div className="absolute inset-0">
                    <img 
                        src={marketPlaceImage} 
                        alt="Market Place" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-orange-900 opacity-70"></div> {/* Orange overlay */}
                </div>
            )}

            <div className="relative container mx-auto flex justify-between items-center px-6 z-10">
                <div className={`text-3xl font-bold ${isMarketPlace ? 'text-white' : 'text-white'}`}>
                    WorkWave
                </div>      

                {/* Centered Links */}
                <div className="flex-1 flex justify-center space-x-8">
                    <Link to="/" className={`flex items-center ${isMarketPlace ? 'text-white' : 'text-white'} hover:text-gray-200`}>
                        <FaHome size={24} className="mr-2" />
                        Home
                    </Link>
                    <Link to="/marketplace" className={`flex items-center ${isMarketPlace ? 'text-white' : 'text-white'} hover:text-gray-200`}>
                        <FaShoppingCart size={24} className="mr-2" />
                        Market Place
                    </Link>
                    <Link to="/contact" className={`flex items-center ${isMarketPlace ? 'text-white' : 'text-white'} hover:text-gray-200`}>
                        <FaEnvelope size={24} className="mr-2" />
                        Contact us
                    </Link>
                    <Link to="/about" className={`flex items-center ${isMarketPlace ? 'text-white' : 'text-white'} hover:text-gray-200`}>
                        <FaInfoCircle size={24} className="mr-2" />
                        About us
                    </Link>
                </div>

                {/* Sign In / Join Buttons */}
                <div className="flex space-x-4">
                    <Link 
                        to="/signin" 
                        className="bg-white text-orange-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200"
                    >
                        Sign in
                    </Link>
                    <Link 
                        to="/signup" 
                        className="border border-white text-white py-2 px-4 rounded-full font-semibold hover:bg-white hover:text-orange-500"
                    >
                        Join
                    </Link>
                </div>
            </div>
            
            {isMarketPlace && (
                <div className="relative flex justify-center items-center mb-8 z-10">
                    <div className="relative w-2/4">
                        <input 
                            type="text" 
                            placeholder="Search here..." 
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="w-full py-3 px-6 pr-14 rounded-full border-none shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            style={{ backgroundColor: "#FFF" }}
                        />
                        <button 
                            className="absolute inset-y-0 right-0 flex items-center pr-4"
                            style={{ color: "#F27A1A" }}
                        >
                            <img 
                                src={searchIcon} 
                                alt="Search" 
                                className="h-5 w-5"
                            />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
