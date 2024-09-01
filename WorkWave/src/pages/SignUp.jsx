import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you are using axios for API calls

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name: username,
            password,
            role: 'Customer', // Automatically set the role to "Customer"
        };

        try {
            const response = await axios.post('http://localhost:8081/api/users/register', user);
            if (response.status === 201) {
                // Handle successful registration, e.g., navigate to the login page
                navigate('/home');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error (e.g., display a message to the user)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-white to-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-gray-700 mb-1">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
