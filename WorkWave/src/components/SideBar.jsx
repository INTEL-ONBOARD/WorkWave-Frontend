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
              <i class="fi fi-rr-home"></i>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/purchases"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
            >
              <i class="fi fi-rr-shopping-cart"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">Purchases</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full ">3</span> */}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/services"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <i class="fi fi-rr-briefcase"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">3</span> */}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/orders"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <i class="fi fi-rr-chart-histogram"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/usersettings"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <i class="fi fi-rr-settings-sliders"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">UserSettings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
