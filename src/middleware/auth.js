const jwt = require("jsonwebtoken")

let authentication = async (req,res,next) =>{
    try {
        let bearerToken = req.headers.authorization
        let token = bearerToken.split(" ")

        jwt.verify(token[1], "secretKey", (err, decoded)=>{
            if(err) return res.status(401).send({status:false, msg:err.message})

            req.token = decx


        })
        console.log(token);
        next()
    } catch (error) {
        return res.status(500).send({status:false, msg:error.message})
    }
}
let authorization = async (req,res,next) =>{
    try {
        
    } catch (error) {
        return res.status(500).send({status:false, msg:error.message})
    }
}

module.exports = {authentication, authorization}

