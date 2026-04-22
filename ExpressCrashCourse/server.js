import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import { fileURLToPath } from "url";
// import members from "./routes/members.js"
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notfound from "./middleware/notfound.js";

const app = express();
const PORT = process.env.PORT || 8000;
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

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
//body parser middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//logger middelware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/posts", posts);

//error handler
app.use(notfound);
app.use(errorHandler);

// app.use("/api/members",members)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
