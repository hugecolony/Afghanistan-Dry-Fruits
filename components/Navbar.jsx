'use client'

import Image from "next/image"
import Link from "next/link"
import logo from '../public/favicon.ico'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"


const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false)
   const [isOpen, setIsOpen] = useState(false);
   
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    

   const handleMenu = () => {
         setMenuOpen(!menuOpen)
   }

  return (
    <>
    <nav className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-black bg-[#f5f5f5] lg:bg-transparent">
        <div  className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
            <Link href="/">
                <Image 
                src={logo}
                alt="logo"
                width='100'
                height='100'
                priority 
                />
                </Link>
                
           <div className="hidden md:block">
           <nav>
      <ul className="flex items-center justify-center font-semibold ">

      <li className="relative group px-3 py-2">
          <a href="/" className="hover:opacity-50 cursor-default"> Home
          </a>
        </li>
        <li className="relative group px-3 py-2">
          <button className="hover:opacity-50 cursor-default  font-bold ">Categories</button>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div className="relative z-10">
              <a href="/categories"
                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                  All Categories
                </a>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Popular Categories</p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a href="/categories/product-categories/Nuts"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Almonds
                          {/* <Image src={wheyprotein} width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Legumes"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                            Chickpeas
                           {/* <Image src={ISOWHEY} width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Raisins"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                           Raisins
                           {/* <Image src={GOLDMASS} width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Pistachios"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Pistachios
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/nutrex-lipo-6-hardcore-in-pakistan-karachi-lahore-islamabad-at-bravo-nutrition.png" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Walnuts"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Walnuts
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/nutrex-lipo-6-hardcore-in-pakistan-karachi-lahore-islamabad-at-bravo-nutrition.png" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Dry-Fruits"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Figs
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-2.58.47-PM.jpeg" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Dry Fruits</p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                      <a href="/categories/product-categories/Gurr-Bites"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Gurr Bites
                          {/* <Image src={PREWORKOUT} width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Dry-Fruits"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Apricots
                          {/* <Image src={BCAA} width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      
                      <li>
                      <a href="/categories/product-categories/Dates-Khajoor"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Dates
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/Muscle-Tech-Hydroxycut-Hardcore-Elite-in-Pakistan-removebg-preview-1.png" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>

                      <li>
                      <a href="/categories/product-categories/Berries"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Mulberry
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-2.58.47-PM.jpeg" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      <li>
                      <a href="/categories/product-categories/Dry-Fruits"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Cashews
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-2.58.47-PM.jpeg" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>

                      <li>
                      <a href="/categories/product-categories/Dates-Khajoor"
                          className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-brown-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-brown-600">
                          Oleaster
                          {/* <Image src="https://yaseennutrition.pk/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-2.58.47-PM.jpeg" width={50} height={50} className="mx-40"></Image> */}
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="relative group px-3 py-2">
          <button className="hover:opacity-50 cursor-default">Solutions</button>
          <div
            className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div className="relative z-10">
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                <ul className="mt-3 text-[15px]">
                  <li>
                    <a href="#"
                      className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-brown-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-brown-600 hover:via-pink-400 py-1 block">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-brown-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-brown-600 hover:via-pink-400 py-1 block">
                      Streamers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-brown-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-brown-600 hover:via-pink-400 py-1 block">
                      Influence
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-brown-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-brown-600 hover:via-pink-400 py-1 block">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-brown-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-brown-600 hover:via-pink-400 py-1 block">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li> */}
        <li className="relative group px-3 py-2">
          <a href="/products" className="hover:opacity-50 cursor-default"> Products
          </a>
        </li>
        
        {/* <li className="relative group px-3 py-2">
          <button className="hover:opacity-50 cursor-default">Resources</button>
          <div
            className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div className="relative z-10">
                <ul className="text-[15px]">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li> */}
        
        <li className="relative group px-3 py-2">
          <a href="/about" className="hover:opacity-50 cursor-default">About
          </a>
        </li>
        <li className="relative group px-3 py-2">
          <a href="/faqs" className="hover:opacity-50 cursor-default">FAQs
          </a>
        </li>
      </ul>
    </nav>
   
      </div>
        
 <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-brown-500 px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-darkRed hover:text-brown-200 duration-300"
            href="/contact"
          >
            Contact Us
          </a>

        
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
          <AiOutlineMenu onClick={handleMenu} className="sm:hidden text-2xl cursor-pointer" />
          </button>
        </div>
       
         
        </div>
        </div>
        {/* Mobile Version Listed Items */}
        <div className={
            menuOpen ? 'left-0 top-0 w-[65%] h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50': 'hidden'
        }>
            <div className="flex absolute top-6 right-6 w-full justify-end items-center">
                <AiOutlineClose onClick={handleMenu} className="text-2xl text-black mb-4" />
            </div>

            <ul className="flex flex-col justify-center items-center mt-20 ">
            

            <li className="text-2xl text-black mb-4">      
            
              <Link href="/"> Home</Link>
                </li>
                



                <li className="text-2xl text-black mb-4">
                            <div className='w-full py-6 pb-8'>
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className="px-4 py-2 text-white bg-brown-500 hover:bg-brown-800 focus:ring-4 focus:outline-none focus:ring-brown-300 font-medium rounded-lg text-xl inline-flex items-center"
                            onClick={toggleDropdown}
                        >
                            Categories <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <li>
                                        <a
                                            href="/categories/product-categories/Nuts"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Almonds
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                           href="/categories/product-categories/Legumes"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                           Chickpeas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/categories/product-categories/Raisins"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Raisins
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/categories/product-categories/Pistachios"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Pistachios
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/categories/product-categories/Walnuts"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Walnuts
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/categories/product-categories/Gurr-Bites"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Gurr Bites
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/categories/product-categories/Dates-Khajoor"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Dates
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/categories/product-categories/Berries"
                                            className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                            onClick={closeDropdown}
                                        >
                                            Mulberry
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                </li>


                
             
                 
                <li className="text-2xl text-black mb-4">
                    <Link href="/products"> All Products</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/about"> About</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/faqs"> Faqs</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/contact"> Contact</Link>
                </li>
                

                
            </ul>

        </div>

        

    </nav>

    
    </>
  )
}

export default Navbar