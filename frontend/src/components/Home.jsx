import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Card from './Card';
import Banner from '../assets/Home-banner.webp'

function Home() {
  return (
    <>
      <img src={Banner} alt="example" />
      <div className='text-5xl font-bold m-10 underline decoration-orange-300'>
        <h1>All Events</h1>
      </div>
      <div className="grid justify-items-center gap-x-8 gap-y-4 grid-cols-4 m-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Home