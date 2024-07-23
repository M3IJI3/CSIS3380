const Book = require('./db');
const mongoose = require('mongoose');

// create book objects
const books = [
    { book: "Civilization", author: "Tzu", year: "1922" },
    { book: "Urbanization", author: "Richards", year: "1955" },
    { book: "Concuring the World", author: "Alexander", year: "1022" }
];

// clear database
Book.deleteMany({})
    .then(() => {
        console.log("All existing books deleted");

        // 添加新的书籍文档对象到数据库
        return Book.insertMany(books);
    })
    .then(() => {
        console.log("Books added successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
