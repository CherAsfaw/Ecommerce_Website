import React from 'react'
import Slider from "react-slick";


function Testimonials() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };
  return (
    <div className="py-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            What Our Customers Say
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            neque voluptatibus ut?
          </p>
        </div>
        {/* testimonials cards */}
        <div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials