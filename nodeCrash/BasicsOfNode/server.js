// console.log("hello world");

// const os = require("os");
// const path = require("path");
// const { add, sub, mult, div } = require("./math");

// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mult(2, 3));
// console.log(div(2, 3));
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

//Reading and writing files
const fs = require("fs");

//Blocking synchronus way
// const textIn = fs.readFileSync("./input.txt", "utf-8");
// console.log(textIn);

// const textOut=`This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./ouput.txt',textOut)
// console.log("file Written")
// const hello = "Hello world";
// console.log(hello);

// Non-blocking,asynchronous
fs.readFile("./start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR");
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written");
      });
    });
  });
});

console.log("will read file");
