require("dotenv").config();
const express = require("express");

const moviesRoute = require("./routes/movies/moviesRoutes.js");
const dataBase = require("./Database/index.js");

const app = new express(); //initalizing the express server's object in this variable name app
const port = process.env.PORT || 8080; //port no can be anything the 3000

dataBase();
app.use(express.json());
app.use("/movies",moviesRoute); //use middleware

app.listen(port, () => {
    console.log(`Executed succefully on the port http://localhost:${port}`);
    console.log("Successfully Executed");
});