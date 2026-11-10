import React from "react";
import Image from "next/image";
import logo from "../../../public/favicon.ico"
export const metadata = {
  title: 'Afghanistan Dry Fruits',
  description: 'More than 100+ Dry Fruits ',
}
const  About = ()=> {
    return(
       <>
       <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image src={logo} loading="lazy" alt="Photo by Martin Sanchez" classNameName="h-full w-full object-contain "  />
        </div>
      </div>

      <div className="md:pt-8">
       

        <h1 className="mb-4 text-left  text-4xl font-extrabold text-gray-800 sm:text-4xl md:mb-6 md:text-left">Afghanistan Dry Fruits</h1>

        <p className="mb-6 text-gray-500 sm:text-sm md:mb-8">

        Welcome to Afghanistan Dry Fruits, your go-to source for high-quality and delicious dry fruits from Afghanistan. We are proud to offer a wide selection of Afghan dry fruits, including almonds, pistachios, walnuts, cashews, raisins, figs, mulberries, and many more.
        
        </p>
        <p className="mb-6 text-gray-500 sm:text-sm md:mb-8">
          
          Our dry fruits are sourced directly from the farmers and producers in Afghanistan, ensuring their freshness and quality. We take great care in selecting only the best products, and our team works hard to ensure that you receive your order in a timely and efficient manner.
          
          At Afghanistan Dry Fruits, we are committed to providing our customers with the best possible shopping experience. Whether you are looking for a healthy snack option or ingredients for your favorite recipes, we have got you covered. Our dry fruits are perfect for snacking, baking, cooking, and making your own trail mix.
          
          
                    </p>
        <h1 className="mb-2 text-left text-4xl font-extrabold text-gray-800 sm:text-4xl md:mb-4 md:text-left">About us</h1>
        <p className="mb-6 text-gray-500 sm:text-sm md:mb-8">

        We understand the importance of quality, freshness, and taste when it comes to dry fruits. That is why we go the extra mile to ensure that our products meet the highest standards of quality and freshness.

Our mission is to bring the delicious taste and health benefits of Afghan dry fruits to people all around the world. We believe that everyone deserves to enjoy the amazing flavors and nutritional benefits of these amazing products.

Thank you for choosing Afghanistan Dry Fruits. We look forward to serving you and providing you with the best possible dry fruit shopping experience!

        </p>
      
      </div>
    </div>
  </div>
</div>
       </>
    );
}
export default About;