import express from "express";


import {
  getComments,
  getCommentsByPost,
  createComment,
  updateComment,
  deleteComment
} from "../controllers/comment.js";


const router = express.Router();



// GET all comments
// GET /comments
router.get("/", getComments);



// GET comments by post
// GET /comments/post/:postId
router.get("/post/:postId", getCommentsByPost);



// POST create comment
// POST /comments
router.post("/", createComment);



// PATCH update comment
// PATCH /comments/:id
router.patch("/:id", updateComment);



// DELETE comment
// DELETE /comments/:id
router.delete("/:id", deleteComment);



export default router;