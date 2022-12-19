const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route.js")
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser : true
})
.then( () => console.log("mongoDb connected"))
.catch( (e) => console.log(e.message) )

app.use(express.static(path.join(__dirname,"../client/build")))
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})


app.use('/', route)

app.all('/*' , (req,res)=>{
    res.status(404).send("page not found")
})


app.listen(process.env.PORT || 3001, ()=>{
    console.log(`server is runing on 3001`)
})