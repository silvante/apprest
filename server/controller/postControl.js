const Post = require("../models/post.model");

// mothod: GET
// des: get all posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).send(posts.reverse());
  } catch (err) {
    res.send(err);
  }
};

// mothod: GET
// des: get one posts by id

const getOnePosts = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.find({ _id: postId });
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
      title: title,
      image: image,
      description: description,
    });

    res.status(201).send(newPost);
  } catch (err) {
    res.send(err);
  }
};

// mothod: PUT
// des:  update by Id

const updatePost = async (req, res) => {
  const updateId = req.params.id;
  try {
    const { title, image, description } = req.body;

    const updated = await Post.findByIdAndUpdate(updateId, {
      title,
      image,
      description,
    });

    res.status(201).send(updated);
  } catch (err) {
    res.send(err);
  }
};

// mothod: DELETE
// des:  removing post by id

const deletePost = async (req, res) => {
  const removingId = req.params.id;
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    if (!deletePost) {
      res.status(404).send("post is not defined...");
    }
    res.status(201).send(deletePost);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllPosts,
  getOnePosts,
  AddPost,
  updatePost,
  deletePost,
};
