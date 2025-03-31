import React from 'react';
import notFound from '../../assets/not found.png';
import notFound1 from '../../assets/not found1.png';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="bg-secondBackground text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center py-[80px] px-[20px] sm:py-[100px] sm:px-[40px] lg:p-[183px_352px]">
        <img 
          className="w-full max-w-[500px] lg:max-w-none" 
          src={notFound} 
          alt="404 Not Found" 
        />
        <Link 
          to="/" 
          className="bg-[#2938b4] transition-colors rounded-[30px] py-[10px] px-[20px] mt-[40px] sm:mt-[61px] mx-auto"
        >
          Back to Homepage
        </Link>
      </div>
      
      <div className="bg-secondBackground lg:px-[100px] px-[36px] pb-[105px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img 
              className="scale-x-[-1] w-full max-w-[400px] lg:max-w-none" 
              src={notFound1} 
              alt="Newsletter illustration" 
            />
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h4 className="font-bold text-[30px] sm:text-[38px] lg:text-[45px] text-blue mb-4">
              Join our weekly digest
            </h4>
            <p className="text-[16px] sm:text-[18px] mb-6 sm:mb-8">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            
            <div className="relative mt-[75px]">
            <input
              type="email"
              placeholder="Enter Your Mail..."
              autoComplete="email"
              aria-label="Enter Your Mail..."
              className="w-full py-[22px] pl-[29px] outline-none placeholder:text-[#757575] bg-[#d4d8dd] rounded-[47px] caret-black text-black"
            />
            <div className="absolute inset-y-1 right-1">
              <button
                type="submit"
                aria-label="Submit"
                className="flex h-full items-center justify-center right-0  py-[17px] pr-[27px] pl-[37px] bg-blue uppercase rounded-[30px] text-[12px]  text-xs font-semibold leading-[1.63] text-center text-white cursor-pointer"
              >
                get started
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
