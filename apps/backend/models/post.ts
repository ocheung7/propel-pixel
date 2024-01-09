import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
  photoURI: String,
  date: String,
  user: String,
});

const Post = model("Post", postSchema);
export default Post;
