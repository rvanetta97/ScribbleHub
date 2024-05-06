const router = require('express').Router();
const fs= require ('fs');
const { v4: uuidv4 } = require('uuid');

//create a GET route "/api/notes"
//responsible for reading all notes in db.json

router.get('/notes',(req, res)=> {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else{
            res.json(JSON.parse(data));
        }     
    })
})

router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            const notes = JSON.parse(data);
            const newNote = {
                id: uuidv4(),
                title: req.body.title,
                text: req.body.text
            };
            // Add the new note to the array of notes
            notes.push(newNote);
            // Write the updated array of notes back to the file
            fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), err => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.json(newNote);
                }
            });
        }
    });
});

module.exports = router