import http from 'http';
import fs from 'fs';

const data = fs.readFileSync("./page_not_found/index.html");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home page");

    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact page");

    } else if (req.url === "/projects") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Projects page");

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
    }

});

server.listen(3000, () => {
    console.log("server is running.....");
});