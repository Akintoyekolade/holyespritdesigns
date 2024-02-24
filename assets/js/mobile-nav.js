// JavaScript for toggling the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const mainNav = document.querySelector('.main-nav ul');

    // Add a click event listener to the menuTrigger
    menuTrigger.addEventListener('click', function() {
        // Toggle the 'active' class on the mainNav to show/hide the mobile navigation
        mainNav.classList.toggle('active');
    });
});