const multer = require('multer')
const storage = multer.diskStorage({
    destination:"./public/upload",
    filename:function(req,file,cb){

    //    var xyz = "abc.png"
        // IMG456457645645775.png
        const myImageName = Date.now()+"-"+Math.round(Math.random()*1E9)
        const path = 'IMG'+myImageName+"."+file.originalname.split(".")[1]

        req.image_nikalo_na = path
        cb(null,path)
    }
})

const upload = multer({storage:storage})
module.exports = upload;