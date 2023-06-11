const mongoose = require('mongoose')
const Collection = require('../config/Collection')
require('../config/db')

const EmpSchema = new mongoose.Schema({
empName:String,
empEmail:{type:String,unique:true},
empAddress:String,
empJobCity:[{city:String}],
empDocNo:[Number],
empStatus:{type:Boolean,default:false},
},{timestamps:true})

const EmpModel = mongoose.model(Collection.empDetail,EmpSchema);

module.exports = EmpModel;



