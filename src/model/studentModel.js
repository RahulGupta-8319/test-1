const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema({
    teacherId:{
        type:objectId,
        ref:'Teacher'
    },
    name:String,
    subject:String,
    marks:Number,
    isDeleted:{
        type:Boolean,
        default:false
    }
}, {timestamps : true})

module.exports = mongoose.model("Student", studentSchema)