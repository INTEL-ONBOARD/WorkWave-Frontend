import React from 'react';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-xs overflow-hidden rounded-lg text-center flex flex-col items-center justify-center">
            <img className="h-20 w-20 object-cover mb-4" src="https://static-00.iconduck.com/assets.00/submit-update-icon-2048x2048-nv9keuce.png" alt="avatar" />
            <div className="py-5 text-center">
            <a href="#" className="block text-xl font-bold text-gray-800" tabIndex="0" role="link">Upcoming Feature</a>
            <span className="text-sm text-gray-700">This feature will be available in the next update. peace ✌️</span>
            </div>
        </div>
        </div>
    );
}

export default Home;
    