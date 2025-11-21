import React, { useContext } from 'react'
import SectionTittle from './SectionTittle'
import Button from './Button'
import { TbBorderCornerRounded } from 'react-icons/tb';
import { AppContext } from '../CartContext';
const PlantCard = () => {
   const {handleAddToCart} = useContext(AppContext); 
   const item = {
       
        id:2,
        img:'/b48312dbddc890f7f35ef3964ae1e7900b89782c.png',
        p1:"Plantain Lilies",
        p2:"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        rs:380,
        qt:0,
        bg:"/0cc12c30ffef0466f2779edadcefe9250d10e34e.png"
    };
    const item1 = {
          id:7,
        img:'/95e728282f4fb901ee2edc80783c2fbd7df490c2.png',
        p1:"Plantain Lilies",
        p2:"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        rs:380,
        qt:0,
        bg:"/0cc12c30ffef0466f2779edadcefe9250d10e34e.png"
    };
  return (
    <div >
      <SectionTittle className="w-max h-[67px] m-auto -top-40 relative">Our Trendy plants
         <TbBorderCornerRounded className='left-[-21px] bottom-[-20px] -rotate-90 text-[#8c8233] text-[80px] absolute'/>
                        <TbBorderCornerRounded className='absolute left-[420px] -bottom-[10px] rotate-90 text-[#8c8233] text-[80px]'/>
      </SectionTittle>
      <div className='w-[1619px] h-[526px] mt-20 ml-[50px] border-[2px] border-white/40  rounded-[151px] backdrop-blur-[40px]'>
        <div className='flex justify-around'>
           <img className='w-[732px] h-[732px] -mt-52 -ml-28' src='./b48312dbddc890f7f35ef3964ae1e7900b89782c.png'/>
           <div className='mt-[90px]'>
                <p className='w-[510px] h-[46px] font-flora font-semibold text-[38px] text-white mt-10 '>For Your Desks Decorations</p>
          <p className='w-[732px] h-[48px] font-flora font-semibold text-[20px] mt-10 text-white '>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <p className='w-[171px] h-[46px] font-flora font-semibold text-[38px] text-white mt-8'>Rs.599/-</p>
          <div className=' space-x-6 flex mt-8'>
    <a href='https://www.nature.com/articles/s41561-025-01710-7' target='_blank'><Button className="w-[217px] h-[64px] border-2 border-white rounded-[12px] text-white font-flora font-medium text-[28px] cursor-pointer">Explore</Button></a> 
          <Button className="w-[64px] h-[64px] border-2  rounded-[12px] flex items-center justify-center" onClick={()=>handleAddToCart(item)}><img className="w-[34px] h-[34px] object-contain block" src="./0cc12c30ffef0466f2779edadcefe9250d10e34e.png"/></Button>
          </div>
           </div>
        </div>
      </div>
     
     <div className='w-[1619px] h-[535px] mt-64 ml-[50px] border-[2px]  border-white/40 rounded-[151px] backdrop-blur-[40px] '>
        <div className='flex flex-row-reverse justify-around'>
           <img className='w-[732px] h-[750px] -mt-52 -ml-28' src='/95e728282f4fb901ee2edc80783c2fbd7df490c2.png'/>
           <div className='mt-[90px]'>
                <p className='w-[510px] h-[46px] font-flora font-semibold text-[38px] text-white mt-10 '>For Your Desks Decorations</p>
          <p className='w-[732px] h-[48px] font-flora font-semibold text-[20px] mt-10 text-white '>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <p className='w-[171px] h-[46px] font-flora font-semibold text-[38px] text-white mt-8'>Rs.599/-</p>
          <div className=' space-x-6 flex mt-8'>
             <a href='https://www.nature.com/articles/s41561-025-01710-7' target='_blank'><Button className="w-[217px] h-[64px] border-2 border-white rounded-[12px] text-white font-flora font-medium text-[28px]">Explore</Button></a> 
         <Button className="w-[64px] h-[64px] border-2  rounded-[12px] flex items-center justify-center" onClick={()=>handleAddToCart(item)}><img className="w-[34px] h-[34px] object-contain block" src="./0cc12c30ffef0466f2779edadcefe9250d10e34e.png"/></Button>
          </div>
           </div>
        </div>
      </div>
    </div>
  )
};

export default PlantCard

