const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userId: Number,
    name: String,
    username: { type: String },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String
    }
})

module.exports = mongoose.model('User', userSchema);