import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Card from './Pages/Card'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Todo from './Pages/Todo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/card' element = {<Card/>} />
        <Route path='/todo' element = {<Todo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App