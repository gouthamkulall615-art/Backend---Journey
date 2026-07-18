// console.log("hello world");

// const os = require("os");
// const path = require("path");
// const { add, sub, mult, div } = require("./math");

// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mult(2, 3));
// console.log(div(2, 3));
// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.homedir());

// // console.log(__dirname);
// // console.log(__filename);

// // console.log(path.dirname(__filename));
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));

// console.log(path.parse(__filename));

const fs = require("fs");
const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);

const textOut=`This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./ouput.txt',textOut)
console.log("file Written")
// const hello = "Hello world";
// console.log(hello);
