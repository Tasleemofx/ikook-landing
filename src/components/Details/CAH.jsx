import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { chefatHome } from "../../data/chefathome"
import "./styles/menudetails.css"

const ChefatHome = ({ currentData}) => {

    const [data, setData] = useState(chefatHome)
    const [filterable, setFilterable] = useState(chefatHome)

    useEffect(()=>{
        if(currentData=== "Chef at Home"){
        setData(chefatHome)
        }else if(currentData === "Large Event"){
            setData()
        }else if(currentData === "Meal Prep"){
            setData()
        }else if(currentData === "Gourmet Delivery"){
            setData()
        }else if(currentData === "Cooking Class"){
            setData()
        }else if(currentData === "Fine Dining"){
            setData()
        }else if(currentData === "Corporate Dining"){
            setData()
        }else if(currentData === "Chefs"){
            setData()
        }
    },[currentData])
  return (
    <div className="cah-div">
        {data?.map(({menuName, price, chef, location, averageReviews, totalReviews, cuisine, image, id, avatar})=>{
            return(
                <div key={id} className="cah-card">
                    <AiOutlineHeart className='cah-heart'/>
                    <span className="cah-cuisine">{cuisine}</span>
                    <img src={image} alt="imagefile" className='cah-img'/>
                    
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
                        <div className="d-flex">
                            <p> <AiFillStar />{averageReviews} </p>
                            <p>({totalReviews} Reviews)</p>
                        </div>
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default ChefatHome