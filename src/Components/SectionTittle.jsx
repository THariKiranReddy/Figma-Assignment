import React from 'react'

const SectionTittle = ({children,className}) => {
  return (
    <h1 className={`text-white text-center font-flora font-semibold text-[55px]  ${className}`}>{children}</h1>
  )
}

export default SectionTittle