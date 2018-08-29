const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const view = path.join(__dirname, 'view.html');
const demo = path.join(__dirname, 'demo.js');
app.get('/',        (req, res) => res.sendFile(view)); 
app.get('/demo.js', (req, res) => res.sendFile(demo));

const server = http.createServer(app);
server.listen(8080, () => {
  console.log('Listening on', server.address());
});

