import express from "express";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.js";


const router = express.Router();


// GET all users
// GET /users
router.get("/", getUsers);


// GET single user
// GET /users/:id
router.get("/:id", getUserById);


// POST create user
// POST /users
router.post("/", createUser);


// PATCH update user
// PATCH /users/:id
router.patch("/:id", updateUser);


// DELETE user
// DELETE /users/:id
router.delete("/:id", deleteUser);



export default router;