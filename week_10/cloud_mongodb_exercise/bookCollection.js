const Book = require('./db');
const mongoose = require('mongoose');

// read and display
Book.find({})
    .then(books => {
        console.log("All Books:");
        console.log(books);
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
