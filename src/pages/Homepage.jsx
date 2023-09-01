import React, { useState} from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'
import Menudetails from '../components/Details/Menudetails'

const Homepage = () => {
  const [currentData, setCurrentData] = useState("Chef at Home")
  return (
    <>
        <Nav />
        <nav>
          <ul>
            <li onClick={()=> setCurrentData("Chef at Home")}>Chef at Home</li>
            <li onClick={()=> setCurrentData("Large Event")}>Large Event</li>
            <li onClick={()=> setCurrentData("Meal Prep")}>Meal Prep</li>
            <li onClick={()=> setCurrentData("Gourmet Delivery")}>Gourmet Delivery</li>
            <li onClick={()=> setCurrentData("Cooking Class")}>Cooking Class</li>
            <li onClick={()=> setCurrentData("Fine Dining")}>Fine Dining</li>
            <li onClick={()=> setCurrentData("Corporate Dining")}>Corporate Dining</li>
            <li onClick={()=> setCurrentData("Chefs")}>CHEFS</li>
          </ul>
          <hr/>
          <span>Filter</span>
        </nav>
        <Menudetails currentData={currentData}/>
        <Footer/>
    </>
  )
}

export default Homepage;