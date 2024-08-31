import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen">
            <div className="p-4 text-2xl font-bold">
                My Dashboard
            </div>
            <nav className="mt-6">
                <Link to="/dashboard/home" className="flex items-center p-4 hover:bg-gray-700">
                    <FaHome className="mr-3" />
                    Dashboard
                </Link>
                <Link to="/dashboard/settings" className="flex items-center p-4 hover:bg-gray-700">
                    <FaCog className="mr-3" />
                    Settings
                </Link>
                <Link to="/dashboard/profile" className="flex items-center p-4 hover:bg-gray-700">
                    <FaUser className="mr-3" />
                    Profile
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;
