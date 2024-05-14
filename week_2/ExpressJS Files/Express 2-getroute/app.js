const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Let\'s start with Express');
});

app.listen(3000);