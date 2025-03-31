import React from "react";
import blog from "../../assets/blog1.png";
import blogIcon from "../../assets/blogIcon.svg";
import { Link } from "react-router-dom";
import PreFooter from "../../components/PreFooter/PreFooter";
import blog1 from "../../assets/blog-img1.png";
import blog2 from "../../assets/blog-img2.png";
import blog3 from "../../assets/blog-img3.png";
import { useTranslation } from "react-i18next";
export default function Blog() {
  const { t, i18n } = useTranslation();
  return (
    <div className=" bg-secondBackground text-[#ffffff] overflow-hidden">
      <img src={blog} className="object-contain p-[10px_0_64px]" alt="" />

      <div className="lg:p-[0_231px_163px_144px] p-[0_50px_64px_50px]">
        <h2 className="md:text-[51px] text-4xl font-semibold">{t("blog")}</h2>
        <span className="text-[22px] leading-[1.6] text-left text-[#858584]">
          {t("blogDate")}
        </span>
        <h5 className="font-secondaryFont text-[22px] font-bold leading-[1.6] text-[#858584] pt-[30px]">
          {t("blogHeader")}
        </h5>
        <div className="py-[30px]">
        <p className="text-[22px] font-normal leading-[1.6]">
          {t("blogDesc")}
        </p>
        <p className="text-[22px] font-normal leading-[1.6] max-w-[1050px]">
        {t("blogDesc1")}
        </p>
        <p className="text-[22px] font-normal leading-[1.6] max-w-[1050px]">
        {t("blogDesc2")}
        </p>
        </div>
        <h5 className="text-[22px] font-bold leading-[1.6] text-[#858584] font-secondaryFont">
          {t("blogDetails")}
        </h5>
        <div className="pb-[30px]">
          <div className="flex items-center gap-[10px] py-[10px]">
            <i>
              <img src={blogIcon} alt="icon" />
            </i>
            <p className="text-[22px] leading-[1.6]">{t("blogDetails1")}</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <i>
              <img src={blogIcon} alt="icon" />
            </i>
            <p className="text-[22px] leading-[1.6]">{t("blogDetails2")}</p>
          </div>
        </div>
        <h5 className="text-[22px] font-semibold leading-[1.4] text-[#858584] font-secondaryFont pb-[20px]">
          {t("blogTag")}
        </h5>
        <ul className="flex flex-wrap gap-3 md:gap-5 uppercase font-semibold">
          <li className="rounded-[20px] bg-[#3b3b3b] py-2 md:py-[12px] px-4 md:px-[30px] text-sm md:text-base">
            <Link to="#">{t("blogTag1")}</Link>
          </li>
          <li className="rounded-[20px] bg-[#3b3b3b] py-2 md:py-[12px] px-4 md:px-[30px] text-sm md:text-base">
            <Link to="#">{t("blogTag2")}</Link>
          </li>
          <li className="rounded-[20px] bg-[#3b3b3b] py-2 md:py-[12px] px-4 md:px-[30px] text-sm md:text-base">
            <Link to="#">{t("blogTag3")}</Link>
          </li>
          <li className="rounded-[20px] bg-[#3b3b3b] py-2 md:py-[12px] px-4 md:px-[30px] text-sm md:text-base">
            <Link to="#">{t("blogTag4")}</Link>
          </li>
        </ul>
      </div>

      <div className="px-[50px] lg:px-[125px] py-0 m-0 pb-[85px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {[1, 2]
            .flatMap(() => [
              {
                image: blog1,
                title: t("blogCard1"),
              },
              {
                image: blog2,
                title: t("blogCard2"),
              },
              {
                image: blog3,
                title: t("blogCard3"),
              },
            ])
            .map((card, index) => (
              <div
                key={index}
                className="rounded-[10px] flex flex-col bg-primary "
              >
                <img
                  src={card.image}
                  className="w-full mb-[74px] rounded-t-[10px]"
                  alt={card.title}
                />
                <div>
                  <div className="mb-[37px] ms-[28px]">
                    <p className=" text-[24px] font-semibold leading-[1.25] tracking-[-1px]">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <PreFooter />
    </div>
  );
}
