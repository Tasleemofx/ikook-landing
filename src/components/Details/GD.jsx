import React, { useState } from 'react'
import { GD } from '../../data/gourmetDelivery'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPeopleFill } from "react-icons/bs"
import { PiHamburgerFill } from 'react-icons/pi'
import { MdDeliveryDining } from 'react-icons/md'

const GourmetDelivery = () => {
    const [data, setData] = useState(GD)
  return (
    <div className="cah-div">
        {
            data.map(({id, chefName, avg_rating, totalReviews, cuisines, max, time,
        minimum, location, foodimg, avi})=>{
            return (
                  <div className="cah-card" key={id}>
                        <p className="cah-cuisine">{location}</p>
                        <img src={foodimg} alt="food" className='cah-img'/>
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
                                <span className="ce-loc"> <BsFillPeopleFill/> {max} max</span>
                                <span className="ce-loc"><MdDeliveryDining/>{time}</span>
                                
                                
                            </div>
                        </span>
                    </div>
            )})}
        </div>
                 
  )
}

export default GourmetDelivery