import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { menu } from '../../constant/menu';
import { dropdownLinks } from '../../constant/dropdownLinks';

function Navbar() {
  return (
    <div className="shadow-md duration-200 relative z-48">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="p-4 sm:p-12 flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="" className="w-10 " />
              Shopsy
            </a>
          </div>
          {/* search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[180px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary bg-white
                 text-black "
              />

              <CiSearch
                className="absolute text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2
              right-3"
              />
            </div>
            {/* order button */}

            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
            text-white px-4 py-1 rounded-full flex items-center gap-3 group"
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark mode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className='group relative cursor-pointer'>
            <a
              href="#"
              className="flex items-center py-2 gap-0.5"
            >
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-9999 hidden group-hover:block w-[150px] rounded-md  bg-white p-2 text-black shadow-md'>
              <ul>
                {
                  dropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                        {data.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar