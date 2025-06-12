
import React from 'react'
import homepage from '../../assets/theWay.jpeg'

export default function Welcome({ next }) {
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/*  Background Layer */}
      <div
        className="blur-sm  absolute inset-0 bg-cover bg-center filter  scale-110 sm_clip md:bg_clip"
        style={{ backgroundImage: `url(${homepage})` }}
      />

      {/* Foreground Content */}
      <div className="px-6 relative  flex flex-col items-center justify-center h-full 
        space-y-4 text-gray-800">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold  
      drop-shadow text-center shadow-2xl p-3">
        RCCG ANNUAL YOUTH CONFERENCE 2025
        <br />
        July 25th-27th, 2025
        <br />
      </h1>
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold shadow-xl '>
      RCCG FOLS LP27 HQ
      <br />
      1 Israel Adebajo Close, Off Ladipo Oluwole Street, Ikeja, Lagos.
      </h2>
      <h3 className=' text-center shadow-lg'>
      Welcome to <span className="font-semibold text-amber-500 text-xl">THE WAY</span>!<br />
      Join us for this life-changing conference filled with impactful sessions, workshops, and networking opportunities.
      </h3>
      <p className='shadow-md' >
      <b>NB: You will need a verified email address to receive a one-time code, which will serve as your access pass during the program. </b>
      <br />
      Please have your personal and church information ready.
      </p>
      <button
        onClick={() => next({})}
        className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold shadow
         hover:bg-amber-600 transition hover:scale-110"
      >
        Start Registration
      </button>
      </div>
    </div>
  )
}
