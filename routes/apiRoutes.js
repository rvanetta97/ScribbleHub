const router = require('express').Router();
const fs= require ('fs');
const { v4: uuidv4 } = require('uuid');

//create a GET route "/api/notes"
//responsible for reading all notes in db.json

router.get('/notes',(req, res)=> {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else{
            res.json(JSON.parse(data));
        }     
    })
})

module.exports = router