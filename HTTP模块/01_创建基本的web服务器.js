const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("some visit our web server");
});
server.listen(2222, () => {
  console.log("server running at http://127.0.0.1:0123");
});
