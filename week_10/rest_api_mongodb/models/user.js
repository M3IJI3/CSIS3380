const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true }
}, { collection: 'userInfo' });

const User = mongoose.model('user', userSchema);

module.exports = User;
