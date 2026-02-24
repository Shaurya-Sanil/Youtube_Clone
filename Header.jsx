import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        showNotification(`Switched to ${newTheme} mode!`);
    };

    const handleSearch = () => {
        const searchInput = document.querySelector('.search-bar');
        if (searchInput?.value.trim()) {
            showNotification(`🔍 Searching for: "${searchInput.value}"`);
            searchInput.value = '';
        } else if (searchInput) {
            searchInput.focus();
            searchInput.style.borderColor = '#ff0000';
            setTimeout(() => {
                searchInput.style.borderColor = '';
            }, 2000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleUploadClick = () => {
        showNotification('Sign in to create content.');
    };

    const handleNotificationClick = () => {
        showNotification('You have 3 new notifications!');
    };

    const handleVoiceSearch = () => {
        // Visual feedback only
    };

    return (
        <>
            <header className="header">
                <div className="left-section">
                    <img className="hamburger-menu" src="icons/hamburger-menu.svg" alt="menu" />
                    <Link to="/">
                        <img className="youtube-logo" src="icons/youtube-logo.svg" alt="YouTube" />
                    </Link>
                </div>
                <div className="middle-section">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search"
                        onKeyPress={handleKeyPress}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        <img className="search-icon" src="icons/search.svg" alt="search" />
                        <div className="tooltip">Search</div>
                    </button>
                    <button className="voice-search-button" onClick={handleVoiceSearch}>
                        <img className="voice-search-icon" src="icons/voice-search-icon.svg" alt="voice" />
                        <div className="tooltip">Search with your voice</div>
                    </button>
                </div>
                <div className="right-section">
                    <button id="theme-toggle" onClick={handleThemeToggle}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <div className="upload-icon-container" onClick={handleUploadClick}>
                        <img className="upload-icon" src="icons/upload.svg" alt="upload" />
                        <div className="tooltip">Create</div>
                    </div>
                    <img className="youtube-apps-icon" src="icons/youtube-apps.svg" alt="apps" />
                    <div className="notifications-icon-container" onClick={handleNotificationClick}>
                        <img className="notifications-icon" src="icons/notifications.svg" alt="notifications" />
                        <div className="notifications-count">3</div>
                    </div>
                    <img className="current-user-picture" src="channel-pictures/youtube_user.png" alt="user" />
                </div>
            </header>

            {notification && (
                <div className="custom-notification show">
                    {notification}
                </div>
            )}
        </>
    );
}
