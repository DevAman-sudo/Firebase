// javascript DOM property of index.hbs
const button = document.getElementById('button');

// Socket connection from clint to server //
const socket = io();

// Clicked function for click event //
function clicked() {
    socket.emit('hello');
}
// Function to change route on button click //
function clickFun() {
    window.location = '/signup';
}

// Click event on button
button.addEventListener('click', clicked);