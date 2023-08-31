import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { chefatHome } from "../../data/data"
import "./menudetails.css"

const Menudetails = () => {

    const [data, setData] = useState(chefatHome)
  return (
    <div>
        {data.map(({menuName, price, chef, location, averageReviews, totalReviews, cuisine, image, id, avatar})=>{
            return(
                <div key={id}>
                    <img src={image} alt="imagefile" />
                    
                    <span className="namenpr">
                        <p>{menuName}</p>
                        <span>{price}</span>
                    </span>
                    <span>
                        <img src={avatar} alt="avi" />
                        <div>
                            <p>{chef}</p>
                            <p><IoLocationSharp/>{location}</p>
                        </div>
                        <div>
                            <p> <AiFillStar />{averageReviews} </p>
                            
                        </div>
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default Menudetails