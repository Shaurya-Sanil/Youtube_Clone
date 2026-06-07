import React, { useState } from 'react';
import { CATEGORIES } from '../../utils/constants';
import '../../styles/general.css';

export default function CategoryPills() {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="category-pills-container">
            <div className="category-pills">
                {CATEGORIES.map((category) => (
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
