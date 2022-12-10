const teacherModel = require("../model/teacherModel")


const isEmpty = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  };
//   let nameRegex = //


const signUp = async function(req,res){
    try {
        let data = req.body
        let {name , email, mobile, password} = data

        // if(!isEmpty(name)) return res.status(400).send({status:false, msg:"name is Empty"})
        let teacher = await teacherModel.create(data)
        return res.send(teacher)
    } catch (error) {
       return res.status(500).send({status:false, msg:error.message})       
    }

}

module.exports = {signUp}