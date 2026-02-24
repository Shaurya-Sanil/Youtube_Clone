import React, { useState } from 'react';
import './styles/video.css';

export default function VideoPreview({ video }) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubscribed(!isSubscribed);
    };

    return (
        <div className="video-preview">
            <div className="thumbnail-row">
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                    <img className="thumbnail" src={video.thumbnail} alt={video.title} />
                </a>
                <div className="video-time">{video.duration}</div>
            </div>
            <div className="video-info-grid">
                <div className="channel-picture">
                    <a href={video.channelUrl} target="_blank" rel="noopener noreferrer">
                        <img className="profile-picture" src={video.channelImage} alt={video.author} />
                    </a>
                </div>
                <div className="video-info">
                    <p className="video-title">{video.title}</p>
                    <p className="video-author">{video.author}</p>
                    <p className="video-stats">{video.views} views • {video.uploadedAt}</p>
                    {video.showSubscribe && (
                        <button
                            className={`subscribe-button ${isSubscribed ? 'subscribed' : ''}`}
                            onClick={handleSubscribe}
                        >
                            {isSubscribed ? 'Subscribed' : 'Subscribe'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
