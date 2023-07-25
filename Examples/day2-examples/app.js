import express from 'express';

let app = express();
// start the server 
app.listen(9091, () => console.log('express server is running'));

// webservice that acccepts a GET request
app.get("/greet", (request, response) => {
    response.json({message: "Welcome to your first rest webservice: GET"})
});
// postman application to test our webservice
// create 3 more webservices that accepts POST, PUT & DELETE requests for the same URL
// you can return a JSON response with different message for different methods