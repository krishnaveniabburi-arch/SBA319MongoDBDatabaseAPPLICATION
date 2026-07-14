import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    age: {
      type: Number,
      required: true,
      min: 13,
      max: 120,
    },
  },
  {
    timestamps: true,
  }
);

// Index because email is frequently searched
// userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;