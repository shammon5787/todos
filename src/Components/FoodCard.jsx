import React from 'react'
import img from '../assets/Food/3.avif'
import { FaStarHalfAlt } from "react-icons/fa";

const FoodCard = ({id, name, price, desc, image, rating}) => {
    return (
        <div className='flex items-center flex-col bg-indigo-950 w-full lg:w-[23vw] rounded-lg'>
            <div className='p-3 w-full flex items-center flex-col bg-slate-600 rounded-t-md'>
                <img className='w-[200px] h-[100px] rounded-md cursor-pointer hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='flex flex-col items-center w-full bg-slate-900 rounded-b-md p-3'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex items-center justify-between w-full'>
                    <span className='flex flex-row items-center gap-2'>
                        <FaStarHalfAlt />
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-indigo-800 px-2 rounded-sm '>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard