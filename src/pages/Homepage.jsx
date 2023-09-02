import React, { useState} from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'
import ChefAtHome from '../components/Details/CAH'
import "./styles/homepage.css"
import Filter from '../components/Filtermenu/Filter'


const Homepage = () => {
  const [currentData, setCurrentData] = useState("Chef at Home")
  const [customBookings, setCustomBookings] = useState("")
  const [openFilter, setOpenFilter] = useState(false)
  function handleFilter(){
      setOpenFilter(true)
  }
  return (
    <>
        <Nav />
        <nav className="filter-nav">
          <ul>
            <li onClick={()=> setCurrentData("Chef at Home")} 
            className={currentData ==="Chef at Home"? "active":""}>Chef at Home</li>
            <li onClick={()=> setCurrentData("Large Event")} 
            className={currentData ==="Large Event"? "active":""}>Large Event</li>
            <li onClick={()=> setCurrentData("Meal Prep")} 
            className={currentData ==="Meal Prep"? "active":""}>Meal Prep</li>
            <li onClick={()=> setCurrentData("Gourmet Delivery")} 
            className={currentData ==="Gourmet Delivery"? "active":""}>Gourmet Delivery</li>
            <li onClick={()=> setCurrentData("Cooking Class")} 
            className={currentData ==="Cooking Class"? "active":""}>Cooking Class</li>
            <li onClick={()=> setCurrentData("Fine Dining")} 
            className={currentData ==="Fine Dining"? "active":""}>Fine Dining</li>
            <li onClick={()=> setCurrentData("Corporate Dining")} 
            className={currentData ==="Corporate Dining"? "active":""}>Corporate Dining</li>
            <li onClick={()=> setCurrentData("Chefs")} 
            className={currentData ==="Chefs"? "active":""}>CHEFS</li>
          </ul>
          <hr/>
          <span onClick={handleFilter} className="filter-btn">Filter</span>
        </nav>

        <div className="c-book-div">
          <input type="text" placeholder="Can't find what you want? use custom bookings"
          onChange={(e)=> setCustomBookings(e.target.value)} value={customBookings} />
          <button className="cb-btn">Custom Booking</button>
        </div>
        <div>
          <h3>{currentData}</h3>
          
        </div>
        { openFilter && <Filter setOpenFilter={setOpenFilter}/>}
        {<ChefAtHome currentData={currentData}/>}
        <Footer/>
    </>
  )
}

export default Homepage;