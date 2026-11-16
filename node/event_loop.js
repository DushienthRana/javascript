// import fs from 'fs'
// setTimeout (()=>{
//     console.log("setTimeout");
// })

// fs.readFile("intro.txt", "utf8", (err, data) => {
//     if (err){
//         console.error('error reading file:',err);
//         return;
//     }
//     console.log(data);

// setInterval(()=>
// {
//     console.log("set interval");
// } , 1000)

// setImmediate(()=>{
//     console.log("set immediate")
    
// })
// })

import fs from "fs";

fs.readFile("intro.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    setTimeout(()=>{
        console.log("setTimeout inside fs");
    },0)
    setImmediate(()=>{
        console.log("setImmediate inside fs")
    })
    console.log("file data read completed ")
})
process.nextTick(()=>{
console.log("nextTick")

    })