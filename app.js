const express = require('express');
const app = express();
const port = 3000

const helmet = require('helmet');
app.use(helmet());


var bodyParser = require('body-parser');


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



