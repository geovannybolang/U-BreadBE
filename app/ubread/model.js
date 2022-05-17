const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "username tidak boleh kosong"],
    },
    password: {
        type: String,
        require: [true, "password tidak boleh kosong"],
    },
    email: {
        type: String,
        require: [true, "email tidak boleh kosong"],
    },
});

module.exports = mongoose.model('users', userSchema);
