const express = require('express');
const { addEmployee,getEmployee,deleteEmployee,getSingleEmployee, updateEmployee } = require('../controller/EmployeeController');
const { AuthMiddleware } = require('../middleware/AuthMiddleware');
const empRouter = express.Router();



empRouter.get("/employee",getEmployee);
empRouter.get("/employee/:emp_id",getSingleEmployee);
empRouter.delete("/employee/:emp_id",deleteEmployee);
empRouter.put("/employee/:emp_id",updateEmployee);
empRouter.use(AuthMiddleware);
empRouter.post("/employee",addEmployee);





module.exports = empRouter;