import React from 'react'
import FullCard from './FullCard'

function Likes() {
  return (
    <>
      <div className='text-5xl font-bold m-10 underline decoration-orange-300'>
        <h1>Likes Events</h1>
      </div>
      <div className="m-10 grid gap-5">
        <FullCard />
        <FullCard />
        <FullCard />
        <FullCard />
      </div>
    </>
  )
}

export default Likes