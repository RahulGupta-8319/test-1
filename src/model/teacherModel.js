const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String

}, {timestamps: true})

module.exports = mongoose.model("Teacher", teacherSchema)