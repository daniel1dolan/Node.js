const http = require("http");

const server = http.createServer((request, response) => {
  //   response.statusCode = 200;
  //   response.setHeader("Content-Type", "text/plain");
  //   response.end("hello world");
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end("home page");
      break;
    case "/aboutUs":
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end("About us page");
      break;
    default:
      response.statusCode = 404;
      response.end("page not found");
  }
});

server.listen(5000, () => {
  console.log("running on port 5000");
});
