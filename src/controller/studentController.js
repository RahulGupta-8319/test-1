const { default: mongoose } = require("mongoose");
const teacherModel = require("../model/teacherModel")
const studentModel = require("../model/studentModel")

const isEmpty = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const isObject = mongoose.Types.ObjectId

//regex
let nameRegex = /^[a-z A-Z]+$/;
let marksRegex = /^[0-9]+$/;

const createStudent = async (req, res) => {
  try {
    let data = req.body;
    let { name, subject, marks } = data;
    let teacherId =JSON.parse( req.params.id )

    if (!isEmpty(name)) return res.status(400).send({ status: false, msg: "Enter student name.." });
    if (!nameRegex.test(name)) return res.status(400).send({ status: false, msg: "name should be in alphabate" });

    if (!isEmpty(subject)) return res.status(400).send({ status: false, msg: "Enter subject name.." });

    if (!isEmpty(marks)) return res.status(400).send({ status: false, msg: "enter marks.." });
    if (!marksRegex.test(marks)) return res.status(400).send({ status: false, msg: "marks should be in Numerical" });

    let student = await studentModel.findOneAndUpdate(
        {name:name, subject:subject, isDeleted:false, teacherId:teacherId},
        { $inc:{marks:marks}},
        {new:true, upsert:true})
    return res.status(201).send({status:true, data:student})
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const getStudents = async (req,res) =>{
    try {
        let teacherId = req.params.id
         
    

        let  queries = req.query
        let {name, subject} = queries

        let filter1 = {}
        let filter2 ={}

        if(name ){
            filter1.name = {}
            filter1.name["$regex"] = name
        }
        if(subject ){
            filter2.subject={}
            filter2.subject['$regex']= subject
        }

        let studentFromDB = await studentModel.find({$and:[filter1, filter2,{teacherId:teacherId} ,{isDeleted:false}]})

        if(studentFromDB.length == 0) return res.status(404).send({ status: false, msg: "students not found" });

        return res.status(200).send({ status: true, data:studentFromDB });

        
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message });
    }
}

const getStudent = async (req, res) =>{
    try {
        let studentId = req.params.id

        let student = await studentModel.findById(studentId)

        res.status(200).send({status:true, data:student})
        
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message });   
    }
}

const updateStudent = async (req,res) =>{
    try {
        let teacherId = req.params.id
         
        let data = req.body
        let {name, subject, marks} = data

        //db according input
        let student = await studentModel.findOneAndUpdate(
            {name:name, subject:subject, isDeleted:false, teacherId:teacherId},
            { $inc:{marks:marks}},
            {new:true, upsert:true})

        return res.status(200).send({ status: true, data: student }); 

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message }); 
    }
}

const deleteStudent = async (req,res)=>{
    try {
       
        // let data = req.body
        let studentId = req.body.studentId
        await studentModel.findByIdAndUpdate(studentId, {$set:{isDeleted : true}}, )

        return res.status(302).send({ status: true, message:"successfullty deleted" });      
        
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message });      
    }
}

module.exports = {createStudent, getStudents, updateStudent, deleteStudent, getStudent}

