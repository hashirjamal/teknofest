import React from 'react'
import gif from "../../assets/Images/website.gif"
export default function Home() {
  return (
    <div>
        <section className='bg-gray-800 text-white'>
            <div className='flex flex-wrap align-middle justify-center'>
            <img src={gif} className='sm:w-1/2'/>
<div className='flex flex-col align-middle justify-center sm:text-left text-center gap-3 sm:w-1/2'>
    <h3 className='text-4xl font-bold'>Upcoming Event </h3>
    <h1 className='text-6xl font-bold'>TeknoFest Pakistan</h1>
    <p>12th and 13th October</p>
    <p>Expo Center Karachi, Hall 3 & 4</p>
    <p>Empowering innovation, igniting future leaders. Teknofest Pakistan – where technology meets limitless possibilities</p>
</div>
            </div>
        </section>

    </div>
  )
}
