const express = require("express")

const Router = express.Router()
const teacherController = require('../controller/teacherController') 

Router.get('/test', (req,res)=>{
    res.send("testing successful")
})

Router.post('/signUp' , teacherController.signUp)

module.exports = Router
