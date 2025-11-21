import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div className='flex justify-around bg-[#1a2217]' id='contact-section'>

      {/* {Img FloraVision} */}
      <div>
         <div className='flex flex-wrap gap-2 mt-[271px] ml-24' id='privacy-section'>
            <img src='/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png' className='w-[94px] h-[94px]'/>
        <h1 className='w-wfo h-foh  font-[900] mt-3 ml-2 text-[#FFFFFF] font-flora text-[45px] opacity-[75%] -mb-6'>FloraVision.</h1>
        </div>
        <div className='ml-28 leading-tight'>
          <p className='w-[600px] h-[102px] font-flora font-[500] text-[28px] text-[#FFFFFF] mt-12'>"From lush indoor greens to vibrant <br></br>outdoor blooms, our plants are crafted to <br></br>thrive and elevate your living environment."</p>
        </div>
        <div className='w-[230px] h-[34px] ml-28 font-flora text-[28px] font-extrabold text-[#FFFFFF] flex justify-between mt-28'>
          <p className='w-[35px] h-[34px]'>FB</p>
          <p className='w-[49px] h-[34px]'>TW</p>
          <p className='w-[24px] h-[34px]'>LI</p>
        </div>
      </div>

      {/* Links */}
<div className='ml-24 mt-[271px]'>
  <p className='font-flora font-extrabold text-[28px] text-[#FFFFFF]'>Quick Link’s</p>

  <div className='font-flora font-[500] text-[24px] mt-8 underline underline-offset-8 decoration-solid text-[#FFFFFF] space-y-4'>

    <p
      className='cursor-pointer'
      onClick={() =>
        document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Home
    </p>

    <p
      className='cursor-pointer'
      onClick={() =>
        document.getElementById("plants-section")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Type’s Of plant’s
    </p>

    <p
      className='cursor-pointer'
      onClick={() =>
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Contacts
    </p>

    <p
      className='cursor-pointer'
      onClick={() =>
        document.getElementById("privacy-section")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Privacy
    </p>

  </div>
</div>


      {/* Email */}

      <div className='ml-24 mt-[271px]' id='contact'>
        <p className='font-flora font-extrabold text-[28px] text-[#FFFFFF]'>For Every Update.</p>
        <div className='border-2 border-white flex justify-between w-[562px] h-[74px] rounded-md mt-10'>
          <p className='font-flora font-[500] text-[24px] text-[#FFFFFF] p-4 opacity-[75%]'>Enter Email</p>
          <Button className="p-4 bg-white text-[#000000] font-[700] text-[22px] m-1">SUBSCRIBE</Button>
        </div>
        <p className='font-flora font-[500] text-[24px] text-[#FFFFFF] w-[360px] h-[29px] mt-[200px]'>FloraVision © all right reserve</p>
      </div>
    </div>
  )
}

export default Footer