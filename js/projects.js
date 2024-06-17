function toggleFitbook() {
    const fitbook = document.getElementById('project-fitbook');
    fitbook.style.display = fitbook.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('fitbook-icon').addEventListener('click', toggleFitbook);
