const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'none'"
    });
    res.end("Otto port-scan demo app\n");
  })
  .listen(port, () => console.log(`listening on ${port}`));