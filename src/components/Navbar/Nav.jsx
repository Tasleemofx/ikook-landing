import React, {useState} from 'react'
import canada from "../../assets/canada.png"
import usa from "../../assets/usa.png"
import uk from "../../assets/uk.png"
import nig from "../../assets/nig.png"
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import Logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()
  const [edition, setEdition] = useState({name:"United Kingdom", "flag": uk})
  const [openDropdown, setOpenDropdown] = useState(false)
  const [hideBar, setHideBar] = useState(false)
  const [countries, setCountries] = useState([
    {name: "USA", flag: usa},
    {name:"Canada",flag: canada},
    {name: "United Kingdom",flag: uk},
    {name: "Nigeria",flag:  nig}])

  return (
        <nav className="main-nav pad1">
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
              <div>
              
              <div className="nav-end">
                <FiShoppingCart />
                <a>Login</a>
                <div className="rounded-d">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M16.922 17.5V15.8333C16.922 14.9493 16.5708 14.1014 15.9456 13.4763C15.3205 12.8512 14.4727 12.5 13.5886 12.5H6.92196C6.0379 12.5 5.19005 12.8512 4.56493 13.4763C3.93981 14.1014 3.58862 14.9493 3.58862 15.8333V17.5M13.5886 5.83333C13.5886 7.67428 12.0962 9.16667 10.2553 9.16667C8.41434 9.16667 6.92196 7.67428 6.92196 5.83333C6.92196 3.99238 8.41434 2.5 10.2553 2.5C12.0962 2.5 13.5886 3.99238 13.5886 5.83333Z" stroke="#FCC01C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
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
              </div>
            </span>
        </nav>
  )
}

export default Nav