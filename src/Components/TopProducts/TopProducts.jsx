import React from "react";
import { CiStar } from "react-icons/ci";
import { productDataList } from "../../constant/productDataList";

function TopProducts() {
  return (
    <div>
      <div className="container mx-auto">
        {/* header section */}
        <div className="text-left mb-24">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Rated Products for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            neque voluptatibus ut?
          </p>
        </div>
        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 justify-items-center">
          {productDataList.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white
            relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="flex items-center gap-1 justify-center w-full">
                  {[...Array(data.rating)].map((_, index) => (
                    <CiStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary text-white duration-200 py-1 px-4 rounded-full mt-4 hover:scale-105 
                  group-hover:bg-white group-hover:text-primary "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
