import React, { useState } from 'react';

const Login = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div
                className={`relative p-8 bg-white rounded-lg shadow-lg transition-transform duration-300 transform ${
                    hovered ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-2 px-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                />
                <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-yellow-600 focus:outline-none">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
