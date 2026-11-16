// import fs from "fs";
// setTimeout(() => {
//     console.log("setTimeout");
// },1000);

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log("readFile");
// }

// setInterval(() => {
//     console.log("setInterval 5 ms");
// }, 500);

// setImmediate(() => {
//     console.log("setImmediate");
// }


 fs.readFile("test.txt", "utf-8", (err, data) => {
     if(err) throw err;
   console.log("readFile");
   setTimeout(()=>{
console.log("setTimeout");
 },1000);
  setImmediate(()=>{
    console.log("setImmediate");
  })
}