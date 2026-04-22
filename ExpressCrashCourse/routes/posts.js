import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers";
const router = express.Router();

console.log("POSTS FILE LOADED");

// GET all posts
router.get("/", getPosts);

// GET single post
router.get("/:id", getPost);

// CREATE post
router.post("/", createPost);

// UPDATE post
router.put("/:id", updatePost);

// DELETE post
router.delete("/:id", deletePost);

export default router;
