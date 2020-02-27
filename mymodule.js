const fs = require("fs");
const path = require("path");

module.exports = function(directory_name, filterParam, callback) {
  fs.readdir(directory_name, (error, list) => {
    if (error) {
      return callback(error);
    }
    let array = [];
    for (let i = 0; i < list.length; i++) {
      let exName = path.extname(list[i]);
      let noDot = exName.slice(1);
      if (noDot == filterParam) {
        array.push(list[i]);
      }
    }
    callback(null, array);
  });
};
