// Imported NPM Packages //
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const chalk = require('chalk');
const admin = require("firebase-admin");

// Files Path Variables //
const staticPath = path.join( __dirname , '/public/');
const serviceAccount = path.join( __dirname , "admin.json");

// Using App And Port SetUp //
const port = process.env.PORT || 8080 ;
app.use( express.static( staticPath));

// Firebase Service Account || App Installization //
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devaman-firebase-default-rtdb.firebaseio.com"
});

// Express App Router SetUp //
app.get('/' , (req , res) => {
	res.sendFile( path.join( staticPath , 'index.html'));
});

app.get('*' , (req , res) => {
	res.setHead(404);
	res.sendFile( path.join( staticPath , '404.html'));
});

// Listining To Server //
server.listen( port , (error) => {
	if (error) { // Catching Errors If Server Gets Some //
		console.log(`Error Found => ${error}`);
	}else {
		console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:8080`));
	}
})