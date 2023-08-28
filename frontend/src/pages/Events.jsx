import React from 'react'
import Navbar from '../components/Navbar'
import TechEvents from '../components/TechEvents'
import SingleEventPage from '../components/SingleEvent'

const Events = () => {
  return (
    <>
    <div className="">
      <Navbar/>
      <p className='bg-black-500 text-3xl'>Events</p>
      <TechEvents/>
      <SingleEventPage/>


    </div>
      
    </>
  )
}

export default Events