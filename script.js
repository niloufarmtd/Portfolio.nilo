// ===== Toggle mobile navigation menu =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open'); // Open/close mobile menu
});

// ===== Contact form mailto function =====
// This will open the user's email client (e.g., Gmail, Outlook) 
// with a pre-filled email when they submit the form.
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
