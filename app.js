const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/mathrithmsuser', {

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.get('/user/:userid', async(req, res) => {
    const userid = Number(req.params.userid);
    const user = await User.findOne({ userId: userid });
    res.send(user);
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})