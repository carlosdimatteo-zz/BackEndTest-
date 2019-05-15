const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

  app.use('/', require('./controller'));
  
  app.listen(3441, function () {
    console.log('Server listening on port 3441!');
  });