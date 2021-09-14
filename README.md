# mathrithmsTest
 - I have used nodejs and mongoose for creating this api
 - I have first seeded the database using some dummy data provided in seeds/userSeed.js as an array of user objects
 - Then in the app.js, i have created a get request to search that user in database and send a json response as per the provided user id
 - the code app.get('/users/:userid') sends a request to the database to fetch the user of the given userid and then the user is returned as response
 - runs on local host 3000
