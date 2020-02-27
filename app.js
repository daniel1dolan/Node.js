// let messages = require("./log");

// messages.info("The weather is nice.");

// let dog = require("./myString");

// console.log(dog);

// const http = require("http");

// let myServer = http.createServer((request, response) => {
//   //code goes here for dealing with requests and giving back responses
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/html");
//   response.end("<h1 style='color:red;'> Hello World</h1>");
// });

// myServer.listen(3000, () => {
//   console.log("big brother is listening on port 3000");
// });

// const fs = require("fs");

// let filename = "./test.html";

// fs.readFile(filename, (error, buffer) => {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log("file data: ", buffer.toString());
// });

// fs.writeFile("ourFile.txt", "Loremo", error => {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log("ourFile.txt was saved.");
// });

// const request = require("request");
// request("http://www.google.com", function(error, response, body) {
//   console.log(`body: ${body}`);
// });

const http = require("http");

let myServer = http.createServer((request, response) => {
  //code goes here for dealing with requests and giving back responses
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1 style='color:red;'> Hello World</h1>");
});

myServer.listen(3000, () => {
  console.log("big brother is listening on port 3000");
});
