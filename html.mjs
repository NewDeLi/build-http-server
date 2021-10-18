import { createServer } from "http";

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
    response.end(
      `<html>
      <body>
        <h1>I AM HTML</h1>
      </body>
    </html>`
    );
});

server.listen(4500);
