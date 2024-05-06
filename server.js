const express = require('express')
const path = require('path');
const fs = require('fs')
const PORT = process.env.port || 3001;
const app = express();
const db = require('./db/db.json')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./routes/display')(app);
require('./routes/notes')(app);


// app listener - starts the server
app.listen(PORT, () => {
  console.log(`The digital realm awaits! Server listening on localhost:${PORT}`);
});