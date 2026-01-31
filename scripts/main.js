document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.getElementById('show-more-button');
    const hiddenChannels = document.getElementById('hidden-channels');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

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

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            body.classList.toggle('sidebar-closed');
            sidebar.classList.toggle('sidebar-closed');
        });
    }
});
