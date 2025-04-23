import React from "react";
import Portfolios1 from "../../assets/Portfolios1.png";
import Portfolios2 from "../../assets/Portfolios2.png";
import Portfolios3 from "../../assets/Portfolios3.png";
import Portfolios4 from "../../assets/Portfolios4.png";
import Portfolios5 from "../../assets/Portfolios6.png";
import { useTranslation } from "react-i18next";

const PortfolioCard = ({ image }) => {
  return (
    <div>
      <div className="flex rounded-lg flex-col">
        <img src={image} alt="Portfolio" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default function PortfoliosCard({ customImages = [], showAll = false }) {
  const { t, i18n } = useTranslation();
  const defaultImages = [
    Portfolios1,
    Portfolios2,
    Portfolios3,
    Portfolios4,
    Portfolios3,
    Portfolios5,
  ];

  const portfolioImages =
    customImages.length > 0
      ? [...defaultImages, ...customImages]
      : defaultImages;

  const imagesToShow = showAll ? portfolioImages : portfolioImages.slice(0, 6);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 py-2 pb-[76px] pt-[44px] rounded-sm flex flex-wrap justify-center gap-2 md:gap-4 text-white cursor-pointer text-sm md:text-lg font-semibold">
        <div className=" border-b-2 border-blue text-blue hover:border-blue hover:text-blue hover:border-b-2">
          {t("projectTab1")}
        </div>
        <div className="px-2 hover:border-b-2 hover:border-blue hover:text-blue transition-all duration-300">
          {t("projectTab2")}
        </div>
        <div className="px-2 hover:border-b-2 hover:border-blue hover:text-blue transition-all duration-300">
          {t("projectTab3")}
        </div>
        <div className="px-2 hover:border-b-2 hover:border-blue hover:text-blue transition-all duration-300">
          {t("projectTab4")}
        </div>
        <div className="px-2 hover:border-b-2 hover:border-blue hover:text-blue transition-all duration-300">
          {t("projectTab5")}
        </div>
      </div>

      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {imagesToShow.map((image, index) => (
            <PortfolioCard key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
