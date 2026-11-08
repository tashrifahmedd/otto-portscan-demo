const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Otto port-scan demo app\n");
  })
  .listen(port, () => console.log(`listening on ${port}`));
