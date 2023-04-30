const express = require('express')
const app = express()

app.get("/data",function(request,response){
    response.json({
        status:"success"
    })
})

app.post("/data",function(request,response){
    response.json({
        status:"Daro Mat Bhai Project Karo"
    })
})
app.put("/data",function(request,response){
    response.json({
        status:"Update Karo bhai"
    })
})
app.delete("/data",function(request,response){
    response.json({
        status:"Delete Karo bhai"
    })
})


module.exports = app