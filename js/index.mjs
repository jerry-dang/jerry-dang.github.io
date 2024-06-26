import { toggleMenu } from "./api.mjs"

document.getElementById('nav-icon').addEventListener('click', toggleMenu);
document.getElementById('mobile-home-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-exp-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-projects-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-courses-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-gallery-item').addEventListener('click', toggleMenu);
document.getElementById('mobile-contact-item').addEventListener('click', toggleMenu);

// add all mobile menu items into a list and create a function that has an onClick property for those elements to toggle the menu
