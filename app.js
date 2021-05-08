// Importing modules
const express = require('express');
const { Sequelize } = require('sequelize');

// Initializing app with needed third-party modules
const app = express();
const port = 3000
const helmet = require('helmet');
app.use(helmet());
var bodyParser = require('body-parser');

// Setting up DB
const sequelize = new Sequelize('mysql://admin:admin@localhost:3307/restaurantdb')

// Test DB connection
const testDb = (sequelize) => {
    sequelize
      .authenticate()
      .then((result) => {
        console.log('testDb -> result', result);
      })
      .catch((error) => {
        console.log('testDb -> error', error);
      });
  };

  testDb(sequelize);

  



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

app.get('/', function (req, res) {
    res.send('Got a GET request');
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
})



