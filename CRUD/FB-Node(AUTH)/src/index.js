// Npm Packages //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const hbs = require('hbs');
const admin = require("firebase-admin");

// App and Port Setup //
const app = express();
const port = process.env.PORT || 8080 ;

// File Path Decleration //
const staticPath = path.join( __dirname , '../public');

// using public folder to serve //
app.use(express.static(staticPath));

// app routing //
// main page //
app.get('/' , (req , res) => {
    res.sendFile('index.html');
});
// 404 Error Page //
app.get('*' , (req , res) => {
    res.sendFile('404.html');
});

// listining on port 8080 //
app.listen( port , (err) => {
    if (err) {
        console.log( chalk.blue.bgRed.bold(`Error Found: ${err}`) );
    } else {
        console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`) );
    }
});