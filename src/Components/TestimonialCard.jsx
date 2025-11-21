import React, { useContext, useEffect, useState } from 'react'
import { LiaStarHalfSolid } from 'react-icons/lia'
import { MdStarRate } from 'react-icons/md'
import SectionTittle from './SectionTittle'
import Button from './Button'
import { TbBorderCornerRounded } from "react-icons/tb";
import { AppContext } from '../CartContext'

const TestimonialCard = () => {
  const {Odata} = useContext(AppContext);
  const [currentIndex,setCurrentIndex] = useState(0);

    const nextSlide = ()=>{
     setCurrentIndex((prev) =>
        prev === Odata.length - 1 ? 0 : prev + 1
    );
    };
    const prevSlide = ()=>{
     setCurrentIndex((prev) =>
        prev === 0 ? Odata.length - 1 : prev - 1
    );
    };
    const item = Odata[currentIndex];
   
  return (
    <div id='more' className='bg-[#1a2217]'>
      <SectionTittle className='w-[500px] h-[67px] m-auto pt-64 pb-20 relative'>Customer Review
         <TbBorderCornerRounded className='-mt-16 -ml-5 -rotate-90 text-[#FBD300] text-[80px]'/>
              <TbBorderCornerRounded className='absolute left-[430px] -bottom-[10px] rotate-90 text-[#FBD300] text-[90px]'/>
      </SectionTittle>
      <div className='flex justify-around max-w-[1602px] h-[480px] mx-auto ml-[70px] w-full  md:flex-row md:justify-around md:items-center md:gap-6 px-4'>

      {/* First Card */}

      <div className='w-[512px] h-[480px] border-[2px] border-white/10 border-t-0  rounded-[77px]  backdrop-blur-[15px]  bg-[#272e22] shadow-[0px_4px_40px_rgba(0,0,0,0.4)] mt-[220px]'>

            <div className=' mt-[35px] ml-[27px]'>
               <div className='flex gap-8 ml-5  '>
                <img className="w-[88px] h-[88px]  rounded-full mt-[50px]" src="/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png"/>
                <div className='flex flex-col gap-2 justify-center mt-[30px]'>
                  <p className=' h-[46px] font-flora font-tw text-[38px] text-white'>Shelly Russel</p>
                  <div className='flex justify-evenly w-[103.5px] h-[15px]'>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <LiaStarHalfSolid className='text-yellow-400 w-[15px] h-[15px]'/>
                  </div>
                </div>
              </div>
              <p className='w-[403px] h-[63px] text-[24px]  mt-11 text-[#FFFFFFBF] ml-6 '>Just got my hands on some <br></br>absolutely awesome plants, and I <br></br>couldn’t be happier!</p>
            </div>  
          </div>

          {/* Second Card */}

          <div className='w-[512px] h-[480px] border-[2px]  border-white/10 border-t-0  rounded-[77px]  backdrop-blur-[15px]  bg-[#272e22] shadow-[0px_4px_40px_rgba(0,0,0,0.4)] mt-[220px] '>

            <div className=' mt-[35px] ml-[27px]'>
               <div className='flex gap-8 ml-5  '>
                <img className="w-[88px] h-[88px]  rounded-full mt-[50px]" src="/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg"/>
                <div className='flex flex-col gap-2 justify-center mt-[30px]'>
                  <p className=' h-[46px] font-flora font-tw text-[38px] text-white'>Lula Rolfson</p>
                  <div className='flex justify-evenly w-[103.5px] h-[15px]'>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <LiaStarHalfSolid className='text-yellow-400 w-[15px] h-[15px]'/>
                  </div>
                </div>
              </div>
              <p className='w-[403px] h-[63px] text-[24px]  mt-11 text-[#FFFFFFBF] ml-6 '>Each one has its own unique charm <br></br>and personality, and they’ve<br></br> already started brightening up my <br></br>space. The vibrant colors and fresh<br></br> greenery make such a huge<br></br> difference in my home.</p>
            </div>  
          </div>
          
          {/* Third Card */}

          <div className='w-[512px] h-[480px] border-[2px] border-white/10 border-t-0  rounded-[77px]  backdrop-blur-[15px]  bg-[#272e22] shadow-[0px_4px_40px_rgba(0,0,0,0.4)] mt-[220px] '>

            <div className=' mt-[35px] ml-[27px]'>
               <div className='flex gap-8 ml-5  '>
                <img className="w-[88px] h-[88px]  rounded-full mt-[50px]" src="/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png"/>
                <div className='flex flex-col gap-2 justify-center mt-[30px]'>
                  <p className=' h-[46px] font-flora font-tw text-[38px] text-white'>Carol Huels</p>
                  <div className='flex justify-evenly w-[103.5px] h-[15px]'>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <MdStarRate className='text-yellow-400 w-[15px] h-[15px]'/>
                    <LiaStarHalfSolid className='text-yellow-400 w-[15px] h-[15px]'/>
                  </div>
                </div>
              </div>
              <p className='w-[403px] h-[63px] text-[24px]  mt-11 text-[#FFFFFFBF] ml-6 '>It's like bringing a little piece of <br></br>nature indoors. Definitely worth the <br></br>investment—my plant collection<br></br> has never looked better!</p>
            </div>  
          </div>
          </div>


          {/*O2 Card*/}

          <div className='mt-[480px]'>
            <SectionTittle className=' h-[67px] text-[#FFFFFF] w-[378.5px] mx-auto p-7 relative'>Our Best o2
              <TbBorderCornerRounded className='-mt-14 -ml-10 -rotate-90 text-[#68a431] text-[80px]'/>
              <TbBorderCornerRounded className='absolute left-[300px] -bottom-[25px] rotate-90 text-[#68a431] text-[90px]'/>
            </SectionTittle>
             
             <div className='w-[1600px] h-[755px] border-[4px] rounded-[92px] flex justify-around mt-72 ml-24 bg-[#272e22] border-[#4a4f46]' >
              <img src={item.img} className='w-[877px] h-[877px] -ml-[80px] -mt-36 '/>
              <div className='mt-24 mr-27 -ml-20 -mr-10'>
                <p className='font-flora font-[600] text-[38px] text-[#FFFFFFBF] mt-8 w-[739px]'>{item.p1}</p>
               <p className='font-flora font-[600] text-[28px] text-[#FFFFFFBF] mt-8 leading-tight w-[748px]'>{item.p2}</p>
                              <p className='font-flora font-[600] text-[28px] text-[#FFFFFFBF] mt-8 leading-tight w-[748px]'>{item.p3}</p>
               <div className='flex justify-between'>
                  <a href='https://www.nature.com/articles/s41561-025-01710-7' target='_blank'><Button className="w-[217px] h-[64px] border-2 border-white rounded-[14px] text-[#FFFFFFBF] font-flora font-medium text-[28px] ">Explore</Button></a>
               <div className='flex justify-between w-[200px] mt-3 mr-16'>
                 <img className=" w-[24px] h-[24px] rotate-180 opacity-[35%] cursor-pointer" onClick={prevSlide} src='/65c9b2e2178b53eba63dace1c4f1d8c96673ade2 (1).png'/>
                 <div>
                      <p className='font-flora text-[20px] font-[700] text-[#FFFFFFBF]'>{item.id}/<span className='font-flora text-[15px] font-[700] text-[#FFFFFFBF]'>0{Odata.length}</span></p>
                 </div>
                 <img className="relative w-[24px] h-[24px] cursor-pointer" onClick={nextSlide} src='/65c9b2e2178b53eba63dace1c4f1d8c96673ade2 (1).png'/>
               </div>
               </div>
              </div>
            </div>

            {/* Dots */}

            <div className='ml-[890px] w-[85px] h-[11px] mt-40 flex justify-between'>
  {[0, 1, 2].map((dot) => {
    const isActive = dot === currentIndex % 3;
    return (
      <span
        key={dot}
        className={`rounded-lg border bg-[#FFFFFFBF] transition-all duration-300
          ${isActive ? 'w-[31px] h-[11px]' : 'w-[11px] h-[11px]'}
        `}
      ></span>
    );
  })}
</div>

              
          </div>
    </div>




  )
}

export default TestimonialCard

