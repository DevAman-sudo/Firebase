// javascript DOM property of index.hbs 
const button = document.getElementById('button');
const body = document.querySelector('.main-container');

// Socket connection from clint to server //
const socket = io('http://localhost');

// Clicked function for click event //
function clicked() {
    body.style.background = "red" ;
}
// Click event on button 
button.addEventListener('click' , clicked);