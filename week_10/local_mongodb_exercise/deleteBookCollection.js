const Book = require('./db');
const mongoose = require("mongoose");

// delete the book whose author is "Tzu"
Book.deleteMany({ author: "Tzu" })
    .then(() => {
        console.log('Successfully deleted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));