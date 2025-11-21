import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import HeroBanner from './Components/HeroBanner'
import PlantCard from './Components/PlantCard'
import ProductsCard from './Components/ProductsCard'
import TestimonialCard from './Components/TestimonialCard'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { AppContext } from './CartContext'


const App = () => {
  const {showCart,setShowCart,cart} = useContext(AppContext);

  return (
    <div className="w-[1728px] bg-[#1b2316] m-auto">

         {/* CART POPUP */}
      {showCart && <Cart />}

      {/* TOP SECTION WITH BACKGROUND IMAGE */}
      <section
        className="w-[1728px] h-[2600px] bg-no-repeat bg-top-40 object-cover"
        style={{
          backgroundImage:
            "url('/fa0765984e44f85e1a04562f820f1492949a1257.jpg')",
        }}
      >
        <Navbar/>
        <HeroBanner />
        <PlantCard />
      </section>

      {/* LOWER SECTION WITHOUT BACKGROUND */}
      <section className="w-[1728px] h-[5100px] bg-[#1b2316]">
        <ProductsCard />
        <TestimonialCard />
        <Footer/>
      </section>
    </div>
  );
};

export default App;



