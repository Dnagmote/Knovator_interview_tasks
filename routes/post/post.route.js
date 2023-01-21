const router = require("express").Router();
const mongoose = require("mongoose");

//Model require
require("../../models/post/post.model.js");
const Post = mongoose.model("postSchema");



module.exports = router;
