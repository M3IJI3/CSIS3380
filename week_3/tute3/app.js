const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/card', (req, res) => {
    res.render('card', {prompt: "How old is Einstein lived?", hint: "200 years old"});
})

app.listen(3000, () =>
    console.log('Listening on port 3000'));