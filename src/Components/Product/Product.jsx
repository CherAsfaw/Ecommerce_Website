import React from 'react'
// import { FaStar } from 'react-icons'
import { productData } from '../../constant/productData'
import { CiStar } from "react-icons/ci";

function Product() {
  return (
    <div className="mt-12 mb-12  text-black dark:text-white bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            neque voluptatibus ut?
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {/* card section */}
            {productData.map((product) => (
              <div
                key={product.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-[350px] w-[300px] m-0 p-0 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex items-center gap-1">
                    <CiStar className="inline-block text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-full hover:scale-105 duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product