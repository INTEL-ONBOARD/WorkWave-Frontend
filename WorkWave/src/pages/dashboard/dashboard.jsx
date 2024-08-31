import React from 'react';
import { Outlet } from 'react-router-dom'; // For nested routing
import Sidebar from '../../components/SideBar'; // Adjust import path as needed

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
                <Outlet /> {/* Renders the matched child route */}
            </div>
        </div>
    );
}

export default Dashboard;
