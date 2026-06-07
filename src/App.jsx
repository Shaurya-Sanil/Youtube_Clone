import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import './styles/general.css';

export default function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/library" element={<Library />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}
