const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url == "/") {
    res.end("Yo Yo !!");
  } else {
    res.end("Went wrong");
  }
});

// server.listen(5000)

server.listen(5000, () => {
  console.log("5000 port started running");
});

// http verbs: GET, POST, DELETE, PUT, PATCH

// benchmarking
