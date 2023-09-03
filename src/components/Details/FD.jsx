import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { chefatHome } from "../../data/chefathome"
import "./styles/menudetails.css"

const FineDining = () => {

    const [data, setData] = useState(chefatHome)
    const [filterable, setFilterable] = useState(chefatHome)

  return (
    <div className="cah-div">
        {data?.map(({menuName, price, chef, location, averageReviews, totalReviews, cuisine, image, id, avatar})=>{
            return(
                <div key={id} className="cah-card">
                    <AiOutlineHeart className='cah-heart'/>
                    <span className="cah-cuisine">{cuisine}</span>
                    <img src={image} alt="imagefile" className='cah-img'/>
                    <span className="m-up">
                        <span className="namenpr">
                            <p>{menuName}</p>
                            <span>{price}</span>
                        </span>
                        <span className="cah-desc">
                            <div className="cah-det">
                                <img src={avatar} alt="avi" />
                                <div className="ce-det">
                                    <p className='ce-nm'>{chef}</p>
                                    <p className="ce-loc"><IoLocationSharp/>{location}</p>
                                </div>
                            </div>
                            <div className="f-col">
                                <p className='ce-nm'> <AiFillStar />{averageReviews} </p>
                                <p className="ce-loc">({totalReviews} Reviews)</p>
                            </div>
                        </span>
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default FineDining