const express = require('express');
const bodyParser = require("express");
const path = require("node:path");
const app = express();

app.use(bodyParser.urlencoded ({extended: true}));
app.use(express.json());
app.use(express.static("public"));

let users = [];

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    const username = req.body.userName;
    if(username) { users.push(username); }
    res.json({ index: users.length, name: username });
})

app.get("/users", function (req, res) {
    res.json({ users });
})

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, "/404page.html"));
})

app.listen(3000, function () {
    console.log("server started on port 3000");
});
