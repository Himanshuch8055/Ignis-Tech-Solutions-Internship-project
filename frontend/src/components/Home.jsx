import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

function Home() {

  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const response = await axios.get('http://localhost:8000/api/all-event/')
    console.log(response.data)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className='bg-slate-200 rounded-lg'>
      <div className='text-3xl font-bold text-gray-500 underline decoration-orange-400 pl-10 pt-4'>All Events</div>
      <div className='m-0 p-10 md:py-8 text-center flex space-x-5 space-y-5 flex-wrap flex-row flex-auto justify-center justify-items-center content-norma items-center place-content-evenly place-items-stretch '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home