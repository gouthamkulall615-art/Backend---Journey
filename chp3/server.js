import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
    //   res.write("hello computer");

   res.writeHead(500,{'content-type':'application/json'})

  res.end(JSON.stringify({message:'server Erroe'}));
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
