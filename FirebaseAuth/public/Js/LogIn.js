// SignUp page  DOM element //
const button = document.getElementById('button');

// SignUp function //
function signUp() {
    window.location = '/signup' ;
}

// clicked function //
function clicked() {
    button.style.backgroundColor = "#000" ;
}

// Listining Event on Button Click //
button.addEventListener('submit' , (e) => {
    // Preventing Page on Submit //
    e.preventDeafult();
    // function on button click //
    clicked();
});