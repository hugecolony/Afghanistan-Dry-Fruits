import React from 'react'
import Footer from './Footer'

import Image from "next/image";
import logo from "../public/favicon.ico"
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
    title:"Contact"
    
  }
const Contact = () => {
  return (

<>  

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
      <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image src={logo} loading="lazy" alt="Photo by Martin Sanchez" className="h-100 w-100 object-contain "  />
        </div>
      <p className="mb-6 text-gray-500 sm:text-sm md:mb-8">

Welcome to Afghanistan Dry Fruits, your go-to source for high-quality and delicious dry fruits from Afghanistan. We are proud to offer a wide selection of Afghan dry fruits, including almonds, pistachios, walnuts, cashews, raisins, figs, mulberries, and many more.

</p>
<p className="mb-6 text-gray-500 sm:text-sm md:mb-8">
  
  Our dry fruits are sourced directly from the farmers and producers in Afghanistan, ensuring their freshness and quality. We take great care in selecting only the best products, and our team works hard to ensure that you receive your order in a timely and efficient manner.
  
  At Afghanistan Dry Fruits, we are committed to providing our customers with the best possible shopping experience. Whether you are looking for a healthy snack option or ingredients for your favorite recipes, we have got you covered. Our dry fruits are perfect for snacking, baking, cooking, and making your own trail mix.
  
  
            </p>

        <div className="mt-8">
          
          <a  href="https://wa.me/923005666800" className="text-xl font-bold text-brown-900" >
           
            Whatsapp : +92 300 5666800</a>
            <p className="text-xl font-bold text-brown-900"  >
            <a href="mailto: export@afghanistandryfruits.com">
          Email : export@afghanistandryfruits.com
          </a>
          </p>
        
          {/* <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address> */}
        </div>
      </div>

      <div className="rounded-lg bg-brown-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
      <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-4/5">
        <h2 className="mb-4 text-xl font-bold text-slate-100 md:text-2xl lg:text-4xl">Help center</h2>

        <p className="mb-8 max-w-md text-slate-100">
          
          
        We understand the importance of quality, freshness, and taste when it comes to dry fruits. That is why we go the extra mile to ensure that our products meet the highest standards of quality and freshness. Our mission is to bring the delicious taste and health benefits of Afghan dry fruits to people all around the world. We believe that everyone deserves to enjoy the amazing flavors and nutritional benefits of these amazing products. Thank you for choosing Afghanistan Dry Fruits. We look forward to serving you and providing you with the best possible dry fruit shopping experience!
        </p>

        <div className="mt-auto">
          <a   href="https://wa.me/923005666800" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
</>
    );
}

export default Contact