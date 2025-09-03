import "./Employees.css";
import { useState, useEffect } from "react";
// import { getStaffUsers } from "../../services/userService";
import { User } from "../users/User";
import { Link } from "react-router-dom";
import { getAllEmployees } from "../../services/employeeService";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeesArr) => {
      setEmployees(employeesArr);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        return (
        <Link to={`/employees/${employee.user.id}`} key={employee.user.id}>
        <User user={employee.user} key={employee.user.id} />
        </Link>
        )
      })}
    </div>
  );
};
