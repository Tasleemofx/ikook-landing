import React, { useState } from 'react'
import { AiFillCloseCircle} from "react-icons/ai"

const Filter = ({setOpenFilter}) => {
    const [search, setSearch] = useState("")
    const [slide1, setSlide1] = useState(0)
    const [slide2, setSlide2] = useState(2000)

  return (
    <div className="f-menu-div">
        <nav className='f-m-nav'> 
            <h4 className="f-m-top">
                Filter Menu
            </h4>
            <AiFillCloseCircle onClick={()=> setOpenFilter(false)} className='filter-btn'/>
        </nav>
        <main>
            <div className="f-inp-div">
                <label className="f-s-menu">Search Menu</label>
                <input type="text" placeholder="Rice, Spaghetti, Meat, etc" onChange={(e)=> setSearch(e.target.value)}
                value={search}/>
            </div>
            <p className="f-menu-top">Price per person</p>
            <div className="two-way-slide">
                <input type="range" value={slide1} onChange={(e)=> setSlide1(e.target.value)} min="0" max="2000" />
                <input type="range" value={slide2} onChange={(e)=> setSlide2(e.target.value)} min="1" max="2000"/>
                <input type="number" value={slide1} onChange={(e)=> setSlide1(e.target.value)} />
                <input type="number" value={slide2} onChange={(e)=> setSlide2(e.target.value)} />
            </div>
        </main>
    </div>
  )
}

export default Filter