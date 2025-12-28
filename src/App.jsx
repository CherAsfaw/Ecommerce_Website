import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Components/Product/product';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,

    });
    AOS.refresh();
  }, []);

  return (
    <div className=" text-black dark:text-white bg-white dark:bg-gray-800">
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonials/>
    </div>
  );
}

export default App