function toggleMenu() {
    const overlay = document.getElementById('nav-overlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('nav-icon').addEventListener('click', toggleMenu);

function toggleFitbook() {
    const fitbook = document.getElementById('project-fitbook');
    fitbook.style.display = fitbook.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('fitbook-icon').addEventListener('click', toggleFitbook);
