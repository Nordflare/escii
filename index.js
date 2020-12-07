const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

app.set('x-powered-by', 'ARCTICNET');

app.get('/', (req, res) => {
    res.header('x-powered-by', 'ARCTICNET');
    res.sendFile(__dirname+"/static/index.html");
});

app.listen(port, () => {
    console.log(`ESCII Web Service listening at http://localhost:${port}`);
});