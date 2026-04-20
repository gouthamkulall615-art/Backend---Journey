import express from "express";
const router = express.Router();

console.log("POSTS FILE LOADED");

let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `post ${id} not found` });
  }

  res.status(200).json(post);
});

router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ message: "please include a title" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});
//update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `post ${id} not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

//delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `post ${id} not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
