const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], function(error, list) {
  if (error) {
    console.log(error.message);
    return;
  }
  for (let i = 0; i < list.length; i++) {
    let exName = path.extname(list[i]);
    let noDot = exName.slice(1);
    if (noDot == process.argv[3]) {
      console.log(list[i]);
    }
  }
});
