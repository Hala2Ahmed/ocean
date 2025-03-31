import React from "react";
import PortfoliosCard from "../../components/PortfoliosCard/PortfoliosCard";
import PreFooter from "../../components/PreFooter/PreFooter";
import Portfolios3 from "../../assets/Portfolios3.png";
import Portfolios4 from "../../assets/Portfolios4.png";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="bg-secondBackground lg:pt-[116px] lg:px-[152px] lg:pb-[180px] px-[20px] py-[50px] overflow-hidden">
        <div className="text-center">
          <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
            {t("project")}{" "}
          </span>
          <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] md:text-5xl font-bold leading-tight tracking-tight mx-auto pt-[4px] lg:pb-[81px]">
            {t("projectHeader")}{" "}
          </h2>
        </div>
          <PortfoliosCard 
            customImages={[Portfolios3, Portfolios4]} 
            showAll={true} 
          />
      </div>
      <PreFooter />
    </>
  );
}