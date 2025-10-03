// ===== Toggle mobile navigation menu =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open'); // Open/close mobile menu
});
