// Npm Packages //
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const hbs = require('hbs');

// App and Port Setup //
const app = express();
const port = process.env.PORT || 8080 ;

// listining on port 8080 //
app.listen( port , (err) => {
    if (err) {
        console.log( chalk.blue.bgRed.bold(`Error Found: ${err}`) );
    } else {
        console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`) );
    }
});