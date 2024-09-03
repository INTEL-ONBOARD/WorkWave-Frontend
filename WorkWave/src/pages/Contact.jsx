import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-24 px-6">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold text-gray-800 mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Have any questions or need further assistance? Feel free to reach out to us. We’re here to help!
                </p>
                <form>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-3 mt-1 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-3 mt-1 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea 
                            placeholder="Your Message" 
                            rows="4"
                            className="w-full p-3 mt-1 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
