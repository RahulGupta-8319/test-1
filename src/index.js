const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route.js")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://rahul:rahul123@cluster0.ghayzlv.mongodb.net/task01", {
    useNewUrlParser : true
})
.then( () => console.log("monogoDb connected"))
.catch( (e) => console.log(e.message) )

app.use('/', route)

app.all('/*' , (req,res)=>{
    res.status(404).send("page not found")
})


app.listen(3001, ()=>{
    console.log(`server is runing on 3001`)
})