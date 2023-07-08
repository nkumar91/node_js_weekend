const CONSTANT = require("../constant/Constant");
const EmpModel = require("../model/EmployeeModel");
const ImageModel = require("../model/ImageModel");
exports.addEmployee = async (request, response) => {
    try {
        const body = request.body
        const data = {
            empName: body.empName,
            empEmail: body.empEmail,
            empAddress: body.empAddress,
            empJobCity: body.empJobCity,
            empDocNo: body.empDocNo,
        }

        const resData = await EmpModel.create(data);
        if (resData) {
            response.json({
                status: "success",
                message: "Add Employee Successfully"
            })
        }
        else {
            response.json({
                status: "failed",
                message: "Already Created"
            })
        }

    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Email is is Unique"
        })
    }
}


exports.getEmployee = async (request, response) => {
    try {
        const resData = await EmpModel.find();
        console.log(request.session.name)
        if (resData) {
            response.json({
                status: "success",
                data: resData
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}


exports.getEmployeeUi = async (request, response) => {
    try {
        const resData = await EmpModel.find();
        request.session.name = "mukesh"
        console.log(request.session.id)
        const m  = request.session.name;
        if (resData) {
          response.render("employee",{data:resData,v:m});
        }
        else{

        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}


exports.getSingleEmployee = async (request, response) => {
    try {
        const emp_id = request.params.emp_id;
        const resData = await EmpModel.findOne({ _id: emp_id });
        if (resData) {
            response.json({
                status: "success",
                data: resData
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}

exports.deleteEmployee = async (request, response) => {
    try {
        const emp_id = request.params.emp_id;
        const resData = await EmpModel.deleteOne({ _id: emp_id });
        if (resData) {
            response.json({
                status: "success",
                message: "Delete Successfully"
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}


exports.updateEmployee = async (request, response, next) => {
    try {
        const emp_id = request.params.emp_id;
        const body = request.body
        const data = {
            empName: body.empName,
            empAddress: body.empAddress,
            empJobCity: body.empJobCity,
            empDocNo: body.empDocNo,
        }

        const resData = await EmpModel.updateOne({ _id: emp_id }, data);
        if (resData) {
            response.json({
                status: "success",
                message: "Update Employee Successfully"
            })
        }
        else {
            response.json({
                status: "failed",
                message: "Already Created"
            })
        }

    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Email is is Unique"
        })
    }
}


exports.uploadImage = async (request, response, next) => {
    try {
        const data = request.body
        const imagepath = request.image_nikalo_na;
        const res = await ImageModel.create({ name: data.name, image_path: imagepath })
        if (res) {
            response.json({
                status: "upload Image Successfully",
                path: imagepath
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "upload Failed"
        })
    }
}


exports.getAllImage = async (request,response,next)=>{
    try {
        const resData = await ImageModel.find();
        resData.map(ele=>{
            ele.image_path = `${CONSTANT.IMAGE_HOST}${ele.image_path}`
        })
        if (resData) {
            response.json({
                status: "success",
                data: resData
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}


exports.imageDedo = async (request,response,next)=>{
    try {
        const resData = await ImageModel.find();
        resData.map(ele=>{
            ele.image_path = `${CONSTANT.IMAGE_HOST}${ele.image_path}`
        })

        response.render('payment',{myData:resData})
      // response.render('payment',{name:"avneesh"})
       
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}