import React from 'react';
import VideoPreview from './VideoPreview';
import './styles/video.css';

export default function Subscriptions() {
    const subscriptionVideos = [
        {
            id: 1,
            title: 'Java Full Course for free ☕',
            author: 'Bro Code',
            views: '11M',
            uploadedAt: '3 years ago',
            thumbnail: 'thumbnails/java-course-thumbnail.webp',
            duration: '12:00:00',
            link: 'https://youtu.be/xk4_1vDrzzo?si=hnuKPzYDEOvrO-a4',
            channelImage: 'channel-pictures/Bro Code.jpg',
            channelUrl: 'https://www.youtube.com/@BroCodez',
            showSubscribe: false,
        },
        {
            id: 2,
            title: 'C++ in 100 seconds',
            author: 'Fireship',
            views: '2M',
            uploadedAt: '2 years ago',
            thumbnail: 'thumbnails/100-seconds-c++.webp',
            duration: '2:46',
            link: '',
            channelImage: 'channel-pictures/Fireship.jpg',
            channelUrl: 'https://www.youtube.com/@Fireship',
            showSubscribe: false,
        },
    ];

    return (
        <main>
            <section className="video-grid">
                {subscriptionVideos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </section>
        </main>
    );
}
