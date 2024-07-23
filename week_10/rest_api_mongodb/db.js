const mongoose = require('mongoose');

// connect to local database
mongoose.connect('mongodb://localhost:27017/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

module.exports = mongoose;
