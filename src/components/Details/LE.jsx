import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { PiHamburgerFill } from "react-icons/pi"
import { BsFillPeopleFill } from "react-icons/bs"
import { LargeEvents } from '../../data/largeevents'

const LargeEvent = () => {
    const [data, setData] = useState(LargeEvents)
     const [filterable, setFilterable] = useState(LargeEvents)
  return (
    <div className="cah-div">
        {
            data.map(({ id, chefName, avg_rating, totalReviews, cuisines, guests, minimum, location, foodimg, avi})=>{
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
                                <span className="ce-loc"><BsFillPeopleFill/> {guests} people</span>
                                <span className="ce-loc"> +4 more</span>
                            </div>
                        </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default LargeEvent