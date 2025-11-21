import React, { useContext, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { AppContext } from '../CartContext';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const {setShowCart} = useContext(AppContext);
  const [open, setOpen] = useState(false);   // For Hamburger.

  return (
    <nav id='home-section' className='relative'>
        <div className='flex flex-wrap justify-between' id="home">
             <div className='flex flex-wrap ml-tl gap-2'>
            <img src='/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png' className='w-ig h-ng mt-tp'/>
        <h1 className='w-wfo h-foh  font-fw mt-tx text-white font-flora text-2xl'>FloraVision.</h1>
        </div>
        <div className='w-[531px] h-[35px] flex-wrap justify-between mt-tx text-white font-fm font-tw text-[24px] hidden lg:flex'>
            <p className='cursor-pointer' onClick={() =>
    document.getElementById("home").scrollIntoView({ behavior: "smooth" })
  }>
    Home
  </p>
             
            <div className='flex justify-between gap-2 w-[155px] h-[35px]'>
              <p className='cursor-pointer' onClick={() =>
      document.getElementById("plants").scrollIntoView({ behavior: "smooth" })
    }>
      Plants Type
    </p>
             <p className='mt-1 cursor-pointer'><IoMdArrowDropdown/></p>
            </div>
              <p className='cursor-pointer' onClick={() =>
    document.getElementById("more").scrollIntoView({ behavior: "smooth" })
  }>
    More
  </p>
             <p className='cursor-pointer' onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }>
    Contact
  </p>
            
        </div>
        <div className='flex flex-wrap justify-between w-cw mt-tm'>
            <img src='/743cbcfb287217bc1d51247b1ef3fbccb15f8b6c.png' className='w-imw h-imh cursor-pointer'/>
            <img src='/0cc12c30ffef0466f2779edadcefe9250d10e34e.png' className='w-imw h-imh cursor-pointer  lg:mr-20'  onClick={() => setShowCart(true)}/>
            <div className='flex flex-col justify-around h-imh w-[31px] lg:hidden' onClick={()=>setOpen(!open)}>
              <span className='w-[31px] h-0 border-[2px] border-[#FFFFFF] rounded-sm -ml-7 cursor-pointer'></span>
              <span className='w-[23px] h-0 border-[2px] border-[#FFFFFF] rounded-sm -ml-5 cursor-pointer'></span>
            </div>
        </div>

        </div>


        {open && (
  <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-10 text-white text-3xl font-semibold z-50 lg:hidden">
    <button
      className="absolute top-6 right-6 text-4xl"
      onClick={() => setOpen(false)}
    >
      <IoClose />
    </button>

    <p
      onClick={() => {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }}
      className="cursor-pointer"
    >
      Home
    </p>
    <p
      onClick={() => {
        document.getElementById("plants").scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }}
      className="cursor-pointer"
    >
      Plants Type
    </p>
    <p
      onClick={() => {
        document.getElementById("more").scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }}
      className="cursor-pointer"
    >
      More
    </p>
    <p
      onClick={() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }}
      className="cursor-pointer"
    >
      Contact
    </p>
  </div>
)}

    </nav>
  )
}

export default Navbar