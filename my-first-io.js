const fs = require("fs");

let something = fs.readFileSync(process.argv[2]);

let str = something.toString();
let array = str.split("\n");
let arrLen = array.length - 1;
console.log(arrLen);
