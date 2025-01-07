const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
const connectToDb = require("./db/db");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
