// navigation.js

document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});