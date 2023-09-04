import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/foot-Icon.png"
import soc from "../../assets/socialmedia.png"
import Payment from "../../assets/payment-grp.png"
import "./footer.css"


const Footer = () => {
    const navigate = useNavigate()
  return (
        <footer className="m-foot pad1">
            <section className="section-on">
                <p className="big-join">Join our Newsletter</p>
                <img src={Logo} alt="footer logo" className="flog" />
                <img src={soc} alt="social media" className="soc"/>
                <p className="cpy-wr">Copyright &copy; 2023 iKooK. All rights reserved</p>
            </section>
            <section className="section-tw">
                <form className="foot-form">
                    <input type="text" placeholder="Enter your name" className="nam-inp"/>
                    <input type="text" placeholder="Enter Email to join our Newsletter" className="mai-inp" />
                    <button type="submit" className="subscribe">Subscribe</button>
                </form>
                <section className="section-th">
                <div className="f-col">
                    <p className="b-f-head">iKooK</p>
                    <a>About us</a>
                    <a>How it works</a>
                    <a>FAQs</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Condition</a>
                </div>
                <div className="f-col">
                    <p className="b-f-head">Services</p>
                    <a>Chef at Home</a>
                    <a>Large Events</a>
                    <a>Meal Prep</a>
                    <a>Fine Dining</a>
                    <a>More +</a>
                </div>
                <div className="f-col">
                    <p className="b-f-head">Experiences</p>
                    <a onClick={()=> navigate("/signup")}>Signup as Chef</a>
                    <a>Gift Experience</a>
                    <a>Split Bills</a>
                    <a>Career</a>
                    <a>Blog</a>
                </div>
                <div>
                    <div className="f-col">
                        <p className="b-f-head">Contact Us</p>
                        <a>+44 203 807 8500</a>
                        <a>team@ikook.co.uk</a>
                        <a>Support</a>
                    </div>
                    <img src={Payment} alt="payment icons" />
                </div>
                </section>
            </section>
            


        </footer>
  )
}

export default Footer