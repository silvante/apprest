// requires
const express = require("express");
require("dotenv").config();
const connectdb = require("./config/db");
const posts = require("./routes/post");

// coonection with database
connectdb();

// envairments
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`started with port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("hello world (_apprest_)");
});

app.use("/posts", posts);
