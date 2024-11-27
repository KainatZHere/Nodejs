import http from "node:http";

http
  .createServer((req, res) => {
    res.writeHead(200, "Succesfully", {
      "Content-Type": "application/json",
    });
    res.write(JSON.stringify({ name: "Kainat Zahra", age: 22 }));
    res.end();
  })
  .listen(5000);
