const Book = require('./db');
const mongoose = require("mongoose");

// read and display all data
Book.find({})
    .then(books => {
        console.log("All books");
        console.log(books);
        mongoose.connection.close();
    })
    .catch(err => console.log(err));

