const express = require('express');
const chalk = require('chalk');
const path = require('path');
const admin = require('firebase-admin');
const app = express();
const port = process.env.PORT || 8080 ;

// firebase-admin service account //
const serviceAccount = dbDataPath;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://task-manager-236a1.firebaseio.com"
});
const database = admin.database();
const ref = database.ref('/NODE/CRUD/');

// CRUD Operations .. //
// CREATE DATA //

// listining on port 8080 //
app.listen( port , (err , data) => {
    if (err) { console.log( chalk.blue.bgRed.bold(`Error Found = ${err}`) ) }
    else { console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:8080`) ) }
});