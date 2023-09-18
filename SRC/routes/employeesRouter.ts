import { Router } from "express";
import {
    employeesRoot,
    employeesList,
    employeeDetailsByQuery,
    employeeDetailsByParams,
    addEmployee,
    updateEmployee,
    deleteEmployee,
} from "../controllers/employeesController";
    
 

const employeesRouter = Router();

 

employeesRouter.get("/", employeesRoot);


employeesRouter.get("/employeesList", employeesList);


employeesRouter.get("/employeeDetails/", employeeDetailsByQuery);


employeesRouter.get("/employeeDetails/:id", employeeDetailsByParams);


employeesRouter.post("/addEmployee", addEmployee);


employeesRouter.put("/updateEmployee", updateEmployee);


employeesRouter.delete("/deleteEmployee", deleteEmployee);


export default employeesRouter;