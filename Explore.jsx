import React from 'react';
import VideoPreview from './VideoPreview';
import './styles/video.css';

export default function Explore() {
    const trendingVideos = [
        {
            id: 1,
            title: "Razer's new keyboard is basically cheating",
            author: 'optimum',
            views: '4.1M',
            uploadedAt: '2 months ago',
            thumbnail: 'thumbnails/razer-keyboard.webp',
            duration: '7:42',
            link: 'https://youtu.be/Feny5bs2JCg?si=po9c9tQr3yOMJbPi',
            channelImage: 'channel-pictures/razer-openium.jpg',
            channelUrl: 'https://www.youtube.com/@optimumtech',
            showSubscribe: false,
        },
    ];

    const musicVideos = [
        {
            id: 2,
            title: 'The Duck Song 5',
            author: 'forrestfire101',
            views: '209k',
            uploadedAt: '12 hours ago',
            thumbnail: 'thumbnails/duck-song-5.webp',
            duration: '3:01',
            link: '',
            channelImage: 'channel-pictures/fireforest-ducksong.jpg',
            channelUrl: 'https://www.youtube.com/@forrestfire101',
            showSubscribe: false,
        },
    ];

    const gamingVideos = [
        {
            id: 3,
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
    ];

    return (
        <main>
            <section className="video-grid">
                <h2>Trending</h2>
                {trendingVideos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </section>

            <section className="video-grid">
                <h2>Music</h2>
                {musicVideos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </section>

            <section className="video-grid">
                <h2>Gaming</h2>
                {gamingVideos.map((video) => (
                    <VideoPreview key={video.id} video={video} />
                ))}
            </section>
        </main>
    );
}
