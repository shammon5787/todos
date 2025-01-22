// import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    // const [show , setShow] = useState(false)
    const dispatch = useDispatch()
 
  return (
    <div className='flex lg:items-center flex-col lg:flex-row justify-between bg-slate-600 fixed top-0 w-full left-0 p-4'>
        {/* <h1 className='cursor-pointer md:hidden' onClick={()=>setShow(false)} >🥪</h1> */}
        <h1 className='text-2xl font-semibold'> {new Date().toUTCString().slice(0 ,16)} </h1>
        <div className='flex flex-col lg:flex-row lg:gap-10 text-2xl font-semibold '>
            <Link to= '/' >Home</Link>
            <Link to= '/about'> About</Link>
            <Link to= '/card' >Card</Link>
            <Link to= '/todo' >Todo</Link>
        </div>
        <div>
            <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[20vw] rounded-md outline-none text-black  ' type="search" name="" placeholder='search here' id="" />
        </div>
    </div>
  )
}

export default Navbar