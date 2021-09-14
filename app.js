const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');


app.listen(3000, () => {
    console.log('listening on port 3000');
})