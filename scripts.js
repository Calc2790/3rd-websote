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

// URL of the image you want to use as the favicon
const faviconUrl = 'https://cdn.discordapp.com/attachments/1218331742289789008/1219200915353899059/nicepfp.png?ex=660a7055&is=65f7fb55&hm=fe0a71c7966c0217773be05ce174d5c119427edb9d20a366bac349062b6de1b8';

// Function to set the favicon
function changeFavicon(url) {
  const link = document.createElement('link');
  const oldLink = document.querySelector("link[rel*='icon']");

  link.rel = 'shortcut icon';
  link.href = url;

  if (oldLink) {
    document.head.removeChild(oldLink);
  }

  document.head.appendChild(link);
}

// Call the function to change the favicon to the specified URL
changeFavicon(faviconUrl);
