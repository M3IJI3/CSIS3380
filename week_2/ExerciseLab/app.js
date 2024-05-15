const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post("/", function (req, res) {
    res.send(`<h2 style="color: red">Hello ${req.body.username}</h2> <br>
                    <h1>Your password is: ${req.body.password}</h1>`);
})

app.get('*', (req, res) => {
    res.send('<h1>Page not fount.</h1>')
})

app.listen(5000, () => {
    console.log('The server is running on 4800!');
})