const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String

}, {timepstamp: true})

module.exports = mongoose.model("Teacher", teacherSchema)