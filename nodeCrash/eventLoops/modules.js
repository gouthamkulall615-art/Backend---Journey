// console.log(arguments);

// console.log(require("module").wrapper);

//module.exports
const C = require("./test-module-1");

const calc1 = new C();
console.log(calc1.add(2, 5));

//export

// const calc2 = require("./test-module-2");

const { add, multiply } = require("./test-module-2");
console.log(multiply(4, 5));

//caching

require("./test-modules-3")();
require("./test-modules-3")();
require("./test-modules-3")();
