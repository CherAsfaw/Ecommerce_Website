import React from "react";
import Slider from "react-slick";
import { heroData } from "../../constant/hero";

export const Hero = () => {
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
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex items-center justify-center ">
      {/* background patter */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {heroData.map((hero) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text section */}
                <div className="flex flex-col pt-12 sm:pt-0 text-center sm:text-left justify-center gap-4 order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-delay="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {hero.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {hero.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <button
                      className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
             text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className=" relative z-10"
                  >
                    <img
                      src={hero.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
