import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Dashboard from './pages/dashboard/dashboard'; // Make sure this path is correct

import Home from './pages/dashboard/Home'; // Dashboard Home content
import Settings from './pages/dashboard/settings'; // Dashboard Settings content
import Profile from './pages/dashboard/profile'; // Dashboard Profile content

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="home" element={<Home />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="profile" element={<Profile />} />
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
