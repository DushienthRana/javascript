import http = require('http')
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.method ==="GET"&& req.url === "/") {
        res.end("Home page");
    }
    else if (req.method ==="POST"&& req.url === "/") {
        res.end("object Added")
    }else {
        res.end("Page not found")
    }
})
server.listen(3000, () => {
    console.log("server is running.....");