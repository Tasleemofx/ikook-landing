// import React from 'react'
import Logo from "../../assets/footer-Icon.png"
import soc from "../../assets/socialmedia.png"
import Payment from "../../assets/payment-grp.png"
import "./footer.css"


const Footer = () => {
  return (
        <footer>
            <section className="section-on">
                <p className="big-join">Join our Newsletter</p>
                <img src={Logo} alt="footer logo" className="flog" />
                <img src={soc} alt="social media" className="soc"/>
                <p>Copyright &copy; 2023 iKooK. All rights reserved</p>
            </section>
            <section className="section-tw">
                <form className="foot-form">
                    <input type="text" placeholder="Enter your name" className="nam-inp"/>
                    <input type="text" placeholder="Enter Email to join our Newsletter" className="mai-inp" />
                    <button type="submit" className="subscribe">Subscribe</button>
                </form>
                <section className="section-th">
                <div className="f-col">
                    <p>iKooK</p>
                    <a>How it works</a>
                    <a>FAQs</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Condition</a>
                </div>
                <div className="f-col">
                    <p>Services</p>
                    <a>Chef at Home</a>
                    <a>Large Events</a>
                    <a>Meal Prep</a>
                    <a>Fine Dining</a>
                    <a>More +</a>
                </div>
                <div className="f-col">
                    <p>Experiences</p>
                    <a>Signup as Chef</a>
                    <a>GIft Experience</a>
                    <a>Split Bills</a>
                    <a>Career</a>
                    <a>Blog</a>
                </div>
                <div>
                    <div className="f-col">
                        <p>Contact Us</p>
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