import React, { useEffect } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

export default function MainLayout({ children }) {
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const body = document.querySelector('body');
        const sidebar = document.querySelector('.sidebar');

        if (hamburgerMenu) {
            hamburgerMenu.addEventListener('click', () => {
                body.classList.toggle('sidebar-closed');
                sidebar.classList.toggle('sidebar-closed');
            });
        }

        return () => {
            if (hamburgerMenu) {
                hamburgerMenu.removeEventListener('click', () => { });
            }
        };
    }, []);

    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    );
}
