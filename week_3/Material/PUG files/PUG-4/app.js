const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// const colours = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple'
// ];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "What occasion corresponds to the longest day of the year?" });
});

app.get('/hello', (req, res) => {
    res.render('hello');
  });
  
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});