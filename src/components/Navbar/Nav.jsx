import React, {useState} from 'react'
import canada from "../../assets/canada.png"
import usa from "../../assets/usa.png"
import uk from "../../assets/uk.png"
import nig from "../../assets/nig.png"
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSolidDownArrow } from "react-icons/bi"
import { IoPersonOutline} from "react-icons/io5"
import Logo from "../../assets/logo.png"
import "./nav.css"

const Nav = () => {
  const [edition, setEdition] = useState(canada)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [hideBar, setHideBar] = useState(false)
  const [countries, setCountries] = useState([usa, canada, uk, nig])

  return (
        <nav className="main-nav">
          <img src={Logo} alt="main-logo" className="main-logo"/>
              <span className={!hideBar?"nav-form hide":"nav-form"}>
                <form className="form-only">
                    <input type="text" placeholder="Location" />
                    <input type="text" placeholder="Event Date" />
                    <input type="text" placeholder="Guest" />
                    <button><AiOutlineSearch />Search</button>
                </form>
              </span>
            <span className="nav-line">
              <FiShoppingCart />
              <a>Login</a>
              <div className="nav-end">
                <div className="rounded-d">
                  <IoPersonOutline className="g-r" />
                  <GiHamburgerMenu onClick={()=> setHideBar(!hideBar)}/>
                </div>
              <span className={openDropdown?"edition opd":"edition"} 
              onClick={()=> setOpenDropdown(!openDropdown)}>
                <img src={edition} alt="country" className="country" 
                onClick={()=> setEdition(edition)} />
                <BiSolidDownArrow />
                {
                  openDropdown && <div className="countries-div">
                    {
                      countries.filter(item=> item !== edition)
                      .map((item,i)=>{
                        return <img src={item} key={i} alt="country" className="country" 
                onClick={()=> setEdition(item)} />
                      })
                    }
                    
                    
                  </div>
                }
                
              </span>
              </div>
            </span>
        </nav>
  )
}

export default Nav