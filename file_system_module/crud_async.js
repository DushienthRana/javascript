const fs = require("fs")

// 1. create a file
fs.writeFile("notes.txt","FS module started", (err)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File written successfully");
});

//2. read the file
fs.readFile("notes.txt", (err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

//3. append file content 

fs.appendFile("notes.txt","this data is append int he last"(err)=>
{
    if(err){
        console.log(err);
    }
    console.log("data is append succesfully ");
})

//4. delete the file 
fs.rm("note.txt",(err)=>{
    if (err){
        console.log(err);
    }
})