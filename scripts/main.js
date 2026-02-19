document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.getElementById('show-more-button');
    const hiddenChannels = document.getElementById('hidden-channels');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    // ** Button Interactions **

    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    subscribeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.textContent.trim() === 'Subscribe') {
                button.textContent = 'Subscribed';
                button.classList.add('subscribed');
                showNotification('Subscribed! You\'ll get notifications for new videos.');
            } else {
                button.textContent = 'Subscribe';
                button.classList.remove('subscribed');
                showNotification('Unsubscribed successfully.');
            }
        });
    });

    // Notification icon
    const notificationIcon = document.querySelector('.notifications-icon-container');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', () => {
            showNotification('You have 3 new notifications!');
        });
    }

    // Upload icon 
    const uploadIcon = document.querySelector('.upload-icon-container');
    if (uploadIcon) {
        uploadIcon.addEventListener('click', () => {
            showNotification('Sign in to create content.');
        });
    }

    // to show notifications
    function showNotification(message) {

        const existingNotification = document.querySelector('.custom-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ** DOM manipulation ** 

    const themeToggle = document.getElementById('theme-toggle');

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            themeToggle.innerHTML = newTheme === 'dark'
                ? '☀️'
                : '🌙';

            showNotification(`Switched to ${newTheme} mode!`);
        });

        // Set initial button text
        themeToggle.innerHTML = currentTheme === 'dark'
            ? '☀️'
            : '🌙';
    }

    // **Show/Hide Section**

    if (showMoreButton) {
        showMoreButton.addEventListener('click', () => {
            hiddenChannels.classList.toggle('hidden-channels');
            if (hiddenChannels.classList.contains('hidden-channels')) {
                showMoreButton.innerHTML = '<div>&#9660; Show more</div>';
            } else {
                showMoreButton.innerHTML = '<div>&#9650; Show less</div>';
            }
        });
    }

    // Hamburger menu toggle
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            body.classList.toggle('sidebar-closed');
            sidebar.classList.toggle('sidebar-closed');
        });
    }

    // Video description toggle
    const videoDescriptions = document.querySelectorAll('.video-description');
    videoDescriptions.forEach(desc => {
        const toggleBtn = desc.querySelector('.read-more-btn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                desc.classList.toggle('expanded');
                toggleBtn.textContent = desc.classList.contains('expanded')
                    ? 'Read less'
                    : 'Read more';
            });
        }
    });

    // **Interactive Navigation **

    // Highlight active menu item
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.querySelector('.sidebar-link')?.classList.add('active');
        }

        // Add click event for smooth scrolling if targeting sections
        link.addEventListener('click', function (e) {
            sidebarLinks.forEach(l => l.querySelector('.sidebar-link')?.classList.remove('active'));
            this.querySelector('.sidebar-link')?.classList.add('active');
        });
    });

    // Sticky header behavior
    const header = document.querySelector('.header');
    const pillsContainer = document.querySelector('.category-pills-container');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            if (pillsContainer) pillsContainer.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
            if (pillsContainer) {
                pillsContainer.classList.remove('scroll-up');
                pillsContainer.classList.add('scroll-down');
            }
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
            if (pillsContainer) {
                pillsContainer.classList.remove('scroll-down');
                pillsContainer.classList.add('scroll-up');
            }
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Search functionality with interaction feedback
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');

    if (searchButton && searchBar) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchBar.value.trim();
            if (searchTerm) {
                showNotification(`🔍 Searching for: "${searchTerm}"`);
                // In a real app, this would trigger a search
            } else {
                searchBar.focus();
                searchBar.style.borderColor = '#ff0000';
                setTimeout(() => searchBar.style.borderColor = '', 2000);
            }
        });

        // Allow Enter key to search
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // Voice search interaction (removed notification to avoid clutter)
    const voiceSearchButton = document.querySelector('.voice-search-button');
    if (voiceSearchButton) {
        voiceSearchButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Visual feedback only - no notification popup
            voiceSearchButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                voiceSearchButton.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Category pills interaction
    const categoryPills = document.querySelectorAll('.pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all pills
            categoryPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            pill.classList.add('active');
        });
    });
});
