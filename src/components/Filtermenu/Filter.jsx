import React, { useState } from 'react'
import { AiFillCloseCircle} from "react-icons/ai"
import "./filter.css"

const Filter = ({setOpenFilter, currentData}) => {
    const [search, setSearch] = useState("")
    const [slide1, setSlide1] = useState(0)
    const [slide2, setSlide2] = useState(2000)

  return (
    <div className="filter-backdrop">
        <div className="f-menu-div">
            <nav className='f-m-nav'> 
                <h4 className="f-m-top">
                    Filter Menu
                </h4>
                <AiFillCloseCircle onClick={()=> setOpenFilter(false)} className='f-btn'/>
            </nav>
            <main>
                <div className="f-inp-div f-col">
                    <label className="f-s-menu">Search  
                    {currentData === "Chef at Home" || currentData === "Our Chefs"? " Chef": " Menu"}
                    </label>
                    <input type="text" placeholder="Rice, Spaghetti, Meat, etc" onChange={(e)=> setSearch(e.target.value)}
                    value={search}/>
                </div>
                <p className="f-s-menu">Price per person</p>
                <div className="two-way-slide">
                    <input type="range" value={slide1} onChange={(e)=> setSlide1(e.target.value)} min="0" max="2000" 
                    className="slide1" />
                    <input type="range" value={slide2} onChange={(e)=> setSlide2(e.target.value)} min="1" max="2000" 
                    className="slide2"/>
                    
                </div>
                <div className="val-boxes">
                    <span className="f-col">
                        <label>Minimum</label>
                        <input type="number" value={slide1} onChange={(e)=> setSlide1(e.target.value)} />
                    </span>
                    <span className="f-col">
                        <label>Maximum</label>
                        <input type="number" value={slide2} onChange={(e)=> setSlide2(e.target.value)} />
                    </span>
                </div>
                <div>
                    <p className="f-s-menu">Cuisines</p>
                    <div className="cuisine-list">
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Italian</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Japanese</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Indian</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>French</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>African</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Mediterranean</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Chinese</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Spanish</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>BBQ</label>
                        </div>
                        <div className="cuisine-item">
                            <input type="checkbox" name="" id="" />
                            <label>Fish & Chip</label>
                        </div>

                    </div>
                    <a className='more-list'>View all 20</a>
                </div>
            </main>
            <footer className="f-foot">
                <button className="f-clear">Clear All</button>
                <button className="f-view">View all 50</button>
            </footer>
        </div>
    </div>
  )
}

export default Filter