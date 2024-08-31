import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Dashboard from './pages/dashboard/dashboard'; 

import Home from './pages/dashboard/Home'; 
import Settings from './pages/dashboard/settings'; 
import Profile from './pages/dashboard/profile'; 
import Purchases from './pages/dashboard/purchases'; 
import Orders from './pages/dashboard/orders'; 
import Services from './pages/dashboard/services'; 
import UserSettings from './pages/dashboard/UserSettings'; 



const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                {/* <Navbar /> */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="" element={<Home />} />
                            <Route path="purchases" element={<Purchases />} />
                            <Route path="orders" element={<Orders />} />
                            <Route path="services" element={<Services />} />
                            <Route path="usersettings" element={<UserSettings />} />
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
