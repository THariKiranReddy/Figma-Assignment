import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { LiaStarHalfSolid } from "react-icons/lia";
import { TbTriangleFilled } from "react-icons/tb";
import { AppContext } from '../CartContext';
const HeroBanner = () => {
  const {handleAddToCart,bannerData} = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev === bannerData.length - 1 ? 0 : prev+1);
    },3000);
    return() => clearInterval(interval);
  },[]);

  const nextSlide = ()=>{
   setCurrentIndex((prev) =>
      prev === bannerData.length - 1 ? 0 : prev + 1
  );
  };
  const item = bannerData[currentIndex];
  return (
    <div>
    <div className='flex justify-between' >
    <div className='mt-[80px] mx-11 h-[280px]'>
      <h1 className='text-white font-flora font-[600] text-[118px] font-semi-bold opacity-[75%] h-[143px]'>Earth’s Exhale</h1>
      <p className='w-[775px] text-white font-flora font-medium text-[23px] opacity-[75%] mt-2'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
      <div className='flex space-x-4 text-white mt-4'>
           <Button className="border-2 w-[217px] h-[64px] text-[28px] font-flora rounded-lg  border-white "  onClick={() =>
    document.getElementById("buy").scrollIntoView({ behavior: "smooth" })}><p className='opacity-[75%]'>Buy Now</p></Button>
           <div className='flex space-x-0'>
            <div className='w-[70px] h-[70px] border-2 border-[#ffffff] rounded-full '>
                        <TbTriangleFilled className='w-[34px] h-[34px] rotate-90 text-[#c7c9c6] ml-[18px] mt-4'/>
            </div>
             <a href="https://www.nature.com/articles/s41561-025-01710-7" target="_blank"><Button className="font-fm w-[180px] h-[76px] font-[400] text-[25px] opacity-[75%]">Live Demo...</Button></a>
           </div>
      </div>
    </div>

    <div className='w-[512px] h-[719px] mr-10 mt-[119] '>
        <img src={item.img} className='w-[459px] absolute top-[119px] left-[1198px] z-10'/>
     <div className='h-[644px] border border-white/40 rounded-[80px] top-[76px] w-[512px] relative backdrop-blur-[25px] shadow-[0_9px_18.4px_0_#00000040]'>
         <p className='font-[400] font-flora text-[23px] backdrop-blur-[15px] text-white absolute top-96 opacity-[75%] left-[81px]'>{item.p1}</p>
         <p className='font-[400] text-[38px] text-white top-[412px] font-flora absolute opacity-[75%] left-[81px]'>{item.p2}</p>
         <img src='/65c9b2e2178b53eba63dace1c4f1d8c96673ade2 (1).png' className='absolute text-white w-[20px] h-[20px] top-[430px] right-[35px] cursor-pointer' onClick={nextSlide} />
         <Button className="border-2 w-[217px] h-[64px] text-[28px] font-flora opacity-[75%] rounded-lg  border-white absolute top-[480px] text-white left-[81px]" onClick={()=>handleAddToCart(item)}>Buy Now</Button>
        
        {/* Dots */}
        <div className="absolute top-[570px] left-[236px] flex gap-4">
  {[0, 1, 2].map((dot) => {
    const isActive = dot === currentIndex % 3;

    return (
      <span
        key={dot}
        className={`
          ${isActive ? "w-[21px]" : "w-[6px]"}
          h-[6px] bg-white rounded-lg transition-all duration-300
        `}
      ></span>
    );
  })}
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




