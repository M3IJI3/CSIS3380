const Book = require('./db');
const mongoose = require('mongoose');

// delete log
Book.deleteMany({ author: "Tzu" })
    .then(() => {
        console.log("Books deleted successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
