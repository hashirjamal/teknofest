import React, { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from "../assets/Images/AMP.webp"
export default function Header() {

    const [toggle,setToggle] = useState(false);

  return (
    <div className='bg-gray-800 flex justify-between   text-white px-12 py-2 text-2xl'>
        <img src={logo} alt="" className='w-[100px] h-[92px]'  />
        
        {/* sidebar */}


        
        <nav className='hidden  md:flex md:gap-4 text-xl py-6'>
            <a href="">Home</a>
            <a href="">Competitions</a>
            <a href="">Contact Us</a>
          
        </nav>
        <nav className='md:hidden cursor-pointer mb-[1.5rem] flex flex-col justify-end  items-end' onClick={()=>{setToggle((p)=>!p)}}><DehazeIcon sx={{}} />
        {toggle&&<div className='w-[8rem] h-[6rem] border rounded border-transparent bg-green-600 relative flex flex-col'>
        <a href="/" className='w-full text-lg text-center hover:text-gray-800'>Home</a>
            <a href="/competitions" className='w-full text-lg text-center hover:text-gray-800'>Competitions</a>
            <a href="" className='w-full text-lg text-center hover:text-gray-800'>Contact Us</a>
        </div>}
        </nav>
    </div>  )
}
