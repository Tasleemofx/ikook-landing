import React, { useState } from 'react'
import { CC } from '../../data/cookingclass'
import { AiFillStar } from 'react-icons/ai'
import { BsPersonFillAdd, BsPeopleFill } from "react-icons/bs"
import { PiHamburgerFill } from 'react-icons/pi'

const CookingClass = () => {

    const [data, setData]= useState(CC)
  return (
    <div className="cah-div">
        {
            data.map(({id, chefName, avg_rating, totalReviews, cuisines, service_type,
        minimum, location, foodimg, avi, time })=>{
            return (
                  <div className="cah-card" key={id}>
                        <p className="cah-cuisine">{location}</p>
                        <img src={foodimg} alt="food" />
                            <img src={avi} alt="chef" className="img-po"/>
                            <p className='price-pos'>From {minimum}</p>
                        <span className='event-dets'>
                            <div className="f-col">
                                <p className="ce-nm">{chefName}</p>
                                <span className="desc-flex">
                                    <p className="ce-rating"><AiFillStar />{avg_rating}</p>
                                    <p className="ce-loc">({totalReviews} Reviews) </p>
                                </span>
                            </div>
                            <div className="low-desc">
                                <span className="ce-loc"><PiHamburgerFill />{cuisines} cuisines</span>
                                <span className="ce-loc"><BsPersonFillAdd/>{service_type}</span>
                                <span className="ce-loc"> <BsPeopleFill/> {time}</span>
                                            
                            </div>
                        </span>
                    </div>
            )
        })
        }
    </div>
  )
}

export default CookingClass