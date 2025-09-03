import { useEffect, useState } from "react"
import "./Form.css"
import { getEmployeeById } from "../../services/employeeService"

export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(currentUser.id).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [currentUser])

    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input type="text" required className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                    <input type="number" required className="form-control" />
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary">Save Profile</button>
                </div>
            </fieldset>     
        </form>
    )
}