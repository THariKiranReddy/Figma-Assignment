import React from 'react'

const Button = ({children,className}) => {
  return (
   <button className={` rounded-md transition duration-300 ${className}`}>
      {children}
   </button>
  )
}

export default Button