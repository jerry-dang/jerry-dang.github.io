export function toggleMenu() {
    const overlay = document.getElementById('nav-overlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}
