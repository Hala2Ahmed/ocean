import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import TeamCard from "../../components/TeamCard/TeamCard";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-secondBackground text-white overflow-hidden">
      <div className="flex items-center lg:flex-row flex-col lg:pt-[142px] lg:pb-[181px] pt-[36px] pb-[36px] lg:px-[140px] px-[36px] gap-4">
        <div className="relative">
          <img className="w-full" src={about1} alt="" />
          <img
            className={`absolute top-[50%] ${
              i18n.language === "ar" ? "right-[50%]" : "left-[50%]"
            } hidden lg:block`}
            src={about2}
            alt=""
          />
        </div>
        <div className="lg:ps-[115px]">
          <span className="text-[16px] font-semibold leading-[2] tracking-[1.6px] text-left text-[#16fcd2] uppercase">
            {t("aboutpage")}
          </span>
          <h5 className="lg:text-[36px] font-bold leading-[1.5] text-[25px] max-w-[591.7px] pt-[4.7px] lg:pb-[35px] pb-[16px]">
            {t("aboutpageHeader")}
          </h5>
          <p className="text-[16px] font-medium leading-[2] text-white/60 max-w-[634.9px]">
            {t("aboutpageDesc")}
          </p>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[#00fcdb] text-sm md:text-base font-semibold uppercase">
          {t("aboutTeam")}
        </span>
        <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] md:text-5xl font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[69px]">
          {t("aboutTeamHeader")}
        </h2>
      </div>

      <div className="lg:px-[155px] px-[36px] pb-[49px]">
        <TeamCard />
      </div>

      <PreFooter />
    </div>
  );
}
