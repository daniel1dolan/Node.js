const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function(error, data) {
  if (error) {
    console.log(error.message);
    return;
  }
  data.forEach(element => {
    console.log(element);
  });
});
