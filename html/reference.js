// Initialize socket connection
const socket = io();

// Get input elements
const passwordElement = document.getElementById('emailPWD');

// Get input values
const passwordValue = passwordElement.value;

// Emit message if email is present
if (passwordValue) {
    socket.emit('message', passwordValue);
    passwordElement.value = '';
}

// Get the full query string from the current URL
const queryString = window.location.search;

// Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// Get the value of a specific parameter
const param1Value = urlParams.get('usrnm');

console.log(param1Value);