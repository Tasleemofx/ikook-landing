import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Image from "../../assets/signup image.png"
import { BiErrorCircle } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheckBoxOutlineBlank} from "react-icons/md"
import { IoMdCheckbox} from "react-icons/io"
import { Message } from '../styled/Message';
import "./signup.css"

const SignUp = () => {
    const navigate = useNavigate()
    const [formvalues, setFormvalues] = useState({})
    const [error, setError] = useState()

    function handleErrors(){
        if(!formvalues.first_name){
            setError("Please input first name to continue")
        }else if(!formvalues.last_name){
            setError("Please input last name to continue")
        }else if(!formvalues.username || formvalues.username.length < 6){
            setError("Please input username not less than 6 characters")
        }else if(!formvalues.password || formvalues.password.length < 8){
            setError("Please input password not less than 8 characters")
        }else if(!formvalues.email || !formvalues.email.includes("@")){
            setError("Please enter valid email address")
        }else if(!formvalues.address){
            setError("Please enter an address")
        }else if(!formvalues.country){
            setError("Please select country from the dropdown")
        }else if(!formvalues.city){
            setError("Please select a city")
        }else if(!formvalues.postcode){
            setError("Please enter a postcode")
        }else if(!formvalues.mobile){
            setError("Please enter a mobile number")
        }else if(!formvalues.right_to_work){
            setError('Please answer the "right to work" question')
        }else if(!formvalues.criminal_record){
            setError("Please provide a criminal record")
        }else if(!formvalues.reference){
            setError("Please provide a reference")
        }else{
            setError(null)
        }
        
        return 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleErrors()
        
        setTimeout(()=> setError(null), 5000)
        console.log(formvalues)
    }
  return (
    <div className="signup-container">
        {error && <Message><BiErrorCircle /> {error}</Message>}
    <div className="body-f">
        <div className="img-ins">
        <img src={Image} alt="chef signup" className="mn-sg-img" />
        <div className="sign-inst">
                <p>We require you to have the following as a minimum requirement before applying this requirement.</p>
            <span>
                <p><strong>1. A valid ID Card</strong></p>
                <p><strong>2. Certified level 2 food hygiene certification.</strong></p>
            </span>
            <span className="bx-fl">
            <div className="w-box">
                <p>It would help if you were friendly & professional.
                    We will not tolerate or work with chefs with unpleasant attitudes towards
                    our team or clients
                </p>                
            </div>
            <div className="w-box">
                 
                <p>You need to be organised, punctual & always reliable. If you are
                    taking a booking or we book you for an event or organise trials, we need
                    to trust you without any doubt that you will attend.
                </p>
            </div>
            <div className="w-box">
                <p>
                    Our reputation is built on the reliability of our professionals, and we guarantee
                    our clients you attendance. You need to be a strong communicator, and we expect 
                    prompt responses to all communications, so we know {"you're"} committed to working with us
                </p>
            </div>
            </span>
        </div>
        </div>
    <div className="form-div">
        <nav onClick={()=> navigate("/")} className="s-u-logo">
            <img src={logo} alt="logo" />
            <p>Signup as a Chef</p>
        </nav>
        <form  onSubmit={(e)=> handleSubmit(e)}>
            <div className="form-outline">
            <div className="flex-bg">
           <div className="sm-div">
            <input  className={formvalues.first_name? "inpt": ""} type='text' id="f-name" onChange={(e)=> setFormvalues({...formvalues, first_name: e.target.value})}/>
            <label htmlFor="f-name">First Name</label>
           </div>
            <div className="sm-div">
                <input className={formvalues.last_name? "inpt": ""} id="l-name" type='text' onChange={(e)=> setFormvalues({...formvalues, last_name: e.target.value})}/>
                <label htmlFor="l-name">Last Name</label>
            </div>
            </div>
            <div className="inp-div">
                <input className={formvalues.username? "inpt": ""} id="u-n"  type='text' onChange={(e)=> setFormvalues({...formvalues, username: e.target.value})}/>
                <label htmlFor="u-n">Username</label>
            </div>
            <div className="inp-div">
                <input className={formvalues.email? "inpt": ""} id="maile"  type='email' onChange={(e)=> setFormvalues({...formvalues, email: e.target.value})}/>
                <label htmlFor="maile">Email</label>
            </div>
            <div className="inp-div">
                <input className={formvalues.password? "inpt": ""} id="pw"  type='password' onChange={(e)=> setFormvalues({...formvalues, password: e.target.value})}/>
                <label htmlFor="pw">Password</label>
            </div>
            <div className="inp-div">
                <input className={formvalues.address? "inpt": ""} id="addr" type='text' onChange={(e)=> setFormvalues({...formvalues, address: e.target.value})}/>
                <label htmlFor='addr'>Address</label>
            </div>
            
           
            <span className="sm-bx">
                <select onChange={(e)=>setFormvalues({...formvalues, country:e.target.value })}>
                    <option default>Country</option>
                    <option value="NGN">Nigeria</option>
                    <option value="CAD">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="USA">United States of America</option>
                </select>
                <div className="inp-div sm-div">
                    <input className={formvalues.city? "inpt": ""} id="ct" type='text' onChange={(e)=> setFormvalues({...formvalues, city: e.target.value})}/>
                    <label htmlFor="ct">City</label>
                </div>
                
            </span>
            <span className="sm-bx">
                <div className="sm-div">
                    <input className={formvalues.postcode? "inpt": ""} id="pco"  type='text' onChange={(e)=> setFormvalues({...formvalues, postcode: e.target.value})}/>
                    <label htmlFor="pco">Postcode</label>
                </div>
                <div className="sm-div">
                    <input id="mnum"  type='text' onChange={(e)=> setFormvalues({...formvalues, mobile: e.target.value})}/>
                    <label htmlFor="mnum">Phone Number</label>
                </div>
                
                
            </span>
            <div className="bool-q" >
                <p>Do you have right to work in this country?</p>
                <div>
                    <span  className={ formvalues.right_to_work? "yel-bd": "wh-bd"} onClick={()=> setFormvalues({...formvalues, right_to_work: true})}>Yes</span>
                    <span className={ !formvalues.right_to_work? "yel-bd": "wh-bd"}  onClick={()=> setFormvalues({...formvalues, right_to_work: false})}>No</span>
                </div>
            </div>
            <div className="bool-q" >
                <p>Do you have any criminal record?</p>
                <div>
                    <span  className={ formvalues.criminal_record? "yel-bd": "wh-bd"}  onClick={()=> setFormvalues({...formvalues, criminal_record: true})}>Yes</span>
                    <span className={ !formvalues.criminal_record? "yel-bd": "wh-bd"}   onClick={()=> setFormvalues({...formvalues, criminal_record: false})}>No</span>
                </div>
            </div>
            <select onChange={(e)=> setFormvalues({...formvalues, reference: e.target.value})}>
                <option default>How did you hear about us?</option>
                <option value="Twitter">Twitter</option>
                <option value="Linkedin">Linkedin</option>
                <option value="Youtube">Youtube</option>
                <option value="Others">Others</option>
            </select>
            <section className="agreemnt">
            <span>By proceeding, I agree to {`iKooK's`} <span className="und">Terms and Conditions</span> and acknowledge that I have read the <span className="und">Privacy Policy</span>.</span>

            <p>I also agree that iKooK or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.</p>
            
            <div className="spbx-f">
                
                {formvalues.accept_terms ? 
                <IoMdCheckbox onClick={()=> setFormvalues({...formvalues, accept_terms: !formvalues.accept_terms})}/>:
                <MdOutlineCheckBoxOutlineBlank onClick={()=> setFormvalues({...formvalues, accept_terms: !formvalues.accept_terms})}/>}
               
            <span className="alr">Keep me updated with special offers, exciting products and news from iKooK.</span>
            </div>
            </section>
            <div className="btn-sub-for">
            <button type="submit" className="s-u-btn" onClick={(e)=>handleSubmit(e)}>Sign Up</button> 
            <p className="alr" >Already have an account? <a href="/">Sign In</a></p>
            </div>
            </div>
        </form>
        
    </div>
    </div>
    </div>
  )
}

export default SignUp