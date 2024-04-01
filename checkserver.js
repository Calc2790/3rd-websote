const http = require('http');

// Define the URL of your website
const websiteUrl = 'https://carlwasnagi2-hub.netlify.app/';

// Create a function to check the server of the website
const checkServer = (url) => {
  http.get(url, (res) => {
    const server = res.headers.server;
    console.log(`The server of ${url} is running on: ${server}`);

    // Optionally, you can check for other server response headers here
    // const headers = res.headers;
    // console.log(headers);

  }).on('error', (error) => {
    console.error('Error checking the server:', error.message);
  });
}

// Call the function to check the server of your website
checkServer(websiteUrl)
