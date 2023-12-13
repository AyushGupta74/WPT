import express from "express"

let app = express()

//the callback func(req,res) is the restfulweb service
app.get("/",(req,res)=>{
    console.log("request arrived")
    res.send("HI from mywebserver...")
})

app.get("/getmsg",(req,res)=>{
     res.send("where there is a will there is a way")
})

app.post("/postmsg",(req,res)=>{
    res.send("post it correctly!!")
})

app.put("/putmsg",(req,res)=>{
    res.send("put it away!!")
})

app.delete("/delmsg",(req,res)=>{
    res.send("delete everything!!")
})



app.listen(7000,()=>{
    console.log("server running on port 7000...")
})