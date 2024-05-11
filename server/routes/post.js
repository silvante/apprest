const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");
const { getAllPosts, getOnePosts } = require("../controller/postControl");

// CRUD mothods
router.get("/", getAllPosts);

// read mothod
router.get("/:id", getOnePosts);

module.exports = router;
