import React, { useContext, useState} from 'react'
import Navbar from "../components/Navbar/index"
import Footer from '../components/Footer/Footer'
import ChefAtHome from '../components/Details/CAH'
import "./styles/homepage.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import { IoFunnelOutline } from "react-icons/io5"
import Filter from '../components/Filtermenu/Filter'
import LargeEvent from '../components/Details/LE'
import MealPrep from '../components/Details/MP'
import GourmetDelivery from '../components/Details/GD'
import CookingClass from '../components/Details/CC'
import FineDining from '../components/Details/FD'
import CorporateDining from '../components/Details/CD'
import OurChefs from '../components/Details/OurChefs'
import DataContext from '../Context/DataContext'


const Homepage = () => {
  const {currentData, setCurrentData} = useContext(DataContext)
  const [customBookings, setCustomBookings] = useState("")
  const [openFilter, setOpenFilter] = useState(false)
  function handleFilter(){
      setOpenFilter(true)
  }
  return (
    <>
        <Navbar />
        <nav className="filter-nav pad1">
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
            <li onClick={()=> setCurrentData("Our Chefs")} 
            className={currentData ==="Our Chefs"? "active":""}>CHEFS</li>
            
            <li onClick={handleFilter} className="filt-btn">
              <span>Filter</span>
              <IoFunnelOutline/>
            </li>
          </ul>
          
        </nav>

       
        <div className="head-pop pad1">
          <h3>{currentData}</h3>
           <div className="c-book-div">
          <input type="text" placeholder="Can't find what you want? use custom bookings"
          onChange={(e)=> setCustomBookings(e.target.value)} value={customBookings} />
          <button className="cb-btn">Custom Booking</button>
        </div>
          <button className="most-pop">Most Popular <MdKeyboardArrowDown/> </button>
        </div>
        { openFilter && <Filter setOpenFilter={setOpenFilter} currentData={currentData}/>}
        {currentData === "Chef at Home" ? <ChefAtHome />:
        currentData === "Large Event" ? <LargeEvent  />:
        currentData === 'Meal Prep'? <MealPrep /> : 
        currentData === "Gourmet Delivery"? <GourmetDelivery/>: 
        currentData === "Cooking Class"? <CookingClass/>: 
        currentData === "Fine Dining"? <FineDining /> :
        currentData === "Corporate Dining"? <CorporateDining />: 
        currentData === "Our Chefs" && <OurChefs />}
        <section className="btn-mo">
          <button className="l-mo">Load more</button>
        </section>
        
        <Footer/>
    </>
  )
}

export default Homepage;