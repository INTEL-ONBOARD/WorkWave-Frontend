import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaInbox, FaEnvelope, FaBell, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
            >
              <FaHome className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/purchases"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
            >
              <FaTasks className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 da" />
              <span className="flex-1 ms-3 whitespace-nowrap">Purchases</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full ">3</span> */}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/services"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <FaInbox className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
              <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">3</span> */}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/usersettings"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <FaBell className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
              <span className="flex-1 ms-3 whitespace-nowrap">UserSettings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
