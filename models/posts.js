import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: 5,
      maxlength: 100,
    },

    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: 10,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Technology",
        "Education",
        "Travel",
        "Sports",
        "General"
      ],
      default: "General",
    },
  },
  {
    timestamps: true,
  }
);

// Indexed because these fields are commonly searched
postSchema.index({ title: 1 });
postSchema.index({ author: 1 });

// Content is not indexed because it changes often
// and indexing would reduce write performance.

const Post = mongoose.model("Post", postSchema);

export default Post;