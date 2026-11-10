import React from "react";
import { getData } from "../../../helpers/index.js";
import ProductCard from "../../../../../components/ProductCard";
export const metadata = {
    title: 'Afghanistan Dry Fruits',
    description: 'More than 100+ Dry Fruits ',
  }

export default async function Products(){
    const products = await getData();
    const categories = products.filter(product =>
        product.Category === 'Pistachios' 
    );
    return(
        
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8 xl:gap-4">
                   {
                       categories.map(product=>{
                      
                           return (
                               <ProductCard product={product} key={product.ID} />
                           );
                       })
                   }
               </div>
               </div>
               </div>
           //   <Allproducts  products = {products}/>
           );
       }
       