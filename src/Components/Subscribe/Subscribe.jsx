import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg' 

function Subscribe() {
  const bannerImage= {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }
  return (
    <div
      className="mb-20 text-white bg-gray-100 dark:bg-gray-800"
      style={bannerImage}
      data-aos="zoom-in"
    >
      <div className="container mx-auto py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-3xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your Email"
            className="w-full p-3 bg-white  focus:outline-none focus:ring-0 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe