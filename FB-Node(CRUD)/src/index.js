// npm packages import //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

// app and port setup //
const app = express();
const port = process.env.PORT || 8080 ;

// local file path //
const staticPath = path.join( __dirname , '../public');
const dbDataPath = path.join( __dirname , '../db.json');

// using public folder for static pages //
app.use(express.static(staticPath));

// firebase realtime database codebase //
const admin = require("firebase-admin");
const serviceAccount = dbDataPath ;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://task-manager-236a1.firebaseio.com"
});


// app routing //
// landing page //
app.use('/' , (req , res) => {
    res.send('index.html');
});

// 404 error page //
app.use('*' , (req , res) => {
    res.send('404 Error');
});

// listining on port 8080 //
app.listen(port , (err , data) => {
    if (err) {console.log( chalk.blue.bgRed.bold(`Error Found ${err}` ) )}
    else {console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:8080`) )}
});