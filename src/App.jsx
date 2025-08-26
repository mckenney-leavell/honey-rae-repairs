import "./App.css"
import { CustomerList } from "./components/components/CustomerList";
import { EmployeeList } from "./components/components/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";

export const App = () => {
  return (<>
    {/* <TicketList /> */}
    {/* <CustomerList /> */}
    <EmployeeList />
  </>
  )
};
