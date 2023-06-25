const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const authRouter = require('./src/routes/AuthRouter')
const empRouter = require('./src/routes/EmployeeRouter')
const path = require('path')
const session = require('express-session')

// app.use(cookieParser());
app.use(session({secret: "hello"}));
app.set('views', path.join(__dirname, 'src/views')) // nodejslearn/src/views
app.set("view engine","ejs")
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
// app.use(multer().none())


// app.get("/",function(request,response,next){
//     response.render('home')
// })

app.use("/static",express.static("./public/static"));
app.use("/image",express.static("./public/upload"));
app.use("/auth",authRouter)
app.use("/api",empRouter);






// app.get("/data",function(request,response){
  
//     response.json({
//         status:"success"
//     })
// })

// app.get("/jodo",function(request,response){

//     const data = request.query
//     console.log(data)
//     response.json({
//         message:"Jod Diya",
//         yourData:data.name+ " "+data.email+" hello"
//     })
// })

// app.post("/data",function(request,response){
//     response.json({
//         status:"Daro Mat Bhai Project Karo"
//     })
// })
// app.put("/data",function(request,response){
//     response.json({
//         status:"Update Karo bhai"
//     })
// })
// app.delete("/data",function(request,response){
//     response.json({
//         status:"Delete Karo bhai"
//     })
// })

 // middleware  (application level middleware , built middleware,erorr middleware,route based middleware)
//app.use('/signup',express.json()) 

// app.post("/signup",function(request,response){
//     const rdata = request.body
//     response.json({data:rdata})
// })

// app.post("/signupp",function(request,response){
//     const rdata = request.body
//     response.json({data:rdata})
// })

// app.post("/signup/:id/:my",function(request,response){
//     const x = request.params.my
//     response.json({data:x})
// })

// app.post("/urlencode",function(request,response){
//     const data = request.body
//     response.json({data:data})
// })

// app.post("/formdata",   function(request,response){
//     const data = request.body
//     response.json({data:data})
// })




module.exports = app