const formContainer = document.querySelector('.data-store');
const input = document.getElementById('text');
const button = document.querySelector('.button');
// firebase realtime database access //
const database = firebase.database();


// listening event of form button
button.addEventListener('click', (event) => {
// prevent Form from sumbitting
event.preventDefault();
// write();
input.value = "" ;
});