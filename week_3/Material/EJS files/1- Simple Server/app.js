const express = require('express');

const app = express();

app.get('/', function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = '';

  if (currentDay === 6 || currentDay === 0) {
    res.send('<h1>Today is a weekend</h1>');
  } else {
    res.send('<h1>Today is a weekday</h1>');
  }
});

app.listen(3000, function () {
  console.log('server started on port 3000');
});
