const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, buffer) => {
  if (error) {
    console.log(error.message);
    return;
  }
  let array = buffer.split("\n");
  let arrLen = array.length - 1;
  console.log(arrLen);
});
