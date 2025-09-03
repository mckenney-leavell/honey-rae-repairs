export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets").then(res => res.json())
}

export const getEmployeeServiceTickets = (id) => {
    return fetch (`http://localhost:8088/employees?_embed=employeeTickets&userId=${id}`).then(res => res.json())
}