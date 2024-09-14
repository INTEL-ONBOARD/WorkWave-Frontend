import React, { useState } from 'react';

const UserSettings = () => {
    // State for storing form data
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Retrieve user ID from sessionStorage
        const user = JSON.parse(sessionStorage.getItem('user'));
        const userId = user ? user.id : null;
    
        // Prepare payment data
        const paymentData = {
            cardHolderName: cardName,
            userId: userId,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv
        };
    
        try {
            const response = await fetch('http://localhost:8085/api/Payment/save-credit-card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            });
    
            // Log the response text to inspect its content
            // const responseText = await response.text();
            // console.log('Response Text:', responseText);
    
            // Attempt to parse JSON only if the response is valid JSON
            try {
                const result = JSON.parse(responseText);
                console.log('Success:', result);
                // Handle success (e.g., show a success message or redirect)
            } catch (jsonError) {
                console.error('JSON Error:', jsonError);
                // Handle case where response is not valid JSON
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network or other errors
        }
    };

    return (
        <div className="flex items-start justify-start min-h-screen bg-gray-100" style={{ "marginTop": "3.5rem" }}>
            <div className="w-full flex space-x-8 p-10">
                {/* User Information Section */}
                <div className="w-1/2 rounded-lg text-start bg-white p-10">
                    <h2 className="text-2xl font-bold mb-6">User Information</h2>
                    <form>
                        {/* Form fields for user information (unchanged) */}
                    </form>
                </div>

                {/* Payment Information Section */}
                <div className="w-1/2 rounded-lg text-start bg-white p-10">
                    <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="floating_card_number"
                                id="floating_card_number"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="floating_card_number"
                                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Card Number
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="floating_card_name"
                                id="floating_card_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="floating_card_name"
                                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name on Card
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_expiry_date"
                                    id="floating_expiry_date"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    required
                                />
                                <label
                                    htmlFor="floating_expiry_date"
                                    className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Expiry Date (MM/YY)
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="password"
                                    name="floating_cvv"
                                    id="floating_cvv"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                />
                                <label
                                    htmlFor="floating_cvv"
                                    className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    CVV
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;
