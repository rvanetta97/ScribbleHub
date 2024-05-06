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

app.post('/api/notes', (req, res) => {
    const newNote = req.body
    //gives each note a random ID
    newNote.id = uuidv4()
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
});

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`The digital realm awaits! Server listening on localhost:${PORT}`);
});

