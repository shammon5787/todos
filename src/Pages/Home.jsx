import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'

const Home = () => {
  return (
    <div className='mt-20 p-3 '>
        <CategoryMenu />
        <FoodItem />
    </div>
  )
}

export default Home