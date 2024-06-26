function toggleMenu() {
    const overlay = document.getElementById('nav-overlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('nav-icon').addEventListener('click', toggleMenu);
document.getElementById('mobile-home-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-exp-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-projects-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-courses-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-gallery-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-contact-item').addEventListener('click', toggleMenu);
