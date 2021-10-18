import { createServer } from 'http';

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
        JSON.stringify({
            data: 'I am JSON',
        })
    );
});

server.listen(8000);