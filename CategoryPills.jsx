import React, { useState } from 'react';
import './styles/general.css';

export default function CategoryPills() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        'All',
        'JavaScript',
        'Python',
        'Web Development',
        'Gaming',
        'Music',
        'Live',
        'Cooking',
        'Recently uploaded',
        'Watched',
        'New to you',
    ];

    return (
        <div className="category-pills-container">
            <div className="category-pills">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`pill ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
