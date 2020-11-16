const express = require('express');
const chalk = require('chalk');
const path = require('path');
const admin = require('firebase-admin');
var uniqueKey = require('unique-keygen');
const app = express();
const port = process.env.PORT || 8080;

// firebase-admin service account //
const serviceAccount = path.join(__dirname, '../db.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://task-manager-236a1.firebaseio.com"
});
// unique id fetch //
let unique = uniqueKey(20);
//
const database = admin.database();

// CRUD Operations .. //
// CREATE DATA //
function create(user_id , username , email , passkey) {
    database.ref(`/Node/Crud/`).push({
        user_id: user_id,
        username: username,
        email: email,
        passkey: passkey,
    });
}
// create(unique, 'DevAman', 'DevAman@gmail.com', 'admin');

// READ DATA //
function read() {
    database.ref('/Node/Crud/').on('value', (snapshot) => {
        // console.log(snapshot);
        snapshot.forEach((childSnapshot) => {
            let data = childSnapshot.val();
            let key = childSnapshot.key;
            console.log(key);
            console.log(data);
        });
    });
}
read();

// UPDATE Data //
function update() {
    database.ref('/Node/Crud/').child('-MM9cw1R_9VCSEUzoXj8').update({
        online: "True"
    });
}
update();

// DELETE Data //
function Delete() {
    database.ref('/Node/Crud/').child('-MM9dM4slUaBRg3xcPmI').remove();
}
// Delete();

// listining on port 8080 //
app.listen(port, (err, data) => {
    if (err) {
        console.log(chalk.blue.bgRed.bold(`Error Found = ${err}`));
    } else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:8080`));
    }
});