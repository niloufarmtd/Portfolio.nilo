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
  
  // Collect input values
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Build mailto link
  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  // Open default email client with prefilled data
  window.location.href = `mailto:niloufarmotamedi04@gmail.com?subject=${subject}&body=${body}`;
});
