import React, { useState } from 'react'
import { MP } from '../../data/mealprep'
import { AiFillCalendar, AiFillStar } from 'react-icons/ai'
import { PiHamburgerFill } from 'react-icons/pi'
import { BsFillPeopleFill } from 'react-icons/bs'

const MealPrep = () => {
    const [data, setData] = useState(MP)
    const [filterable, setFilterable] = useState(MP)

  return (
    <div className="cah-div">
        {
            data.map(({id, chefName, avg_rating, totalReviews, cuisines, frequency, service_type,
        minimum, location, foodimg, avi})=>{
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
                            <div className="mp-desc">
                                <span className="ce-loc"><PiHamburgerFill />{cuisines} cuisines</span>
                                <span className="ce-loc"> <AiFillCalendar/> {frequency}</span>
                                <span className="ce-loc"><BsFillPeopleFill/>{service_type}</span>
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

export default MealPrep