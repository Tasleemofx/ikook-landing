import React, {useState} from 'react'
import canada from "../../assets/canada.png"
import usa from "../../assets/usa.png"
import uk from "../../assets/uk.png"
import nig from "../../assets/nig.png"
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { IoPersonOutline} from "react-icons/io5"
import Logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()
  const [edition, setEdition] = useState({name: "Canada", "flag": canada})
  const [openDropdown, setOpenDropdown] = useState(false)
  const [hideBar, setHideBar] = useState(false)
  const [countries, setCountries] = useState([
    {name: "USA", flag: usa},
    {name:"Canada",flag: canada},
    {name: "United Kingdom",flag: uk},
    {name: "Nigeria",flag:  nig}])

  return (
        <nav className="main-nav">
          <img src={Logo} alt="main-logo" className="main-logo"/>
             <span className={!hideBar?"nav-line hide":"nav-line"}>
              <span className="nav-form">               
                <form className="form-only">
                    <input type="text" placeholder="Location" />
                    <input type="date" placeholder="Event Date" />
                    <input type="text" placeholder="Guest" />
                    <button><AiOutlineSearch />Search</button>
                </form>
              </span>
              <FiShoppingCart />
              <a>Login</a>
              <div className="nav-end">
                <div className="rounded-d">
                  <IoPersonOutline className="g-r" />
                  <GiHamburgerMenu onClick={()=> setHideBar(!hideBar)}/>
                  {
                    hideBar && <div className="sing-in-modal">
                      <span className="sing-in-item" >Signup as Customer</span>
                      <span  className="sing-in-item" onClick ={()=> navigate("/signup")}>Sign up as Chef</span>
                      <span className="sing-in-item" >Services</span>
                      <span className="sing-in-item" >How it Works</span>
                      <span className="sing-in-item" >Gift</span>



                    </div>
                  }
                </div>
              <span className={openDropdown?"edition opd":"edition"} 
              onClick={()=> setOpenDropdown(!openDropdown)}>
                <img src={edition.flag} alt="country" className="country" 
                onClick={()=> setEdition(edition)} />
                {!openDropdown? <BiDownArrow />: <BiUpArrow/>}
                {
                  openDropdown && <ul className="countries-div">
                    {
                      countries.filter(item=> item.name !== edition.name)
                      .map((item,i)=>{
                        return <li key={i} className="c-liast" onClick={()=> setEdition(item)} >{item.name}</li>
                      })
                    }
                    
                    
                  </ul>
                }
                
              </span>
              </div>
            </span>
        </nav>
  )
}

export default Nav