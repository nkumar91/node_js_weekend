const EmpModel = require("../model/EmployeeModel")
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


exports.getSingleEmployee = async (request, response) => {
    try {
        const emp_id = request.params.emp_id;
        const resData = await EmpModel.findOne({_id:emp_id});
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
        const resData = await EmpModel.deleteOne({_id:emp_id});
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


exports.updateEmployee = async (request,response,next)=>{
    try {
        const emp_id = request.params.emp_id;
        const body = request.body
        const data = {
            empName: body.empName,
            empAddress: body.empAddress,
            empJobCity: body.empJobCity,
            empDocNo: body.empDocNo,
        }

        const resData = await EmpModel.updateOne({_id:emp_id},data);
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


exports.uploadImage = async (request,response,next)=>{
    try{
        const data = request.body
        const imagepath = request.image_nikalo_na;
     response.json({
        status:"upload Image",
        path:imagepath,
        data:data.name[0].city
     })
    }
    catch(err){
        response.json({
            status: "failed",
            message: "upload Failed"
        })
    }
}