// username: Cluster60640
// passcode: IcmPCHVnAfysdJ7k

const mongoose = require('mongoose');

const atlasUri = 'mongodb+srv://Cluster60640:IcmPCHVnAfysdJ7k@cluster60640.tvgzbft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster60640';

// connect to MongoDB Atlas
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected!'))
        .catch(err => console.log(err));

// define schema
const bookSchema = new mongoose.Schema({
    book: String,
    author: String,
    year: String
}, { collection: 'bookInfo' });

// create model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;