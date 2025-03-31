import React, { useState, useEffect } from "react";
import logo from "../../assets/Group 2 2.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';

export default function Navbar() {
    const { t, i18n } = useTranslation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

useEffect(() => {
  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
function changeLanguage() {
  if(i18n.language === "ar") {
    i18n.changeLanguage("en");
    document.dir="ltr";
  }else {
    i18n.changeLanguage("ar");
    document.dir="rtl";
  }
}
const lng=cookies.get('i18next') || 'en';
useEffect(() => {
  window.document.dir=i18n.dir();
},[lng])


  return (
    <nav 
      className={`bg-secondBackground sticky top-0 z-50 w-full transition-all duration-700 ease-in-out ${
        isScrolled ? "py-[32px]" : "py-[42px]"
      }`}
    >
      <div className={`px-7 lg:pr-[130px] lg:pl-[130px] mx-auto max-w-screen-xl ${
        isScrolled ? "" : ""
      }`}>
        <div className="flex flex-wrap items-center justify-between">
          <NavLink to="/" className="" end>
            <img src={logo} alt="Logo" />
          </NavLink>

          <div className="flex items-center lg:order-2">
            <div className="hidden md:block">
              <button className="bg-blue font-bold text-[18px] px-[20px] py-[14px] rounded-full text-white">
                <NavLink to="/contact">{t("navbarButton")}</NavLink>
              </button>
            </div>
            <button onClick={changeLanguage} className="font-bold text-[18px] px-[20px] py-[14px] rounded-full text-white cursor-pointer">
                 {i18n.language === "ar" ? "En" : "Ar"}
              </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
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
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => 
                    `block py-2 pl-3 pr-4 lg:border-0 border-b border-gray-500 rounded lg:p-0 ${
                      isActive ? "text-blue" : "text-white"
                    }`
                  }
                >
                  {t("navbarlink1")}
                </NavLink>
              </li>
              <li>
              <NavLink
                to="/service"
                className={({ isActive }) => 
                  `block py-2 pl-3 pr-4 border-b border-gray-500 lg:border-0 lg:p-0 ${
                    isActive ? "text-blue" : "text-white"
                  }`
                }
              >
                {t("navbarlink2")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => 
                  `block py-2 pl-3 pr-4 border-b border-gray-500 lg:border-0 lg:p-0 ${
                    isActive ? "text-blue" : "text-white"
                  }`
                }
              >
                {t("navbarlink3")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/HowItWork"
                className={({ isActive }) => 
                  `block py-2 pl-3 pr-4 border-b border-gray-500 lg:border-0 lg:p-0 ${
                    isActive ? "text-blue" : "text-white"
                  }`
                }
              >
                {t("navbarlink4")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => 
                  `block py-2 pl-3 pr-4 border-b border-gray-500 lg:border-0 lg:p-0 ${
                    isActive ? "text-blue" : "text-white"
                  }`
                }
              >
                {t("navbarlink5")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => 
                  `block py-2 pl-3 pr-4 border-b border-gray-500 lg:border-0 lg:p-0 ${
                    isActive ? "text-blue" : "text-white"
                  }`
                }
              >
                {t("navbarlink6")}
              </NavLink>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}