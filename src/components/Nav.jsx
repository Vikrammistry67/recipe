import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div id='nav-border' className='w-full text-black bg-zinc-200 shadow-2xl py-8 absolute top-0  h-14 flex items-center justify-between '>
            <div className='w-[45%] flex items-center justify-evenly h-full'>
                <h2
                    onClick={() => navigate(-1)}
                    className='text-zinc-800 cursor-pointer bg-zinc-200 px-5 py-2 rounded-full  shadow-2xl' > <i className="ri-arrow-left-fill shadow-2xl mr-2 "></i> Back</h2>
                <NavLink className={(e) => e.isActive ? "text-red-600" : ""} to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink id='create-text'  to="/vegrecipes">Create Recipes</NavLink>
            </div>
            <div className='w-[50%]  flex text-zinc-100 font-semibold items-center justify-end gap-5 px-5 h-full'>
                <h2 className='bg-green-900 px-5  py-1.5 shadow-2xl rounded-full'>veg Recipes</h2>
                <h2 className='bg-red-900 px-5 py-1.5 shadow-2xl rounded-full'>nonVeg Recipes</h2>
            </div>
        </div>
    )
}

export default Nav