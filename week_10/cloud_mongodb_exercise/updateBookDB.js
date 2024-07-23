const Book = require('./db');
const mongoose = require('mongoose');

// update book
Book.updateOne({ book: "Urbanization" }, { year: "1996" })
    .then(() => {
        console.log("Book updated successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
