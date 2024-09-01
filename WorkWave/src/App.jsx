import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Selection from './pages/Selection'; // Import Selection page
import Dashboard from './pages/dashboard/dashboard'; 
import Home from './pages/dashboard/Home'; 
import Purchases from './pages/dashboard/purchases'; 
import Orders from './pages/dashboard/orders'; 
import Services from './pages/dashboard/services'; 
import UserSettings from './pages/dashboard/UserSettings'; 
import MarketPlace from './pages/MarketPlace';
import CardDetail from './pages/CardDetail';
import PaymentPage from './pages/Payment';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Layout />} />
            </Routes>
        </Router>
    );
}

const Layout = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');
    
    return (
        <div className="min-h-screen flex flex-col">
            {!isDashboard && <Navbar />}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/selection" element={<Selection />} /> {/* Added Selection route */}
                    <Route path="/marketplace" element={<MarketPlace />} />
                    <Route path="/marketplace/:cardName" element={<CardDetail />} />
                    <Route path="/marketplace/:authorName/payment" element={<PaymentPage />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="" element={<Home />} />
                        <Route path="purchases" element={<Purchases />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="services" element={<Services />} />
                        <Route path="usersettings" element={<UserSettings />} />
                    </Route>
                </Routes>
            </main>
            {!isDashboard && <Footer />}
        </div>
    );
}

export default App;
