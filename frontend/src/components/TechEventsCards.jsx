import React from 'react'

const TechEventsCards = ({event}) => {
  return (
    <div className='w-10 h-[10rem] bg-red-600' >
        <h2 className='bg-red-500' >{event.name}</h2>
        <img src={event.imgUrl} alt={event.title}  />
        <p>{event.description}</p>
    </div>
  )
}

export default TechEventsCards