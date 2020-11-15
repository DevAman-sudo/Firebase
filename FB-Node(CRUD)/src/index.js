// npm packages import //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const randomNum = require('random-num');

// app and port setup //
const app = express();
const port = process.env.PORT || 8080;

// local file path //
const staticPath = path.join(__dirname, '../public');
const dbDataPath = path.join(__dirname, '../db.json');

// using public folder for static pages //
app.use(express.static(staticPath));

// firebase realtime database codebase //
const admin = require("firebase-admin");
const serviceAccount = dbDataPath;
let random = randomNum(1, 10000000);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://task-manager-236a1.firebaseio.com"
});
// database access //
const database = admin.database();
const ref = database.ref('/NODE/crud/');

// Create Data //
function writeUsersData(id_user, data) {
  database.ref('/NODE/crud/' + id_user).set({
    id_user: id_user,
    data: `${data} , ${id_user}` 
  });
}
writeUsersData(random, 'hello world!');
// ref.push({
    // data: "Hello World!"
// });

// Read Data //
ref.on('value', (snapshot) => {
    let data = snapshot.val();
    // console.log(snapshot);
    console.log(data);
    snapshot.forEach((childSnapshot) => {
        // console.log(childSnapshot);
        console.log(childSnapshot.key);
        console.log(childSnapshot.val());
        // console.log(childSnapshot.child());
    });
    // for (let key in data) {
    // data = data[key];
    // console.log(data);
    // }
});

// Update Data //
function writeNewPost(id_user, username) {
  // A post entry.
  let postData = {
    author: username ,
    id_user: id_user
  };

  // Get a key for a new Post.
  var newPostKey = database.ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + random + '/' + newPostKey] = postData;

  return database.ref().update(updates);
}
writeNewPost(random , "DevAman");

// delete data //

// app routing //
// landing page //
app.use('/', (req, res) => {
    res.send('index.html');
});

// 404 error page //
app.use('*', (req, res) => {
    res.send('404 Error');
});

// listining on port 8080 //
app.listen(port, (err, data) => {
    if (err) {
        console.log(chalk.blue.bgRed.bold(`Error Found ${err}`))} else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:8080`))}
});