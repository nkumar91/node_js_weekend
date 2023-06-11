const express = require('express');
const { addEmployee,getEmployee,deleteEmployee,getSingleEmployee, updateEmployee, uploadImage } = require('../controller/EmployeeController');
const { AuthMiddleware } = require('../middleware/AuthMiddleware');
const upload = require('../middleware/UploadMiddleware');

const empRouter = express.Router();

empRouter.post("/uploadImage",upload.single('myimage') ,uploadImage)
empRouter.use(AuthMiddleware);
empRouter.get("/employee",getEmployee);
empRouter.get("/employee/:emp_id",getSingleEmployee);
empRouter.delete("/employee/:emp_id",deleteEmployee);
empRouter.put("/employee/:emp_id",updateEmployee);
empRouter.post("/employee",addEmployee);






module.exports = empRouter;