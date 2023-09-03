import React, {useState} from 'react'
import canada from "../../assets/canada.png"
import usa from "../../assets/usa.png"
import uk from "../../assets/uk.png"
import nig from "../../assets/nig.png"
import Logo from "../../assets/logo.png"
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonOutline } from 'react-icons/io5'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Navmobile = () => {
    const navigate = useNavigate()
    const [hideBar, setHideBar] = useState(true)
    const [showSignup, setShowSignup] = useState(false)
    const [country, setCountry] = useState(false)
    const [edition, setEdition] = useState({name: "Canada", "flag": canada})
      const [countries, setCountries] = useState([
    {name: "USA", flag: usa},
    {name:"Canada",flag: canada},
    {name: "United Kingdom",flag: uk},
    {name: "Nigeria",flag:  nig}])

  return (
    <nav className="mob-nav">
        <img src={Logo} alt="main-logo" className="mob-logo" />
        {hideBar? <GiHamburgerMenu onClick={()=> setHideBar(!hideBar)}className="burg-cl" />:
        <AiFillCloseCircle onClick={()=> setHideBar(!hideBar)} className="burg-cl" />}
        {
            !hideBar && 
            (<div className="dropdown-mn">
                <span className="nav-form">
                    <form className="mob-form">
                        <input type="text" placeholder='Location'/>
                        <input type="date" placeholder="Event Date"/>
                        <input type="text" placeholder='Guests'/>
                        <button><AiOutlineSearch/> Search</button>
                    </form>
                </span>
                <span className='sidemen'>
                    <FiShoppingCart />
                    <a>Login</a>
                    <div className="rounded-m">
                        <IoPersonOutline className="g-r" />
                        <GiHamburgerMenu onClick={()=> setShowSignup(!showSignup)}/>
                        {
                    showSignup && <div className="sing-in-modal">
                      <span className="sing-in-item" >Signup as Customer</span>
                      <span  className="sing-in-item" onClick ={()=> navigate("/signup")}>Sign up as Chef</span>
                      <span className="sing-in-item" >Services</span>
                      <span className="sing-in-item" >How it Works</span>
                      <span className="sing-in-item" >Gift</span>



                    </div>
                  }
                    </div>
                     <span className={country?"mob-edition opd":"mob-edition"} 
                        onClick={()=> setCountry(!country)}>
                            <img src={edition.flag} alt="country" className="country" 
                            onClick={()=> setEdition(edition)} />
                            {!country? <BiDownArrow />: <BiUpArrow/>}
                            {
                            country && <ul className="countries-div">
                                {
                                countries.filter(item=> item.name !== edition.name)
                                .map((item,i)=>{
                                    return <li key={i} className="c-liast" onClick={()=> setEdition(item)} >{item.name}</li>
                                })
                                }
                                
                                
                            </ul>
                            }
                
                    </span>
                </span>
                
               
            </div>)
        }
    </nav>
  )
}

export default Navmobile

