import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-white to-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Sign In
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-gray-700 mb-1">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            required 
                            className="p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 mb-1">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
