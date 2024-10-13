import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#388636] text-white p-4 text-2xl flex justify-between'>
      <h1>Teknofest</h1>
      <ul className='flex text-lg cursor-pointer flex-row gap-6'>
        <li onClick={() => navigate("/")}>
          Home
        </li>
        <li onClick={() => navigate("/about-us")}>
          About Us
        </li>
        <li onClick={() => navigate("/competitions")}>
          Competitions
        </li>
      </ul>
      </div>
  )
}
