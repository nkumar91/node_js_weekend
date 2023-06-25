const CONSTANT = require("../constant/Constant");
const SignupModel = require("../model/AccountModel");
const { comparePassword, expireTokenTime } = require("../utils/Utils");
const jwt = require('jsonwebtoken');
exports.signup = async (request,response)=>{
    try{
      const body = request.body;
      const signupData = {
            name:body.name,
            email:body.email,
            password:body.password
      }
      const dbRes = await SignupModel.create(signupData);
      if(dbRes){
        response.status(200).json({
            status:"success",
            message:"Signup Successfully",
            data:{
              name:dbRes.name,
              _id:dbRes._id
            }
          })
      }
    }
    catch(error){
          const resError = {}
          resError.status = "failed"
          if (error.name === "ValidationError") {
              let errors = {};
              Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
              });
              resError.error = errors;
            }
          response.json(resError)
         
    }
}






exports.signin = async (request,response)=> {
      try{
        const body = request.body;
        const query = {email:body.email}
        const resData =  await  SignupModel.findOne(query,{name:1,_id:1,password:1})
        if(comparePassword(resData.password,body.password)){
         if(resData)
         {
          request.session.name = resData.name;
          let SecretKey = CONSTANT.JWT_SECRET_KEY
          let bindKaroBhai = {
              time: Date(),
              user_id: resData._id,
              email:resData.email,
              name:resData.name,
          }
          const token = jwt.sign(bindKaroBhai, SecretKey,expireTokenTime());

          response.json({
            status:"success",
            message:"Login Successfully",
            token:token,
            data:{
              name:resData.name
            }
          })
         }
        }
         else{
          response.json({
            status:"failed",
            message:"Your Password is Incorrect"
          })
         }
      }
      catch(err){
        console.log(err)
        response.json({
          status:"failed",
          message:"Something error !!"
        })
      }
}