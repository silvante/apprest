const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getOnePosts,
  AddPost,
} = require("../controller/postControl");

// CRUD mothods
router.get("/", getAllPosts);

// create mothod
router.post("/", AddPost);

// read mothod
router.get("/:id", getOnePosts);

module.exports = router;
