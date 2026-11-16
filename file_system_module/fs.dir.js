import fs from "fs"

// create the directory 
fs.mkdir("./myFolder",(err)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("Directory is appended successfully ")
    fs.writeFile("script.js","Hello",(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("file created ")
    })

    fs.readdir("./myFolder",(err,files)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("files:",files);
        })
})