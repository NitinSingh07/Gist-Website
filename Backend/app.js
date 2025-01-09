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
const userRoutes = require("./routes/user.routes");
const jobRoutes = require("./routes/job.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);
app.use("/job", jobRoutes);

module.exports = app;
