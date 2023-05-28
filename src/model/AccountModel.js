const mongoose = require('mongoose')
const Collection = require('../config/Collection');
const { passwordEncoded } = require('../utils/Utils');
require('../config/db')
const SignupSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is Required"]},
    email:{type:String,unique:true},
    password:{type:String,required:[true,"Password is Required"]},
},{
    timestamps:true
})
SignupSchema.pre('save', function() {
   this.password = passwordEncoded(this.password)
});

const SignupModel = mongoose.model(Collection.userinfo,SignupSchema)
module.exports = SignupModel



