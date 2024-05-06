const express = require('express')
const path = require('path');
const fs = require('fs')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes to route files
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.post('/api/notes', (req, res) => {
    //grabs notes from body of request
    const newNote = req.body

    //gives each note a random ID
    newNote.id = uuidv4()

    //adds the note object to the array
    db.push(newNote)

    //update the json file with the new object
    fs.writeFileSync('./db/db.json', JSON.stringify(db))

    //responds with the note object used
    res.json(db)
})

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`The digital realm awaits! Server listening on localhost:${PORT}`);
});

