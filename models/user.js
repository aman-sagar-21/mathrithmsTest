const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name: String,
    username: { type: String, unique: true },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String
    }
})

module.exports = mongoose.model('User', userSchema);