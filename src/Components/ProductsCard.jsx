import React, { useContext, useState } from 'react'
import SectionTittle from './SectionTittle'
import Button from './Button'
import { TbBorderCornerRounded } from 'react-icons/tb'
import { AppContext } from '../CartContext'

const ProductsCard = () => {
  const {handleAddToCart,data} = useContext(AppContext);
  return (
    <div className='bg-[#1b2316] ' id='plants'>
       <div id='plants-section'>
        <SectionTittle className="w-[600px] h-[67px] mx-auto mt-60 relative">Our Top Selling Plants
           <TbBorderCornerRounded className='-mt-20 -ml-4 -rotate-90 text-[#8c8233] text-[80px]'/>
                        <TbBorderCornerRounded className='absolute left-[530px] -bottom-[12px] rotate-90 text-[#8c8233] text-[90px]'/></SectionTittle> 
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-2  md:gap-x-4  md:gap-20 gap-2 gap-y-40 justify-between mt-40 ml-[47px]' id='buy hidden'>
        {data.map((item,id)=>{
            return <div key={id} className='w-[512px] h-[680px] border-2 rounded-[77px] bg-[#272e22] backdrop-blur-[25px] shadow-[0px_9px_18.4px_0px_#00000040] border-[#646961]'>
                <img src={item.img} className='w-[459px] h-[459px] object-contain mx-auto -mt-28'/>
                <div className='ml-14 mr-14'> 
                   <div>
                   <p className='h-[46px] font-flora font-[400] text-[38px] text-[#FFFFFFBF] '>{item.p1}</p>
                <p className='w-[400px] h-[116px] font-flora font-[400] text-[24px]  text-[#FFFFFFBF] mt-4'>{item.p2}</p>
                </div>
                <div className='flex justify-between w-[372px]  mt-8  '>
                     <p className=' h-[46px] font-flora font-[400] text-[38px] text-[#FFFFFFBF] -mr-10'>₹{item.rs}</p>
               <Button onClick={()=>handleAddToCart(item)} className='w-[55px] h-[55px] border-2 border-[#FFFFFFBF] rounded-xl text-[#FFFFFFBF] -ml-15 '> <img src={item.bg} className='w-[27px] h-[27px] object-cover block mx-auto'/></Button>
                </div>
              </div>
            </div>
          })}
        </div>
       </div>
    </div>
  )
}

export default ProductsCard