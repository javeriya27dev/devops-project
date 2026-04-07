const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from my DevOps project 🚀");
  res.end();
}).listen(3000);
