const fs = require("fs")

// umplement CRUD oprs using node.js

//1. create a file
fs.writeFileSync("notes.txt","hello node.js")

//2. read the content of the file 
const data = fs.readFileSync("notes.txt", "utf8")
console.log("Read Data:", data);

//3.update the content 
fs.appendFileSync("notes.txt", "Hello ECE=2")

//4.delete the file
fs.rmSync ("notes.txt")