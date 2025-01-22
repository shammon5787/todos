import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2'>
        {
           FoodData.filter((food)=>{
            if(category === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase())
            }else{
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
           }).map((item)=>{
            return(
              <FoodCard key={item.id} name = {item.name} price = {item.price} image = {item.image} desc = {item.desc} rating = {item.ratting} />
          )
           })
        }
    </div>
  )
}

export default FoodItem