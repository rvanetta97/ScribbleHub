const express = require('express')
const path = require('path');
const fs = require('fs')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;
const app = express();

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes to route files
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`The digital realm awaits! Server listening on localhost:${PORT}`);
});

