// console.log(global) //windows
// console.log(process) //documents

// const { generateRandomNumber, celToFah } = require("./utils");

// console.log(`Random No:${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit:${celToFah(0)}`);/

import { getPosts } from "./postController.js";

console.log(getPosts())
