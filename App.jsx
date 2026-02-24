import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Explore from './Explore';
import Subscriptions from './Subscriptions';
import Library from './Library';
import './styles/general.css';

export default function App() {
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const body = document.querySelector('body');
        const sidebar = document.querySelector('.sidebar');

        if (hamburgerMenu) {
            hamburgerMenu.addEventListener('click', () => {
                body.classList.toggle('sidebar-closed');
                sidebar.classList.toggle('sidebar-closed');
            });
        }

        // Cleanup event listener on unmount
        return () => {
            if (hamburgerMenu) {
                hamburgerMenu.removeEventListener('click', () => { });
            }
        };
    }, []);

    return (
        <Router>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/library" element={<Library />} />
            </Routes>
        </Router>
    );
}
