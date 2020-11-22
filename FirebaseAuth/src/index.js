// npm packages //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const EventEmitter = require('events');
const io = require('socket.io');
const fs = require('fs');
const admin = require("firebase-admin");
const event = new EventEmitter();

// App and port setup //
const app = express();
const port = process.env.PORT || 8080 ;

// file path declaration //
const staticPath = path.join( __dirname , '../public');

// Setup view engine as hbs //
app.set('view engine', 'hbs');

// using public dir to serve //
app.use(express.static(staticPath));

// app routing //
// main router //
app.get('/' , (req , res) => {
    res.render('index');
    // Event on button click //
    event.on('goToSingUp' , () => {
        // console.log('hell9 world');
    });
    event.emit('goToSingUp');
});

// SignUp Page // 
app.get('/signup' , (req , res) => {
    res.render('SignUp');
});

// LogIn Page //
app.get('/login' , (req , res) => {
    res.render('login');
});

// 404 Error page Routing //
app.get('*' , (req , res) => {
    res.render('404');
});

// listning on port 8080 //
app.listen( port , (err) => {
    if (err) {
        console.log( chalk.blue.bgRed.bold(`Error Found: ${err}`) );
    } else {
        console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`) );
    }
});
