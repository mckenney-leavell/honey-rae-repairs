import "./EmployeeList.css"
import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]) 
    
    useEffect(() => {
        getStaffUsers().then((employeesArr) => {
            setEmployees(employeesArr)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map((employee) => {
                return <User user={employee} key={employee.id}/>
            })}
        </div>
    )

}