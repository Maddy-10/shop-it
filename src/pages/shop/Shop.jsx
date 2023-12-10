import React from 'react'
import { Product } from './Product'
import { Products } from '../../products'

export const Shop = () => {
    return (
      <div className="Shop">
        <div className="flex">
          <h1 className="text-6xl font-bold mx-auto mt-[50px]"></h1>
        </div>
        {/* <div className='Products'> */}
        <div className="Products w-full grid grid-cols-2  gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center">
          {Products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
}

