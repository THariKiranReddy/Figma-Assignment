import React from 'react'
import { LiaStarHalfSolid } from 'react-icons/lia'
import { MdStarRate } from 'react-icons/md'
import SectionTittle from './SectionTittle'
import Button from './Button'
import { TbBorderCornerRounded } from "react-icons/tb";

const TestimonialCard = () => {
  return (
    <div>
      <SectionTittle className='w-[500px] h-[67px] m-auto mt-64 relative'>Customer Review
         <TbBorderCornerRounded className='-mt-16 -ml-5 -rotate-90 text-[#FBD300] text-[80px]'/>
              <TbBorderCornerRounded className='absolute left-[430px] -bottom-[10px] rotate-90 text-[#FBD300] text-[90px]'/>
      </SectionTittle>
      <div className='flex justify-around w-[1602px] h-[480px] mx-auto ml-[70px]'>

      {/* First Card */}

      <div className='w-[512px] h-[480px] border-[2px] border-white/10 border-t-0  rounded-[77px]  backdrop-blur-[15px]  bg-[#272e22] shadow-[0px_4px_40px_rgba(0,0,0,0.4)] mt-[220px]'>

   {/* <svg
  className="absolute top-0 left-0 w-full"
  height="40"
  viewBox="0 0 400 40"
  fill="none"
>
  <path
    d="M0 0 Q200 60 400 0"
    stroke="rgba(255,255,255,0.15)"
    strokeWidth="2"
    fill="none"
  />
</svg> */}


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


   {/* <svg
  className="absolute top-0 left-0 w-full"
  height="40"
  viewBox="0 0 400 40"
  fill="none"
>
  <path
    d="M0 0 Q200 60 400 0"
    stroke="rgba(255,255,255,0.15)"
    strokeWidth="2"
    fill="none"
  />
</svg> */}

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


   {/* <svg
  className="absolute top-0 left-0 w-full"
  height="40"
  viewBox="0 0 400 40"
  fill="none"
>
  <path
    d="M0 0 Q200 60 400 0"
    stroke="rgba(255,255,255,0.15)"
    strokeWidth="2"
    fill="none"
  />
</svg> */}

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
              <img src='/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png' className='w-[877px] h-[877px] -ml-[80px] -mt-32 '/>
              <div className='mt-32 mr-27 -ml-20'>
                   <p className='font-flora font-[600] text-[38px] text-[#FFFFFFBF] '>We Have Small And Best O2 Plants<br></br> Collection’s</p>
              <p className='font-flora font-[600] text-[28px] text-[#FFFFFFBF] mt-8 leading-tight '>Oxygen-producing plants, often referred to as "O2 <br></br>plants," are those that release oxygen into the<br></br> atmosphere through the process of photosynthesis.</p>
               <p className='font-flora font-[600] text-[28px] text-[#FFFFFFBF] mt-8 leading-tight'>Many plants can help filter out pollutants and toxins <br></br>from the air, such as formaldehyde, benzene, and<br></br> trichloroethylene. This makes the air cleaner and<br></br> healthier to breathe.</p>
               <div className='flex justify-between'>
                  <Button className="w-[217px] h-[64px] border-2 border-white rounded-[14px] text-[#FFFFFFBF] font-flora font-medium text-[28px] ">Explore</Button>
               <div className='flex justify-between w-[200px] mt-3'>
                 <img className=" w-[24px] h-[24px] rotate-180 opacity-[35%]" src='/65c9b2e2178b53eba63dace1c4f1d8c96673ade2 (1).png'/>
                 <div>
                      <p className='font-flora text-[20px] font-[700] text-[#FFFFFFBF]'>01/<span className='font-flora text-[15px] font-[700] text-[#FFFFFFBF]'>04</span></p>
                 </div>
                 <img className="relative w-[24px] h-[24px]" src='/65c9b2e2178b53eba63dace1c4f1d8c96673ade2 (1).png'/>
               </div>
               </div>
              </div>
            </div>
            <div className='ml-[890px] w-[85px] h-[11px] mt-40 flex justify-between'>
                <span className='w-[31px] h-[11px] bg-[#FFFFFFBF] border rounded-lg '></span><span className='w-[11px] h-[11px] bg-[#FFFFFFBF] border rounded-lg'></span><span className='w-[11px] h-[11px] bg-[#FFFFFFBF] border rounded-lg'></span>
            </div>
             
              
          </div>
    </div>




  )
}

export default TestimonialCard

