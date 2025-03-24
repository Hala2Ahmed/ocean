import React, { useState } from "react";
import logo from "../../assets/Group 2 2.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondBackground py-7  px-7 lg:pt-[58px] lg:pb-[54px] lg:pr-[155px] lg:pl-[151px]">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex items-center lg:order-2">
          <div className="hidden md:block">
            <button className="bg-blue font-bold text-[18px] px-[20px] py-[14px]  rounded-full text-white">
              <Link className="" to="/contact">
                Contact
              </Link>
            </button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:border-2 lg:bg-[#262626] lg:rounded-[50px] lg:pt-[21px] lg:pb-[15px] lg:px-[44px]">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white lg:border-0 border-b border-gray-500 rounded lg:bg-transparent lg:text-blue lg:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 text-white border-b border-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
