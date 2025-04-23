import React from "react";

export default function ServicesCard({ services }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-5 px-4 md:px-[144px] md:pt-[120px]">
      {services?.map((service, index) => (
        <div
          key={index}
          className="rounded-[5px] overflow-hidden shadow-lg bg-[#ffffff0c] hover:bg-primary hover:outline hover:outline-[#00fcdb] hover:outline-offset-2 transition duration-500 ease-in-out"
        >
          <div className="px-6">
            <div className="bg-[#ffffff07] rounded-sm w-[55px]  mt-[38px]">
              <i className="">
                <img
                  className="py-2 mx-auto filter brightness-0 invert w-[33px]"
                  src={service.image}
                  alt={service.title}
                />
              </i>
            </div>
          </div>
          <div className="px-6 py-4">
            <h5 className="font-semibold text-xl sm:text-[22px] pt-[32px]">
              {service.title}
            </h5>
            <p className="max-w-[265.3px] text-sm sm:text-base text-[#ffffff99]">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
