import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMarketPlace, FaEnvelope, FaInfoCircle } from 'react-icons/fa'; // Updated icons

const Navbar = () => {
    return (
        <nav className="bg-[#E8A427] py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* WorkWave Logo */}
                <div className="text-3xl font-bold text-white">
                    WorkWave
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-8">
                    <Link to="/" className="flex items-center text-white hover:text-gray-200">
                        <FaHome size={24} className="mr-2" />
                        Home
                    </Link>
                    <Link to="/marketplace" className="flex items-center text-white hover:text-gray-200">
                        <FaMarketPlace size={24} className="mr-2" />
                        Market Place
                    </Link>
                    <Link to="/contact" className="flex items-center text-white hover:text-gray-200">
                        <FaEnvelope size={24} className="mr-2" />
                        Contact us
                    </Link>
                    <Link to="/about" className="flex items-center text-white hover:text-gray-200">
                        <FaInfoCircle size={24} className="mr-2" />
                        About us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
