// Bring in our dependencies
const fs = require('fs');
const express = require('express');
var bodyParser = require("body-parser");
const app = express();

// Static pages
app.use(express.static('public'));

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create application/json parser
const jsonParser = bodyParser.json();

app.get('/login', (req, res) => {
	res.send("hi!");
});

// POST /login gets urlencoded bodies
app.post ('/login', urlencodedParser, (req, res) => {
	if (!req.body) return res.sendStatus(400);
	res.send ("Welcome " + req.body.username);
});
app.all('/', (req, res) => {
	return res.sendStatus(400);
	//res.send('Hello World!')
});

// Start server
const listenIP = 'localhost';
const listenPort = 3500;
app.listen(listenPort, listenIP, () => {
  console.log('App listening on ' + listenIP + ':' + listenPort);
});
