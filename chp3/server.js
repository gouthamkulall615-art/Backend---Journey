import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT || 8000;

console.log("SERVER FILE STARTED");

//get current path

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
  //   res.write("hello computer");

  // console.log(req.url);
  // console.log(req.method)

  try {
    //check if a get request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
         filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("not found");
      }
    } else {
      throw new Error("method not found");
    }
    const data = await fs.readFile(filePath);

    res.setHeader("content-type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>server error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
