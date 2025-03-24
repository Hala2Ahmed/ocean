import React from "react";
import graphicIcon from "../../assets/paint-brush.svg";
import codeIcon from "../../assets/code.svg";
import motionIcon from "../../assets/video-camera.svg";
import architectureIcon from "../../assets/swatches.svg";
import applicationIcon from "../../assets/Group 97.svg";
import digitalIcon from "../../assets/Vector.svg";

export default function ServicesCard() {
  const services = [
    {
      imgSrc: graphicIcon,
      title: "Graphic Design",
      description:
        "We specialize in creating impactful social media designs and unique branding to elevate your presence.",
    },
    {
      imgSrc: codeIcon,
      title: "Website",
      description:
        "We build dynamic, custom websites with the latest technologies to ensure high performance.",
    },
    {
      imgSrc: applicationIcon,
      title: "Applications",
      description:
        "We develop effective, seamless applications, delivering the project fully ready for immediate deployment.",
    },
    {
      imgSrc: motionIcon,
      title: "Motion Graphics",
      description:
        "We create captivating motion graphics that bring your ideas to life with creativity.",
    },
    {
      imgSrc: digitalIcon,
      title: "Digital Marketing",
      description:
        "We provide effective digital marketing strategies to enhance your reach and achieve goals.",
    },
    {
      imgSrc: architectureIcon,
      title: "Architecture",
      description:
        "We deliver meticulous architectural designs, providing blueprints and resources to ensure professional execution.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 gap-5 px-4 md:px-[144px] md:pt-[120px]">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-[5px] overflow-hidden shadow-lg bg-[#ffffff0c] hover:bg-primary hover:outline hover:outline-[#00fcdb] hover:outline-offset-2 transition duration-500 ease-in-out"
        >
          <div className="px-6">
            <div className="bg-[#ffffff07] rounded-sm w-[55px]  mt-[38px]">
              <i className="">
                <img
                  className="py-2 mx-auto"
                  src={service.imgSrc}
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