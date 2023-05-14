const express = require('express')
const AuthController = require('../controller/AuthController')
const authRouter = express.Router()


authRouter.post("/signup",AuthController.signup)
authRouter.post("/signin",AuthController.signin)


module.exports =  authRouter
