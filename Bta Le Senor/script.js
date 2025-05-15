const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('navbar-shrink');
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        navbar.classList.remove('navbar-shrink');
    }

    lastScrollY = currentScrollY;
});
