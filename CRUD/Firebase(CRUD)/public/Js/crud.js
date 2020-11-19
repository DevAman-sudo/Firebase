const database = firebase.database();

// CRUD Operations .. //
// CREATE DATA //
function create(user_id , username , email , passkey) {
    database.ref(`/CRUD/Crud/`).set({
        user_id: user_id,
        username: username,
        email: email,
        passkey: passkey,
    });
}
create(unique, 'DevAman', 'DevAman@gmail.com', 'admin');

// READ DATA //
function read() {
    database.ref('/CRUD/Crud/').on('value', (snapshot) => {
        // console.log(snapshot);
        snapshot.forEach((childSnapshot) => {
            let data = childSnapshot.val();
            let key = childSnapshot.key;
            // console.log(key);
            // console.log(data);
        });
    });
}
read();

// UPDATE Data //
function update() {
    database.ref('/CRUD/Crud/').child('-MM9cw1R_9VCSEUzoXj8').update({
        online: "True"
    });
}
update();

// DELETE Data //
function Delete() {
    database.ref('/CRUD/Crud/').child('-MM9dM4slUaBRg3xcPmI').remove();
}
// Delete();