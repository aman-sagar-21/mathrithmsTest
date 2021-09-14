const mongoose = require('mongoose');
const User = require('./models/user');
const users = require('./userSeed');

mongoose.connect('mongodb://localhost:27017/mathrithmsuser', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDb = async() => {
    for (let user of users) {
        const newUser = new User({

            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address
        })
        await newUser.save();
    }

}



seedDb().then(() => {
    mongoose.connection.close();
})