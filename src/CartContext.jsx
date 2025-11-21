import { createContext, useEffect, useState } from "react"
import bannerData from "./bannerData";

export const AppContext = createContext();
import data from './data'
import Odata from './Odata'

import React from 'react'

const CartContextProvider = ({children}) => {
      const [cart,setCart] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const handleAddToCart = (data)=>{
    setCart(prev =>{
      const exist = cart.find(item => item.id === data.id);
    if(exist){
      alert("Item Already Exist's");
      return prev;
    }
    alert('item added to cart');
    return [...prev,{...data,qt:1}];
    });
  };

  //saves items to localstorage.
   useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

// Increase Quantity
  const increaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id ? { ...item, qt: item.qt + 1 } : item
    )
  );
};

// Decrease Quantity
const decreaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id && item.qt > 1
        ? { ...item, qt: item.qt - 1 }
        : item
    )
  );
};

// Remove item
const removeItem = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};

  return (
    <AppContext.Provider value={{handleAddToCart,increaseQty,decreaseQty,removeItem,setShowCart,showCart,cart,bannerData,data,Odata}}>
        {children}
    </AppContext.Provider>
  )
}

export default CartContextProvider