// SignUp page  DOM element //
const button = document.getElementById('button');

// clicked function //
function clicked() {
    button.style.backgroundColor = "#000" ;
}

// Listining Event on Button Click //
button.addEventListener('submit' , (event) => {
    // Preventing Page on Submit //
    event.preventDeafult();
    // function on button click //
    clicked();
});