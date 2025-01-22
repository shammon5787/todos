import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const ListUniqueCategory = ()=>{
        const UniqueCategory = [... new Set(FoodData.map((item)=>item.category))]
        setCategories(UniqueCategory)
    }
    useEffect(()=>{
        ListUniqueCategory()
    }, [])

    const dispatch = useDispatch()
  return (
    <div className='mt-20'>
        <h1 className='text-4xl uppercase font-bold'>order your favorite food</h1>
        <div className='flex flex-row items-center gap-4 py-3 overflow-x-scroll lg:overflow-x-hidden font-semibold '>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-indigo-800 px-2 rounded-sm '>All</button>
            {
                categories.map((category, i)=>(
                    <button onClick={()=>dispatch(addCategory(category))} className='bg-indigo-800 px-2 rounded-sm '>{category}</button>
                ))
            }
        </div>
    </div>
  )
}

export default CategoryMenu