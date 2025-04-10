import React from "react";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import serviceIcon from "../../assets/serviceIcon.svg";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Service() {
    const { t, i18n } = useTranslation();
  
  const cards = [
    {
      image: service1,
      head: t("serviceHeaderCard1"),
      description:
        t("servicedescCard1"),
      date: t("serviceDateCard1"),
    },
    {
      image: service2,
      head: t("serviceHeaderCard2"),
      description: t("servicedescCard2"),
      date: t("serviceDateCard2"),
    },
    {
      image: service3,
      head: t("serviceHeaderCard3"),
      description:
        t("servicedescCard3"),
      date: t("serviceDateCard3"),
    },
    {
      image: service4,
      head: t("serviceHeaderCard4"),
      description: t("servicedescCard4"),
      date: t("serviceDateCard4"),
    },
    {
      image: service5,
      head: t("serviceHeaderCard5"),
      description: t("servicedescCard5"),
      date: t("serviceDateCard5"),
    },
    {
      image: service6,
      head: t("serviceHeaderCard6"),
      description: t("servicedescCard6"),
      date: t("serviceDateCard6"),
    },
  ];

  return (
    <>
      <div className="bg-secondBackground text-[#ffffff] overflow-hidden pt-[130px]">
        <div className="text-center lg:pt-[116px] pt-[36px]">
          <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
            {t("service")}
          </span>
          <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] md:text-5xl font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[96px]">
            {t("serviceHeader")}
          </h2>
        </div>

        <div className="lg:px-[148px] px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-[10px] flex flex-col bg-[#0d0d0d]"
              >
              <Link to="/blogDetails">
              <img
                  src={card.image}
                  className="w-full rounded-[5px]"
                  alt={card.head}
                />
                <div>
                  <div className="pt-[33px]">
                    <h3 className="text-[20px] font-bold leading-[1.7]">
                      {card.head}
                    </h3>
                    <p className="m-[18.2px_0_30.4px] leading-[1.89] text-[#ffffff99] text-[18px] font-medium">
                      {card.description}
                    </p>
                    <div className="flex gap-3 items-center mb-[38.6px]">
                      <i>
                        <img
                          className="w-full"
                          src={serviceIcon}
                          alt="serviceIcon"
                        />
                      </i>
                      <span className="text-[#a8acb7] text-[12px] leading-[2]">
                        {card.date}
                      </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[99.5px] pb-[51px] w-full ">
            <button className="font-semibold bg-[#ffffff19] p-[15px_75.4px_20.2px_55px]">
              {t("serviceButton")}
            </button>
          </div>{" "}
        </div>
      </div>
      <PreFooter />
    </>
  );
}
