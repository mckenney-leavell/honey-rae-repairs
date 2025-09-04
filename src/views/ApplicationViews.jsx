import { Route, Routes, Outlet } from "react-router-dom";
import { EmployeeNav } from "../components/nav/EmployeeNav";
import { Welcome } from "../components/welcome/welcome";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { EmployeeList } from "../components/employees/EmployeeList";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { useState, useEffect } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser}/>
  );
};
