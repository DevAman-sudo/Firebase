const formContainer = document.querySelector('.data-store');
const input = document.getElementById('text');
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