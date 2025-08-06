import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"; // FIXED icon
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Menu items
const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "New Arrivals", link: "/new-arrivals" },
  { id: 3, name: "Womens Collection", link: "/womens" },
  { id: 4, name: "Mens Collection", link: "/mens" },
  { id: 5, name: "Patola Special", link: "/patola" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top bar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="w-10" />
            Vestrify Soul
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
            >
              <span className="hidden sm:inline">Order</span>
              <FaShoppingCart className="text-xl" />
            </button>

            <DarkMode />

            {/* Toggle for mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden text-2xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar - desktop */}
      <div data-aos="zoom-in" className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4 py-3">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white dark:bg-gray-900 absolute w-full left-0 z-30 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
          
          {/* Simple Dropdown and Links */}
          {/* <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2 px-4 hover:text-primary duration-200">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
