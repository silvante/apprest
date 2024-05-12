const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getOnePosts,
  AddPost,
  updatePost,
  deletePost,
} = require("../controller/postControl");

// CRUD mothods
router.get("/", getAllPosts);

// create mothod
router.post("/", AddPost);

// read mothod
router.get("/:id", getOnePosts);

// update mothod
router.put("/:id", updatePost);

// delete mothod
router.delete("/:id", deletePost);
module.exports = router;
