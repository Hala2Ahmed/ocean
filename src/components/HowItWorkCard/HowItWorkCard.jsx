import React from "react";
export default function HowItWorkCard({ processSteps }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-5 md:pt-[84px]">
      {processSteps.map((process, index) => (
        <div
          key={index}
          className="how-it-work-card rounded-[5px] overflow-hidden group hover:outline hover:outline-[#00fcdb] hover:outline-offset-2 transition duration-500 ease-in-out"
        >
          <div className="px-6">
            <div className="bg-blue rounded-[15px] w-[55px] mt-[38px] group-hover:bg-[#00fcdb] transition duration-500 ease-in-out ">
              <i className="text-white">
                <img
                  className="py-2 mx-auto how-it-work-icon transition duration-500 ease-in-out filter brightness-0 invert w-[30px]"
                  src={process.image}
                  alt={process.name}
                />
              </i>
            </div>
          </div>
          <div className="px-6 pb-4">
            <h5 className="font-semibold text-xl sm:text-[22px] pt-[23px] pb-3 md:pb-[55px]">
              {process.name}
            </h5>
            <p className="max-w-[303px] text-sm sm:text-base text-[#fff]">
              {process.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
