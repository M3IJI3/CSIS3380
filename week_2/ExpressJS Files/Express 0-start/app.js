const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1>Let's start with Express!<h1>");
})

app.get('/contact', (req, res) => {
    res.send("<h1>Our address is 700 Royal Ave.</h1>");
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    // console.log(req.body);
    // console.log("num1 =", req.body.num1);
    // console.log("num2 =", req.body.num2);

    let result = Number(req.body.num1) + Number(req.body.num2);

    res.send(`<h1>The sum is ${result}</h1>`);
})

app.get('*', (req, res) => {
    res.send('<h1>Page not fount.</h1>')
})

app.listen(3000, () => {
    console.log('The server is running on 3000!');
})