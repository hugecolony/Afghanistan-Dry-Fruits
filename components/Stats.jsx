import React from "react";
export default function Stats() {
    return(
      <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-4xl">Distrition To eCommerce Businesses</h1>
    
          <p className="mt-4 text-gray-500 sm:text-xl">
            Best Dry Fruits And Nuts Distributor in Afghanistan And Pakistan
          </p>
        </div>
    
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-brown-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Distributors</dt>
    
              <dd className="text-4xl font-extrabold text-brown-600 md:text-5xl">100+</dd>
            </div>
    
            <div className="flex flex-col rounded-lg bg-brown-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Official Categories</dt>
    
              <dd className="text-4xl font-extrabold text-brown-600 md:text-5xl">24+</dd>
            </div>
    
            <div className="flex flex-col rounded-lg bg-brown-200 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Products</dt>
    
              <dd className="text-4xl font-extrabold text-brown-600 md:text-5xl">86+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    );
}

