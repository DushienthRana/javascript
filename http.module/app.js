// import http from 'http';

// const server = http.createServer((req, res) => {

//     console.log("Hello World");

//     const order = {
//         orderId: 123,
//         ordername: "iphone"
//     };

//     res.writeHead(200, { "Content-Type": "application/json" });

//     res.end(JSON.stringify(order));
// });

// const PORT = 3001;
// const ADDRESS = "127.0.0.1";

// server.listen(PORT, ADDRESS, () => {
//     console.log("Server is running..");
// });

import fs from 'fs';

fs.readFile('page_not_foundindex.html', 'utf-8',(err,data) => {
    if (err) {
        console.log(err);
        return;
    }
console.log("File read successfully")
    console.log(data);
});