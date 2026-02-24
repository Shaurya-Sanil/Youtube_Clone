import React from 'react';
import VideoPreview from './VideoPreview';
import './styles/video.css';

export default function Library() {
    const libraryVideos = [
        {
            id: 1,
            title: 'My 6 Billion $ Setup Tour',
            author: 'Pewdiepie',
            views: '10M',
            uploadedAt: '2 years ago',
            thumbnail: 'thumbnails/setup-tour-pewdiepie.webp',
            duration: '21:43',
            link: 'https://youtu.be/xk4_1vDrzzo?si=0VLnJA9rJD4rNk2k',
            channelImage: 'channel-pictures/Pewdiepie.jpg',
            channelUrl: 'https://www.youtube.com/@PewDiePie',
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
                {libraryVideos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </section>
        </main>
    );
}
