const express = require('express');
const app = express();
const port = 3000;

// app.set('views', './views');
app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//   res.status(200).sendFile(__dirname + '/index.html');
// });

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/member/:name', (req, res) => {
// 	res.end(`Requested member with name: ${req.params.name}`);
// });

// app.get('/member/:name/planet/:home', (req, res) => {
//   res.end(`Requested member with name: ${req.params.name}
// 			from planet: ${req.params.home}`);
// });

app.get('/member/:name/planet/:home', (req, res) => {
  const memberDetails = {
    member: req.params.name,
    planet: req.params.home,
  };
  res.render('guardian', memberDetails);
});

app.get('*', (req, res, next) => {
  res.status(200).send('Sorry, requested page not found.');
  next();
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
