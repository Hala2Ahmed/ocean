import React from "react";
import HowItWorkIcon1 from "../../assets/Vector.svg";
import HowItWorkIcon3 from "../../assets/vector1.svg";
import HowItWorkIcon2 from "../../assets/vector2.svg";

export default function HowItWorkCard() {
  const process = [
    {
      imgSrc: HowItWorkIcon1,
      title: "Discovery",
      description:
        "We thoroughly analyze your business goals, audience, and challenges to gain insights and create a tailored strategy that aligns with your vision.",
    },
    {
      imgSrc: HowItWorkIcon2,
      title: "Plan",
      description:
        "We develop a strategic roadmap based on our insights, outlining clear objectives, actionable steps, and timelines to achieve your goals effectively.",
    },
    {
      imgSrc: HowItWorkIcon3,
      title: "Execute",
      description:
        "We implement the strategy with precision, managing each detail to ensure smooth execution and achieve the desired results.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-5 md:pt-[84px]">
      {process.map((process, index) => (
        <div
          key={index}
          className="how-it-work-card rounded-[5px] overflow-hidden group hover:outline hover:outline-[#00fcdb] hover:outline-offset-2 transition duration-500 ease-in-out"
        >
          <div className="px-6">
            <div className="bg-blue rounded-[15px] w-[55px] mt-[38px] group-hover:bg-[#00fcdb] transition duration-500 ease-in-out ">
              <i className="text-white">
                <img
                  className="py-2 mx-auto how-it-work-icon transition duration-500 ease-in-out"
                  src={process.imgSrc}
                  alt={process.title}
                />
              </i>
            </div>
          </div>
          <div className="px-6 pb-4">
            <h5 className="font-semibold text-xl sm:text-[22px] pt-[23px] pb-3 md:pb-[55px]">
              {process.title}
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
