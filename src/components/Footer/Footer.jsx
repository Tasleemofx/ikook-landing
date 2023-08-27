// import React from 'react'
import Logo from "../../assets/footer-Icon.png"
import Payment from "../../assets/payment-grp.png"

const Footer = () => {
  return (
        <footer>
            <section>
                <h3 className="big-join">Join our Newsletter</h3>
                <img src={Logo} alt="footer logo" />
            </section>
            <section>
                <form>
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter Email to join our Newsletter" />
                    <button type="submit">Subscribe</button>
                </form>
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
            


        </footer>
  )
}

export default Footer