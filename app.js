const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get("/data",function(request,response){
  
    response.json({
        status:"success"
    })
})

app.get("/jodo",function(request,response){

    const data = request.query
    console.log(data)
    response.json({
        message:"Jod Diya",
        yourData:data.name+ " "+data.email+" hello"
    })
})

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


module.exports = app