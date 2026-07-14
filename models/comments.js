import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Comment is required"],
      minlength: 2,
      maxlength: 300,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexed because comments are often retrieved by post/user
commentSchema.index({ post: 1 });
commentSchema.index({ user: 1 });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;