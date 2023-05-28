const SignupModel = require("../model/AccountModel");

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
            data:dbRes
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






exports.signin = (request,response) =>{
    response.json({
        status:"signin"
    })
}