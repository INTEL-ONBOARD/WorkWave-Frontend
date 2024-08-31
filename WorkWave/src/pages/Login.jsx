import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

        // const handleSignUpClick = () => {
        //     navigate('/signup'); // Redirect to the SignUp page
        // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    console.log("it'sloading")

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-white to-gray-100 pt-20">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <p className="text-center text-gray-600 text-lg mb-4">
                    Welcome back to <span className="text-yellow-600 font-bold">WorkWave</span>!
                </p>
                <p className="text-center text-gray-600 text-base mb-6">
                    We are glad to see you again! Sign in to continue your journey on <span className="text-yellow-600 font-bold">WorkWave</span>.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="w-full p-3 mt-1 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-3 mt-1 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <a href="#" className="text-sm text-yellow-600 hover:underline">Forgot password?</a>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300"
                    >
                        Login
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account? <button onClick={handleSignUpClick} className="text-yellow-600 hover:underline">Click here to Sign up</button>
                    </p>
                </form>
                <div className="text-center mt-8 text-yellow-600 font-bold text-lg">
                    WorkWave
                </div>
            </div>
        </div>
    );
};

export default Login;
