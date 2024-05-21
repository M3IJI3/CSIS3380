const port = 3000,
  express = require("express"),
  app = express();

// // 1
// app.use((req, res, next) => {
//   console.log("first pass");
//   next();
// })

// app.use((req, res, next) => {
//   console.log("second pass");
//   next();
// })

// 2
// app.use((req, res, next) => {
//   console.log("first pass");
//   req.newMessage = 'This is a message created';
//   next();
// })

// app.use((req, res, next) => {
//   console.log("second pass " + req.newMessage);
//   next();
// })

// 3
// app.use((req, res, next) => {
//   console.log("Hello ");
//   const err = new Error('this is a constructed error!')
//   next(err);
// })

// app.use((req, res, next) => {
//   console.log("world!");
//   next();
// })


app.get("/", (req, res) => {
  res.send(`<h1>Hello, Universe</h1>`);
});

app.get("/items", (req, res) => {
  res.send(`This is the page for vegetables`);
});

app.get("/menu", (req, res) => {
  res.send(`This is the page for menu`);
});

app.use((err, req, res, next) => {
  res.send('<h1>there was an err</h1>' + err);
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
