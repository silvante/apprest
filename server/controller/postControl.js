const Post = require("../models/post.model");

// mothod: GET
// des: get all posts

const getAllPosts = async (req, res) => {
  try {
    const posts = Post.find();

    return res.status(200).send(posts);
  } catch (err) {
    res.send(err);
  }
};

// mothod: GET
// des: get one posts by id

const getOnePosts = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = Post.find({ _id: postId });
    if (!post) {
      res.status(404).send("post is not defined");
    }
    return res.status(200).json(post);
  } catch (err) {
    res.send(err);
  }
};

// mothod: POST
// des:  post to server

const AddPost = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const newPost = await Post.create({
      title,
      image,
      description,
    });

    res.status(201).send(newPost);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllPosts,
  getOnePosts,
  AddPost,
};
