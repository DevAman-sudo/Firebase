// npm packages //
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const chalk = require('chalk');
const path = require('path');
const io = require('socket.io')(http);
const EventEmitter = require('events');
const hbs = require('hbs');
const fs = require('fs');
const admin = require("firebase-admin");

// App and port setup //
// const event = new EventEmitter();
const port = process.env.PORT || 8080;

// file path declaration //
const staticPath = path.join(__dirname, '../public');

// Setup view engine as hbs //
app.set('view engine', 'hbs');

// using public dir to serve //
app.use(express.static(staticPath));

// app routing //
// main router //
app.get('/', (req, res) => {
    res.sendFile( path.join(staticPath , '/index.html'));
});

// SignUp Page //
app.get('/signup', (req, res) => {
    res.sendFile( path.join(staticPath , '/SignUp.html'));
});

// LogIn Page //
app.get('/login', (req, res) => {
    res.render('login');
});

// 404 Error page Routing //
app.get('*', (req, res) => {
    res.render('404');
});

// SOCKET.IO WebSocket Connection //
// Event on button click //
io.on('connection', (socket) => {
    socket.on('hello' , () => {
        console.log('hello user');
    });
});

// listning on port 8080 //
http.listen(port, (err) => {
    if (err) {
        console.log(chalk.blue.bgRed.bold(`Error Found: ${err}`));
    } else {
        console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
    }
});