const fs = require('fs')

//readable stream 
const readStream= fs.createReadStream("intro.txt" , {encoding:"utf-8",highWaterMark: 10})
readStream.on("data",(chunk)=>{
    console.log("Data received")
    console.log("Data:", chunk);
})

vonst writeStream = fs.createWriteStream("output.txt")
writeStream.write("hello")