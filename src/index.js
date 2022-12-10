const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route.js")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://rahul:rahul123@cluster0.ghayzlv.mongodb.net/task01", {
    useNewUrlParser : true
})

app.use('/', route)

app.all('/*' , (req,res)=>{
    res.status(404).send("page not found")
})


app.listen(3001, ()=>{
    console.log(`server is runing on 3001`)
})