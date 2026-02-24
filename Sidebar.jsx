import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/sidebar.css';

export default function Sidebar() {
    const [showMoreChannels, setShowMoreChannels] = useState(false);
    const location = useLocation();

    const channels = [
        { id: 1, name: 'Bro Code', image: 'channel-pictures/Bro Code.jpg', url: 'https://www.youtube.com/@BroCodez' },
        { id: 2, name: 'Fireship', image: 'channel-pictures/Fireship.jpg', url: 'https://www.youtube.com/@Fireship' },
        { id: 3, name: 'Gordon Ramsay', image: 'channel-pictures/gordon-ramsay.jpg', url: 'https://www.youtube.com/@gordonramsay' },
        { id: 4, name: 'Pewdiepie', image: 'channel-pictures/Pewdiepie.jpg', url: 'https://www.youtube.com/@PewDiePie' },
    ];

    const hiddenChannels = [
        { id: 5, name: 'Optimum', image: 'channel-pictures/razer-openium.jpg', url: 'https://www.youtube.com/@optimumtech' },
        { id: 6, name: 'forrestfire101', image: 'channel-pictures/fireforest-ducksong.jpg', url: 'https://www.youtube.com/@forrestfire101' },
    ];

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="sidebar">
            <Link to="/">
                <div className={`sidebar-link ${isActive('/')}`}>
                    <img src="icons/home.svg" alt="home" />
                    <div>Home</div>
                </div>
            </Link>

            <Link to="/subscriptions">
                <div className={`sidebar-link ${isActive('/subscriptions')}`}>
                    <img src="icons/subscriptions.svg" alt="subscriptions" />
                    <div>Subscriptions</div>
                </div>
            </Link>

            <div className="subscribed-channels">
                {channels.map((channel) => (
                    <div key={channel.id} className="sidebar-link">
                        <div className="channel">
                            <a href={channel.url} target="_blank" rel="noopener noreferrer">
                                <img className="profile-picture" src={channel.image} alt={channel.name} />
                            </a>
                            <div className="video-info">
                                <p className="video-title">{channel.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {showMoreChannels && hiddenChannels.map((channel) => (
                    <div key={channel.id} className="sidebar-link">
                        <div className="channel">
                            <a href={channel.url} target="_blank" rel="noopener noreferrer">
                                <img className="profile-picture" src={channel.image} alt={channel.name} />
                            </a>
                            <div className="video-info">
                                <p className="video-title">{channel.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="show-more-button" onClick={() => setShowMoreChannels(!showMoreChannels)}>
                    <div>{showMoreChannels ? '▲ Show less' : '▼ Show more'}</div>
                </div>
            </div>

            <Link to="/explore">
                <div className={`sidebar-link ${isActive('/explore')}`}>
                    <img src="icons/explore.svg" alt="explore" />
                    <div>Explore</div>
                </div>
            </Link>

            <Link to="/library">
                <div className={`sidebar-link ${isActive('/library')}`}>
                    <img src="icons/library.svg" alt="library" />
                    <div>Library</div>
                </div>
            </Link>
        </nav>
    );
}
