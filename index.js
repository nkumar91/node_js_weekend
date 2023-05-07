// const http = require("http")
// const app = http.createServer(function(req,res){





//         const ur = req.url
        
//         if(ur === "/signup" && req.method === "POST"){
//         const obj = {
//             name:"Amit",
//             lastname:"kumar"
//         }

//         res.end(JSON.stringify(obj))
//     }
    
//     else{
//         res.end("Nahi Mila Url Thick Karo")
//     }
// })


// app.listen(4000,function(){
//     console.log("Server Started")
// })



// const {dd,b} = require('./src/model/MyModel')
// const fun  = require('./src/utils/Utils')

// console.log(dd())
// console.log(fun.fun())
// console.log(fun.kehlo())

// const { BhaiPrintKaro } = require("./src/utils/Utils");

// const { BhaiPrintKaro1 } = require("./src/utils/Utils");

const server = require("./app");

const PORT_NO = 8082
const HOST = "localhost"
server.listen(8082,HOST,()=>{
    console.log(`server started http://${HOST}:${PORT_NO}`)
})
