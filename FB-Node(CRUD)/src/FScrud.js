// NPM packages //
const express = require('express');
const chalk = require('chalk');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');
const admin = require('firebase-admin');

// App and PORT setup //
const app = express();
const port = process.env.PORT || 8080;

// firebase-admin service account //
const serviceAccount = path.join(__dirname, '../db.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://task-manager-236a1.firebaseio.com"
});
// Database Access //
const database = admin.firestore();
const docRef = database.collection('NODE').doc('Crud');

// Firebase Firestore CRUD Operation //
// CREATE Data //
async function write() {
    await docRef.set({
        username: 'DevAman',
        email: 'devaman@gmail.com',
        passkey: 'admin'
    });
}
write();

// READ Data //
async function read() {
    const snapshot = await database.collection('NODE').get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
}
read();

// listenning on port 8080 //
app.listen(port, (err) => {
    if (err) {
        console.log(chalk.blue.bgRed.bold(`Error Found: ${err}`));
    } else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
    }
});