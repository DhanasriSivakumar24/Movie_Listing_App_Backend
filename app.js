require("dotenv").config();
const moviesRoute = require("./routes/movies/moviesRoutes.js");
const ticketRoute = require("./routes/ticket/ticketRoute.js");
const express = require("express");

const app = new express(); //initalizing the express server's object in this variable name app
const port = process.env.PORT || 8080; //port no can be anything the 3000

app.use("/movies",moviesRoute);
app.use("/ticketRoute",ticketRoute);

app.listen(port, () => {
    console.log(`Executed succefully on the port http://localhost:${port}`);
    console.log("Successfully Executed");
});
