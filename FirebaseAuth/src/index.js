// npm packages //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

// App and port setup //
const app = express();
const port = process.env.PORT || 8080 ;

// file path declaration //
const staticPath = path.join( __dirname , '../public');

// using public dir to serve //
app.use(express.static(staticPath));

// app routing //
// main router //
app.use('/' , (req , res) => {
    res.sendFile('index.html');
});

// SignUp Page //
app.use('/signup' , (req , res) => {
    res.sendFile('SignUp.html');
});

// LogIn Page //
app.use('/LogIn' , (req , res) => {
    res.sendFile('LogIn.html');
});

// 404 Error page Routing //
app.get('*' , (req , res) => {
    res.sendFile('404.html');
});

// listning on port 8080 //
app.listen( port , (err) => {
    if (err) {
        console.log( chalk.blue.bgRed.bold(`Error Found: ${err}`) );
    } else {
        console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`) );
    }
});