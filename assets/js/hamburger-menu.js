document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu');
    const menuNav = document.querySelector('.navigation-bar');

    menuToggle.addEventListener('click', function() {
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });
});
