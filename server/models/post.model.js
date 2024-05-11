const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlenght: 50,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: 25,
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
