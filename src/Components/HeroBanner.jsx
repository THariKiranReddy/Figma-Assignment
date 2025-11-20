import React from 'react'
import Button from './Button'
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { LiaStarHalfSolid } from "react-icons/lia";
const HeroBanner = () => {
  return (
    <div>
    <div className='flex justify-between' >
    <div className='  mt-[80px] mx-11 h-[280px]'>
      <h1 className='text-white font-flora font-[600] text-[118px] font-semi-bold opacity-[75%] h-[143px]'>Earth’s Exhale</h1>
      <p className='w-[775px] text-white font-flora font-medium text-[23px] opacity-[75%] mt-2'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
      <div className='flex space-x-4 text-white mt-4'>
           <Button className="border-2 w-[217px] h-[64px] text-[28px] font-flora rounded-lg  border-white"><p className='opacity-[75%]'>Buy Now</p></Button>
           <div className='flex space-x-0'>
            <FaRegCirclePlay className='w-[70px] h-[70px]'/>
             <Button className="font-fm w-[180px] h-[76px] font-[400] text-[25px] opacity-[75%]">Live Demo...</Button>
           </div>
      </div>
    </div>

    <div className='w-[512px] h-[719px] mr-10 mt-[119] shadow-[0_9px_18.4px_0_#00000040]  '>
        <img src='./c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png' className='w-[459px] absolute top-[119px] left-[1198px] z-10'/>
     <div className='h-[644px] border border-white/40 rounded-[80px] top-[76px] w-[512px] relative backdrop-blur-[25px] shadow-[0_9px_18.4px_0_#00000040]'>
         <p className='font-[400] font-flora text-[23px] backdrop-blur-[15px] text-white absolute top-96 opacity-[75%] left-[81px]'>Indore Plant</p>
         <p className='font-[400] text-[38px] text-white top-[412px] font-flora absolute opacity-[75%] left-[81px]'>Aglaonema  plant</p>
         <img src="./65c9b2e2178b53eba63dace1c4f1d8c96673ade2.png" className='absolute text-white w-[20px] h-[20px] top-[430px] right-[35px]'/>
         <Button className="border-2 w-[217px] h-[64px] text-[28px] font-flora opacity-[75%] rounded-lg  border-white absolute top-[480px] text-white left-[81px]">Buy Now</Button>
          <div className='absolute top-[570px] left-[236px] flex gap-4 '>
      <span className='w-[21px] h-[6px] bg-white border rounded-lg'></span><span className='w-[6px] h-[6px] bg-white border rounded-lg'></span><span className='w-[6px] h-[6px] bg-white border rounded-lg'></span>
    </div>
     </div>
    </div>
    </div>
    <div className='w-[370px] h-[237px] border-[2px] border-white/40 rounded-[40px]  left-[43px] bottom-[120px] relative backdrop-blur-[15px]  shadow-[0_9px_18.4px_0_#00000040]  '>
      <div className=' mt-[35px] ml-[27px]'>
         <div className='flex gap-4'>
          <img className="w-[64px] h-[64px]  rounded-full" src="./72419c36cae7ef6f9c25b97e39a231fc9059935c.png"/>
          <div className='flex flex-col gap-2 justify-center'>
            <p className='w-[150px] h-[27px] font-flora font-tw text-[22px] text-white'>Ronnie Hamill</p>
            <div className='flex justify-evenly w-[103.5px] h-[15px]'>
              <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
              <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
              <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
              <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
              <LiaStarHalfSolid className='text-yellow-400 w-[15px] h-[15px]'/>
            </div>
          </div>
        </div>
        <p className='w-[310px] h-[63px] text-[17px] opacity-[75%] text-white mt-3 leading-tight'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
      </div>  
    </div>
    </div>
  )
}

export default HeroBanner




