


const express = require('express');
const connectToDatabase = require('./db/db');
const dotenv = require("dotenv");
dotenv.config();
const app = express();

connectToDatabase();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Suktima Thulung!")
});
  console.log("Hello world!");