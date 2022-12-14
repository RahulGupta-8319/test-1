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
Router.post('/student/:id',authentication,authorization, studentController.createStudent )
Router.get('/student/:id',authentication,authorization, studentController.getStudents )
Router.put('/student/:id',authentication,authorization, studentController.updateStudent )
Router.delete('/student/:id',authentication,authorization, studentController.deleteStudent )

Router.get('/theStudent/:id', studentController.getStudent)


module.exports = Router
