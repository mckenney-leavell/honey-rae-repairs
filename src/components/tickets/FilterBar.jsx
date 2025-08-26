export const FilterBar = ({getShowEmergency, setSearchTerm}) => {

    return (
    <div className="filter-bar">
    <button className="filter-btn btn-primary" onClick={() => {
        getShowEmergency(true)
    }}>Emergency</button>
    <button className="filter-btn btn-info" onClick={() => {
        getShowEmergency(false)
    }}>Show All</button>
    <input
        onChange={(event) => {setSearchTerm(event.target.value)}}
        type="text"
        placeholder="search Tickets"
        className="ticket-search"
    />
    </div>
)}