const mongoose = require('mongoose');

// connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myLibrary', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// define schema
const bookSchema = new mongoose.Schema({
    book: String,
    author: String,
    year: String
}, { collection: 'bookInfo' });

// 创建模型
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
