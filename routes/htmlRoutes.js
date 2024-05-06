const router = require('express').Router()
const path = require('path');


  // GET Route for feedback page
  router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  );
  
  // Wildcard route to direct users to a index page
  router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  module.exports = router;