import React from "react";
import img1 from "../../assets/253b63903a5bfc358e24dd058dc052a0.gif";
export default function PreFooter() {
  return (
    <div className="bg-secondBackground text-[#ffffff] pt-[104px] pb-[75px] px-7 md:px-[113px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        <div className=" bg-blue p-[14px_32px_17px] rounded-[114px] sm:w-full md:w-[406px] sm:mx-auto mx-0">
          <img className="scale-x-[-1]" src={img1} alt="gif" />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-[45px] text-blue">
            Join our weekly digest
          </h4>
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
                className="flex h-full items-center justify-center absolute right-0  py-[17px] pr-[27px] pl-[37px] bg-blue uppercase rounded-[30px] text-[12px]  text-xs font-semibold leading-[1.63] text-center text-white cursor-pointer"
              >
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
