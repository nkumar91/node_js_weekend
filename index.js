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

const app = require("./app");
const http = require('http');
const server = http.createServer(app);
const path = require('path')
const { Server } = require("socket.io");
const io = new Server(server);
const PORT_NO = 8080
const HOST = "localhost"

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , 'src/index.html'));
  });
  io.on('connection', (socket) => {
    console.log('a user connected');
  });
server.listen(8080,HOST,()=>{
    console.log(`server started http://${HOST}:${PORT_NO}`)
})
