const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../constant/Constant');
exports.AuthMiddleware = function(request,response,next){
    try{
        const token = request.headers["authorization"].split(" ")[1];
        const verified = jwt.verify(token, JWT_SECRET_KEY);
        if(verified){
            next();
        }
        else{
            response.status(401).json({
                status:"failed",
                message:"Unauthorized ! Access token was expired"
            });
        }
    }
    catch(err){
        response.status(401).json({
            status:"failed",
            message:"Unauthorized ! Access token was expired"
        });
    }
}