# mathrithmsTest
 - I have used nodejs and mongoose for creating this api
 - I have first seeded the database using some dummy data provided in seeds/userSeed.js as an array of user objects
 - Then in the app.js, i have created a get request to search that user in database and send a json response as per the provided user id
 - the code app.get('/users/:userid') sends a request to the database to fetch the user of the given userid and then the user is returned as response
 - runs on local host 5001
 - on sending a request to localhost:5001/user/:userid the database returns user corresponding to the userid. Here :userid is replaced with the required userId. There are total 9 users in seed (so userids are 1,2,3....,9)
