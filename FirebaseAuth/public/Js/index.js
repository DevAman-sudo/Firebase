// javascript DOM property of index.hbs 
const button = document.getElementById('button');

// Click event on button 
button.addEventListener('click' , (event) => {
    event.preventDeafult();
    button.href = '/LogIn' ;
});