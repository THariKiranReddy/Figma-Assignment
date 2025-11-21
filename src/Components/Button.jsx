import React from 'react'

const Button = ({children,className,onClick}) => {
  return (
   <button className={` rounded-md transition duration-300 ${className}`} onClick={onClick}>
      {children}
   </button>
  )
}

export default Button