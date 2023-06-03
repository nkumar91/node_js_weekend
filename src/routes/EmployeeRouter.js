const express = require('express');
const { addEmployee,getEmployee,deleteEmployee,getSingleEmployee } = require('../controller/EmployeeController');
const empRouter = express.Router();

empRouter.post("/employee",addEmployee);
empRouter.get("/employee",getEmployee);
empRouter.get("/employee/:emp_id",getSingleEmployee);
empRouter.delete("/employee/:emp_id",deleteEmployee);



module.exports = empRouter;