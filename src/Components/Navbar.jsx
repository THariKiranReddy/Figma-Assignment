import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap justify-between'>
             <div className='flex flex-wrap ml-tl gap-2'>
            <img src='/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png' className='w-ig h-ng mt-tp'/>
        <h1 className='w-wfo h-foh  font-fw mt-tx text-white font-flora text-2xl'>FloraVision.</h1>
        </div>
        <div className='w-[531px] h-[35px] flex flex-wrap justify-between mt-tx text-white font-fm font-tw text-[24px] '>
            <p className='cursor-pointer'>Home</p>
            <div className='flex justify-between gap-2 w-[155px] h-[35px]'>
             <p className='cursor-pointer'>Plants Type</p>
             <p className='mt-1 cursor-pointer'><IoMdArrowDropdown/></p>
            </div>
            <p className='cursor-pointer'>More</p>
            <p className='cursor-pointer'>Contact</p>
        </div>
        <div className='flex flex-wrap justify-between w-cw mt-tm'>
            <img src='/743cbcfb287217bc1d51247b1ef3fbccb15f8b6c.png' className='w-imw h-imh cursor-pointer'/>
            <img src='/0cc12c30ffef0466f2779edadcefe9250d10e34e.png' className='w-imw h-imh cursor-pointer'/>
            <div className='flex flex-col justify-around h-imh w-[31px]'>
              <span className='w-[31px] h-0 border-[2px] border-[#FFFFFF] rounded-sm -ml-7 cursor-pointer'></span>
              <span className='w-[23px] h-0 border-[2px] border-[#FFFFFF] rounded-sm -ml-5 cursor-pointer'></span>
            </div>
        </div>

        </div>
    </nav>
  )
}

export default Navbar