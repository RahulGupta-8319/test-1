const express = require("express")

const Router = express.Router()
const teacherController = require('../controller/teacherController') 
const studentController = require('../controller/studentController')
const {authentication, authorization} = require("../middleware/auth")

Router.get('/test', (req,res)=>{
    res.send("testing successful")
})

//teacher
Router.post('/signUp' , teacherController.signUp)
Router.post('/login', teacherController.login)

//student
Router.post('/student/:id',authentication,studentController.createStudent )
Router.get('/student/:id',studentController.getStudent )
Router.put('/student/:id',studentController.updateStudent )
Router.delete('/student/:id',studentController.deleteStudent )


module.exports = Router
