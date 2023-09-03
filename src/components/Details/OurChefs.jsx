import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiMessageAltCheck } from "react-icons/bi"
import { OC } from '../../data/ourchefs'

const OurChefs = () => {
const [data, setData] = useState(OC)
     const [filterable, setFilterable] = useState(OC)
  return (
    <div className="cah-div">
        {
            data.map(({ id, chefName, avg_rating, totalReviews, mealprep, chefathome, largeEvents, 
                 experience, location, foodimg, avi})=>{
                return (
                    <div className="cah-card" key={id}>
                        <p className="cah-cuisine">{location}</p>
                        <img src={foodimg} alt="food" />
                            <img src={avi} alt="chef" className="img-po"/>
                            <div className="f-col price-pos">
                                <p className="oc-nm">{chefName}</p>
                                <span className='desc-flex'>
                                    <p className="oc-rating"><AiFillStar />{avg_rating} </p>
                                    <p className="oc-rev"> ({totalReviews} Reviews) </p>
                                </span>
                            </div>
                          
                        <span className='event-dets'>
                            <p className="expe">
                                {experience}
                            </p>
                            <div className="mp-desc">
                                <span className="ce-loc"><BiMessageAltCheck />{mealprep && "Meal Prep"}</span>
                                <span className="ce-loc"><BiMessageAltCheck/> {chefathome && "Chef at Home"}</span>
                                <span className="ce-loc"><BiMessageAltCheck/> {largeEvents && "Large Event"}</span>
                                <span className="ce-loc"><BiMessageAltCheck/> +3 more</span>
                            </div>
                        </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OurChefs