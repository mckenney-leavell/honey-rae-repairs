import { useEffect, useState } from "react";
import { Ticket } from "./Ticket";
import "./Tickets.css"
import { FilterBar } from "./FilterBar";
import { getAllTickets } from "../../services/ticketService";

export const TicketList = ( {currentUser} ) => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, getShowEmergency] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [showOpenOnly, setShowOpenOnly] = useState(false)

    const getAndSetTickets = () => {
      getAllTickets().then((ticketsArray) => {
        if (currentUser.isStaff) {
          setAllTickets(ticketsArray)
        } else {
          const customerTickets = ticketsArray.filter(
            (ticket) => ticket.userId === currentUser.id
          )
          setAllTickets(customerTickets)
        }

    });
    }

    useEffect(() => {
      getAndSetTickets()
    }, [currentUser]); // only runs on initial render of component

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

    useEffect(() => {
      if (showOpenOnly) {
        const openTickets = allTickets.filter(ticket => 
            ticket.dateCompleted === ''
        )
        setFilteredTickets(openTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showOpenOnly, allTickets])

    // useEffect(() => {
    //   const userTickets = allTickets.filter((ticket) => {
    //     if (ticket.userId === currentUser.id) {
    //       setFilteredTickets(userTickets)
    //     }
    //   })
    // }, [allTickets, filteredTickets, currentUser])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
        <FilterBar 
          setShowEmergencyOnly={getShowEmergency} 
          setSearchTerm={setSearchTerm} 
          currentUser={currentUser} 
          // setFilteredTickets={setFilteredTickets}
          setShowOpenOnly={setShowOpenOnly}
          />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket 
            ticket={ticketObj} 
            currentUser={currentUser} 
            getAndSetTickets={getAndSetTickets}
            key={ticketObj.id} />
        })}
      </article>
    </div>
  );
}