
import React from "react"
import Image from "next/image";
import {getSingleProduct, getData} from "../../helpers/index.js";
export const metadata = {
  title: 'Afghanistan Dry Fruits',
  description: 'More than 100+ Dry Fruits ',
}

export async function getStaticParams(){
  const products = await getData();
  return products.map((product)=>({
    ID : product.ID
  }))
}
function parseParam(oldParams, newParams = {}, field = '') {
    for (const key in oldParams) {
        let field3 = field.length > 0 ? field + '[' + key + ']' : key ;
        switch (typeof oldParams[key]) {
            case 'object':         
                let object = parseParam(oldParams[key], newParams, field3);
                newParams = Object.assign(newParams, object);  
                break;
            case 'string':
            case 'number':        
                newParams[field3] = oldParams[key];         
                break;
                
               
             
        }
    }
    
    return newParams;
}
function parseValues(parse,newvalue={}){
    for (const [key, value] of parse.entries()) {
        // console.log(`${key}, ${value}`);
        newvalue = `${value}`
      }
    
    return newvalue  
    
}

const  productDetails  =  async (searchparams)=>{
    let query = searchparams
    
    
    const urlParams = new URLSearchParams(parseParam(query));

    // for (const [key, value] of urlParams.entries()) {
    //     console.log(`${key}, ${value}`);
    //   }
  
    const _values = parseValues(urlParams)
    
    const _id = Number(_values)
   
    const product = await getSingleProduct(_id);
    
    
    return (
        <>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
         
        <Image src={product?.Image} width={500} height={500} alt="product image" className="h-full w-full object-contain "  ></Image>
        </div>
      </div>

      <div className="md:pt-8">
        <p className="text-center font-bold text-brown-500 md:text-left">{product?.Category}</p>

        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800 sm:text-4xl md:mb-6 md:text-left">{product?.Name}</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        
        {product?.Description}
        </p>

       </div>
    </div>
  </div>


  
        </div>          
        </>
         )
}
export default productDetails;