const formContainer = document.querySelector('.data-store');
const input = document.getElementById('text');
const button = document.querySelector('.button');
// firebase realtime database access //
const database = firebase.database();

// write data //
database.ref('/CRUD/crud/').set({
    data: "hello world"
});

// update data //
database.ref('/CRUD/crud/').update({
    data: "hello hello world"
});

// read data //
database.ref('/CRUD/crud/').on('value', (snapshot) => {
    let data = snapshot.val();
    for (let key in data) {
        data = data[key];
        let h2 = document.createElement('h2');
        h2.innerText = data;
        formContainer.appendChild(h2);
    }
});

// delete data //
// database.ref('/CRUD/crud').on((snapshot) => {
// snapshot.forEach((childSnapshot) => {
// snapshot.remove();
// });
// });

// write function on click //
function write() {
    database.ref('/USER/users/').push({
        data: input.value
    });
}

// read data call back function //
database.ref('/USER/users/').on('value', (snapshot) => {
    let data ;
    snapshot.forEach( (childSnapshot) => {
        data = childSnapshot.val();
    });
    for (let key in data) {
        data = data[key];
        let h2 = document.createElement('h2');
        h2.innerText = data;
        formContainer.appendChild(h2);
    }
});

// listening event of form button
button.addEventListener('click', (event) => {
    // prevent Form from sumbitting
    event.preventDefault();
    write();
});