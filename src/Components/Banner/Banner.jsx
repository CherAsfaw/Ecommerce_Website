import React from 'react'
import bannerImage from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
function Banner() {
  return (
    <div className="min-h-[550px] flex items-center justify-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={bannerImage}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
              Winter Sale Upto 50% Off
            </h1>
            <p
              className="text-sm text-gray-500 tracking-wide leading-5"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ab in sunt non, asperiores consectetur cupiditate eos. Accusamus
              ducimus labore quia totam doloremque, nam eligendi inventore,
              similique amet architecto nihil.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <GrSecure
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Product</p>
              </div>

              <div className="flex items-center gap-6">
                <IoFastFood
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Fast Delivery</p>
              </div>

              <div className="flex items-center gap-6">
                <GiFoodTruck
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Easy Payment Method</p>
              </div>

              <div className="flex items-center gap-6">
                <IoFastFood
                  data-aos="fade-up"
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Get Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner