import mongoose, { Schema } from "mongoose";
import { stringify } from "postcss";

const postSchema = new Schema(
  {
    title: String,
    img: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
