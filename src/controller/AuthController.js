
exports.signup = (request,response)=>{
    try{
        const bodyData = request.body
        if(bodyData.name.length > 5)
                response.status(200).json({
                    status:"success",
                    token:"dfghwe8e5233",
                    name:"Mukesh",
                    email:"mukesh@s.com",
                    id:4,
                    message:"Signup Successfully"
                })
       else{
            response.status(200).json({
                status:"failed",
            
            
                message:"your name length should be greater than 5"
            })
        }          
    }
    catch(err){
        response.status(500).json({
            status:"failed",
            message:"invalid details"
        })
    }
}

exports.signin = (request,response) =>{
    response.json({
        status:"signin"
    })
}