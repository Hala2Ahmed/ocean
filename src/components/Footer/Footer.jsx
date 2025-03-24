import React from "react";
import logo from "../../assets/Group 2 2.svg";
import yutubeIcon from "../../assets/Vector (Stroke).svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="lg:px-[212px] px-11 pt-[40px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-1">
            <img src={logo} alt="logo ocean" className="w-24 md:w-32" />
            <p className="max-w-[238px] text-[#CCCCCC] pt-[30px] pb-[20px]">
              Ocean. Innovating Digital Solutions. All Rights Reserved
            </p>
            <p className="max-w-[238px] text-[#CCCCCC]">Join our community</p>
            <div className="flex gap-4 pt-[15px] pb-[30px]">
              <i><img src={yutubeIcon} alt="yutube Icon" /></i>
              <i><img src={TwitterLogo} alt="Twitter Icon" /></i>
              <i><img src={InstagramLogo} alt="Instagram Icon" /></i>
            </div>
          </div>
          <div className="sm:col-span-1 md:mx-auto">
            <p className="font-bold text-[22px] text-[#ffffff] pb-[25px]">
              Explore
            </p>
            <div className="flex flex-col items-start ">
              <p className="">PROJECTS</p>
              <p className="pt-[20px] pb-[20px]">How it works</p>
              <p className="">Contact</p>
            </div>
          </div>
          <div className="sm:col-span-2">
            {/* <p className="max-w-[467px]">
              Get exclusive promotions & updates straight to your inbox.
            </p> */}
            <h3 className="font-semibold text-[35px] max-w-[432px]">
              Join our weekly digest
            </h3>
            <p className="text-[#CCCCCC] pt-[14px] pb-[20px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="relative flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="md:py-[16px] px-4 py-4 md:px-5  md:pl-5 border bg-white rounded-[20px] text-lg text-gray-900 placeholder:py-[19px]  placeholder:text-[#000000] focus:outline-none flex-1 w-full "
                placeholder="Enter your email here"
              />
              <button
                type="submit"
                className="absolute right-0 px-4 py-5  md:py-[19px] md:px-[50px] bg-blue shadow-md rounded-[20px] text-white font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className=" border-gray-200 mt-[30px]" />
        <p className="text-[#CCCCCC] text-center pt-[20px] pb-[43px] text-[12px]">
          Ⓒ Ocean Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
}
