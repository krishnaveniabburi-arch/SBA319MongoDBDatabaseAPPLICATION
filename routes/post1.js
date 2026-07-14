import express from "express";

import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from "../controllers/post.js";


const router = express.Router();


// GET all posts
// GET /posts
router.get("/", getPosts);


// GET single post
// GET /posts/:id
router.get("/:id", getPostById);


// POST create post
// POST /posts
router.post("/", createPost);


// PATCH update post
// PATCH /posts/:id
router.patch("/:id", updatePost);


// DELETE post
// DELETE /posts/:id
router.delete("/:id", deletePost);



export default router;