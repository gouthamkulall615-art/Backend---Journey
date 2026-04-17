const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
// res.send("hello world")
//   res.send({ message: "hi server" });
//   res.send("<h1>hello world</h1>")

// });

//to get rid of this much line of code we use static folder
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//static folder creatation:helps in not creating route for each file

// app.use(express.static(path.join(__dirname, "public"))); //for the about to be fetched we have to search the about .html

let posts = [
  {
    id: 1,
    title: "post one",
  },
  {
    id: 2,
    title: "post two",
  },
  {
    id: 3,
    title: "post three",
  },
];

//get all posts

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

//get a single post
app.get("/api/posts/:id", (req, res) => {
  //   console.log(req.params.id);

  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ msg: `a post with the ${id} is not found` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
