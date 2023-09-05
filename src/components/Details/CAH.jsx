import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { chefatHome } from "../../data/chefathome"
import "./styles/menudetails.css"

const ChefatHome = () => {

    const [data, setData] = useState(chefatHome)
    const [filterable, setFilterable] = useState(chefatHome)

  return (
    <div className="cah-div">
        {data?.map(({menuName, price, chef, location, averageReviews, totalReviews, cuisine, image, id, avatar})=>{
            return(
                <div key={id} className="cah-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='cah-heart'>
                    <g clipPath="url(#clip0_492_669)">
                        <path d="M3 12C0.75 9 1.5 4.5 5.25 3C9 1.5 11.25 4.5 12 6C12.75 4.5 15.75 1.5 19.5 3C23.25 4.5 23.25 9 21 12C18.75 15 12 21 12 21C12 21 5.25 15 3 12Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_492_669">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
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

export default ChefatHome