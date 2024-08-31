import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer w-full">
            <div className="footer-top bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 text-center py-6">
                <p className="text-lg font-semibold mb-4 text-gray-800">
                    Stay connected with our community of Creative users. Follow us on social to stay updated
                </p>
                <div className="flex justify-center gap-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">
                        <FaFacebookF className="text-2xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">
                        <FaTwitter className="text-2xl" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom bg-blue-800 text-white py-4 text-center">
                <p className="text-sm mb-2">
                    All rights Reserved | 
                    <a href="/terms" className="underline ml-2">Terms of Service</a> | 
                    <a href="/privacy" className="underline ml-2">Privacy Policies</a> | 
                    <a href="/cookies" className="underline ml-2">Cookies Policies</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

