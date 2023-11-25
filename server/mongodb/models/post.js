import mongoose from "mongoose";
const Post = new mongoose.Schema({
  name: { type: String, requied: true },
  prompt: { type: String, requied: true },
  photo: { type: String, requied: true },
});
const PostSchema = mongoose.model("Post", Post);
export { Post };