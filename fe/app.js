const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3001;

const server = http.createServer((req, res) => {
  const filePath = "src/index.html";

  fs.readFile(filePath, (err, content) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content, "utf-8");
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
