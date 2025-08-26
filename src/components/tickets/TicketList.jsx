import { useEffect, useState } from "react";
import { Ticket } from "./Ticket";
import "./Tickets.css"
import { FilterBar } from "./FilterBar";
import { getAllTickets } from "../../services/ticketService";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, getShowEmergency] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
    getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray);
        console.log("tickets set!");
    });
    }, []); // only runs on initial render of component

    useEffect(() => {
        if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
        } else {
        setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const foundTickets = allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
        <FilterBar setShowEmergencyOnly={getShowEmergency} setSearchTerm={setSearchTerm}/>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} />
        })}
      </article>
    </div>
  );
}