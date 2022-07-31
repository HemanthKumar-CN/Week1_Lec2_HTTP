const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // request handler

  // console.log(request.headers.cookie);
  // response.setHeader("content-type", "application/json");
  console.log(request.url);

  if (request.url == "/") {
    return response.end("Welcome !");
  }

  if (request.url == "/products") {
    response.setHeader("content-type", "application/json");
    return response.end(JSON.stringify([1, 2, 3]));
  }

  if (request.url == "/web") {
    return response.end("<h1>Sample html tag <h1>");
  }

  if (request.url == "/file") {
    const al = fs.readFileSync("./file.txt", "utf8", (err, data) => {
      if (err) {
        return "Error";
      } else {
        return data;
      }
    });

    return response.end(al);
  }

  response.write("Hello ");
  response.write("my !");
  response.end();
  // response.end(" world..!");
});

server.listen(3000, () => {
  console.log("server started on localhost:3000/");
});

// This call back is optional can be given
