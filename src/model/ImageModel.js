const mongoose = require('mongoose')
const Collection = require('../config/Collection');
require('../config/db')
const ImageSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is Required"]},
    image_path:{type:String,unique:true},
},{
    timestamps:true
})

const ImageModel = mongoose.model(Collection.image,ImageSchema)
module.exports = ImageModel



