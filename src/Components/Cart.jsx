import React, { useContext } from 'react';
import { AppContext } from '../CartContext';

const Cart = () => {
  const { cart, setShowCart, increaseQty, decreaseQty, removeItem } = useContext(AppContext);

 const total = cart.reduce((acc, item) => {
    console.log("Price:", item.rs, "Quantity:", item.qt);
    return acc + item.rs * item.qt;
  },0);


  return (
    <div className="p-6 bg-white text-black rounded-xl w-[400px] shadow-xl flex flex-col absolute top-5 right-1 max-h-[80vh]  z-20 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-lg">

          <div>
            <img className='w-[70px] h-[70px] mx-auto' src={item.img}/>
            <p className="font-semibold">{item.p1}</p>
            <p className="text-sm text-gray-700">₹{item.rs} each</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="w-7 h-7 bg-gray-300 rounded-md text-black"
            >
              -
            </button>

            <span className="text-lg font-semibold">{item.qt}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="w-7 h-7 bg-gray-300 rounded-md text-black"
            >
              +
            </button>
          </div>

          <p className="font-semibold">₹{item.rs * item.qt}</p>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 text-lg font-bold ml-3"
          >
            ×
          </button>

        </div>
      ))}

      <hr className="my-3" />

      <p className="text-xl font-bold">
        Total: ₹{total}
      </p>

       <button onClick={() => setShowCart(false)} className='bg-red-600 text-white rounded-md w-20 p-2'>Close</button>
    </div>
  );
};

export default Cart;

