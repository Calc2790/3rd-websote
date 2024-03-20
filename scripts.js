// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

  // Example: Console log when the page has loaded
  console.log('The page has fully loaded');

  // Add more interactivity as needed:

  // Example: Listen for form submission if you have a contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Perform form submission tasks
      alert('Form submitted! We will be in touch.');
      // Usually, here you'd submit to a server or handle with AJAX
    });
  }

  // Add other interactions below:
  // Example code for analytics or click event tracking
  document.getElementById('discord-button').addEventListener('click', function () {
    console.log('Discord button was clicked!');
    // Here you would add your analytics or tracking code
  });
}
