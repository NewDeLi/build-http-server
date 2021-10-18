import { createServer } from "http";


const server = createServer((request, response) => {
    const books= JSON.stringify([
                  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
                  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
    ]);
    const authors= JSON.stringify([
                  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
                  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
              ]);
    
    switch (request.url) {
          
        case '/books':
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(books);
               break;
        case '/authors':
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(authors);
              break;
          default:
              
              break;
      }
});

server.listen(8001);
