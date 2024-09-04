import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import searchIcon from '../assets/mingcute_search-line.png';
import marketPlaceImage from '../assets/marketnav.png';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const isMarketPlace = location.pathname.startsWith('/marketplace');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`relative py-8 overflow-x-hidden ${isMarketPlace ? 'bg-transparent' : 'bg-gradient-to-r from-yellow-400 to-yellow-600'} transition-transform duration-300 transform hover:scale-105`} style={{ height: 'auto' }}>
            {isMarketPlace && (
                <div className="absolute inset-0">
                    <img
                        src={marketPlaceImage}
                        alt="Market Place"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-900 opacity-70"></div>
                </div>
            )}

            <div className="relative container mx-auto flex flex-wrap justify-between items-center px-6 z-10">
                <div className={`text-4xl font-bold ${isMarketPlace ? 'text-white' : 'text-white'} whitespace-nowrap`}>
                    WorkWave
                </div>

                <div className="flex-1 flex justify-center space-x-8">
                    <Link to="/homepage" className={`flex items-center ${isMarketPlace ? 'text-white' : 'text-white'} hover:text-gray-200`}>
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

                <div className="flex space-x-4 items-center">
                    {isLoggedIn ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                aria-expanded={dropdownOpen}
                                onClick={toggleDropdown}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user photo"
                                />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                    <div className="px-4 py-3">
                                        <p className="text-sm text-gray-900">Neil Sims</p>
                                        <p className="text-sm font-medium text-gray-900 truncate">neil.sims@flowbite.com</p>
                                    </div>
                                    <ul className="py-1">
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/settings"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/earnings"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Earnings
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={onLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="bg-white text-orange-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="border border-white text-white py-2 px-4 rounded-full font-semibold hover:bg-white hover:text-orange-500"
                            >
                                Join
                            </Link>
                        </>
                    )}
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

