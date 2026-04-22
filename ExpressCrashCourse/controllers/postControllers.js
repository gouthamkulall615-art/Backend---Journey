let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];
//@desc Get all posts
//@route Get /api/posts

export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

//@desc Get single post
//@routes Get /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with id ${id} not found`);
    error.status = 404; // ✅ FIXED
    return next(error);
  }

  res.status(200).json(post);
};

//@desc  Create new  post
//@routes Post/api/posts/
export const createPost = (req, res, next) => {
  if (!req.body || !req.body.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }

  const newPost = {
    id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1, // ✅ better id
    title: req.body.title,
  };

  posts.push(newPost);
  res.status(201).json(posts);
};

//@desc  Update new  post
//@routes Put/api/posts/
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  if (!req.body || !req.body.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc  Delete new  post
//@routes Delete/api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
