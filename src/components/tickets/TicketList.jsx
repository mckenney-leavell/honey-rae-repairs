import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import { Ticket } from "./Ticket";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, getShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set!");
    });
  }, []); // only runs on initial render of component

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => {
          getShowEmergency(true)
        }}>Emergency</button>
        <button className="filter-btn btn-info" onClick={() => {
          getShowEmergency(false)
        }}>Show All</button>
      </div>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} />
        })}
      </article>
    </div>
  );
}