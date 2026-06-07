import React from 'react';
import CategoryPills from '../components/common/CategoryPills';
import VideoPreview from '../components/common/VideoPreview';
import '../styles/video.css';

export default function Home() {
    const videos = [
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
            showSubscribe: true,
        },
        {
            id: 2,
            title: "Razer's new keyboard is basically cheating",
            author: 'optimum',
            views: '4.1M',
            uploadedAt: '2 months ago',
            thumbnail: 'thumbnails/razer-keyboard.webp',
            duration: '7:42',
            link: 'https://youtu.be/Feny5bs2JCg?si=po9c9tQr3yOMJbPi',
            channelImage: 'channel-pictures/razer-openium.jpg',
            channelUrl: 'https://www.youtube.com/@optimumtech',
            showSubscribe: true,
        },
        {
            id: 3,
            title: "Gordon Ramsay Enters An Indian Cooking Competition | Gordon's Great Escape",
            author: 'Gordon Ramsay',
            views: '14M',
            uploadedAt: '5 years ago',
            thumbnail: 'thumbnails/gordon-indian-cooking.webp',
            duration: '9:11',
            link: 'https://youtu.be/qOkZiVlQHMs?si=FdN4ewTLCzO09oQp',
            channelImage: 'channel-pictures/gordon-ramsay.jpg',
            channelUrl: 'https://www.youtube.com/@gordonramsay',
            showSubscribe: true,
        },
        {
            id: 4,
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
        <>
            <CategoryPills />
            <main>
                <section className="video-grid">
                    {videos.map((video) => (
                        <VideoPreview key={video.id} video={video} />
                    ))}
                </section>
            </main>
        </>
    );
}
