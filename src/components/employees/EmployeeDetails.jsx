import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEmployeeById } from "../../services/employeeService";
// import { getStaffUsers } from "../../services/userService"
// import { getAllTickets } from "../../services/ticketService";
import { getEmployeeServiceTickets } from "../../services/ticketService";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
      console.log("get employee", data);
      setEmployee(data[0]);
    });
  }, [employeeId]);

  useEffect(() => {
    getEmployeeServiceTickets(employeeId).then((data) => {
        data.map((dataObj) => {
            console.log(dataObj.employeeTickets.length)
            setTicketCount(dataObj.employeeTickets.length)
        })
    })
  })


  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email : </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty : </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate : </span>${employee.rate}
      </div>
      <footer className="employee-footer">Currently working on {ticketCount} tickets</footer>
    </section>
  );
};
