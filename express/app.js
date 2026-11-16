import express from 'express'
const app = express()
const data ={ 
 username : "Dushienth Rana ",
 location : "Delhi"
}
app.get("/",(req,res)=>{
// res.send("welcome From Express.js")
res.send(data)
})


app.listen(3000,()=>{
    console.log("server is running....")
})
app.get("/app/v1/books/:id",(req,res)=>{
    try{
        const book = bookData.find((book)=> book.id===req.params.id)
        res.jason({book:book})
    }catch (error){
        res.status(500).jason({
            status:"Fail",
            message : "Internal server error"
        })
    }
})
app.post("/app/v1/books",(req,res)=>{
res.send("post.req")
})
// app.delete("/",(req,res)=>{
    
// })
// app.patch("/",(req,res)=>{
    
// })
// app.put("/",(req,res)=>{
    
// })
app.listen(3000,()=>{
    console.log("server is running")
})