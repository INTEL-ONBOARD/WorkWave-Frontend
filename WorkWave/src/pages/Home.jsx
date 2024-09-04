import React from 'react';
import { FaRocket, FaUsers, FaBriefcase } from 'react-icons/fa';

const Homepage = () => {
    return (
        <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 min-h-screen flex flex-col p-6">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-12 px-6 rounded-lg shadow-md mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to WorkWave</h1>
                <p className="text-lg mb-6">
                    Connecting clients with top-tier freelancers seamlessly. 
                </p>
                <a href="/about" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                    Learn More
                </a>
            </section>

            {/* Features Section */}
            <section className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300">
                    <FaRocket className="text-yellow-500 text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Fast and Efficient</h2>
                    <p className="text-gray-600 text-center">
                        Quickly find the right freelancer for your project with our streamlined platform.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300">
                    <FaUsers className="text-orange-500 text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Diverse Talent Pool</h2>
                    <p className="text-gray-600 text-center">
                        Access a wide range of skilled freelancers to meet your needs.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300">
                    <FaBriefcase className="text-red-500 text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Quality Assurance</h2>
                    <p className="text-gray-600 text-center">
                        We ensure high standards and quality in every project you undertake.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">What Our Users Say</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
                        <p className="text-gray-600 mb-2">
                            "WorkWave has been a game-changer for our projects. The platform is intuitive and connects us with talented freelancers."
                        </p>
                        <p className="font-semibold">- Alex, Client</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
                        <p className="text-gray-600 mb-2">
                            "I've found incredible opportunities through WorkWave. It's a great platform for freelancers looking to grow their business."
                        </p>
                        <p className="font-semibold">- Jamie, Freelancer</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                    Sign Up Now
                </a>
            </section>
        </div>
    );
}

export default Homepage;
