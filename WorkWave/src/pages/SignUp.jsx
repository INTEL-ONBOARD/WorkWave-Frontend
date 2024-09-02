import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaGlobe } from 'react-icons/fa';

const SignUp = () => {
    const countries = ["Sri Lanka", "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "India", "Brazil", "Japan", "South Africa", "Singapore", "Netherlands", "Sweden", "Switzerland", "Italy", "Spain", "Mexico", "Russia", "China", "South Korea", "New Zealand", "Norway", "Finland", "Denmark", "Ireland", "Belgium", "Austria", "Argentina", "Colombia", "Chile", "Malaysia", "Thailand", "Philippines", "Vietnam", "Indonesia", "Israel", "Saudi Arabia", "United Arab Emirates", "Turkey", "Egypt", "Nigeria", "Kenya", "Ghana", "Bangladesh", "Pakistan", "Ukraine", "Poland", "Portugal", "Greece", "Czech Republic", "Romania", "Hungary", "Iceland", "Luxembourg", "Malta", "Estonia", "Latvia", "Lithuania"];

    return (
        <div className="flex justify-center items-center py-12 bg-gradient-to-b from-white to-gray-100">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8" style={{ paddingTop: '40px' }}>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <FaUser className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Mathi"
                                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <FaUser className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Nemindra"
                                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Work Email Address
                        </label>
                        <FaEnvelope className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <FaLock className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <FaLock className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="********"
                                className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <FaGlobe className="absolute left-3 top-10 text-gray-400 hover:text-gray-600" />
                        <select
                            id="country"
                            className="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-gray-700 border-gray-300 rounded focus:ring-0 transition duration-150 ease-in-out"
                            />
                            <span className="ml-2 text-gray-700">
                                I agree to the <a href="/terms" className="text-blue-500 hover:text-blue-700">Terms of Service</a>
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
