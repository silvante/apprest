// requires
const express = require("express");
require("dotenv").config();
const connectdb = require("./config/db");
const posts = require("./routes/post");
const cors = require("cors");

// coonection with database
connectdb();

// envairments
const app = express();
app.use(cors());
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`started with port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("hello world (_apprest_)");
});

app.use("/api/posts", posts);
