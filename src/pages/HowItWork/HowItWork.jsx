import React from "react";
import HowItWork1 from "../../assets/HowItWork1.png";
import HowItWork2 from "../../assets/HowItWork2.png";
import HowItWork3 from "../../assets/HowItWork3.png";
import { useTranslation } from "react-i18next";
export default function HowItWork() {
  const { t, i18n } = useTranslation();

  const steps = [
    {
      id: 1,
      image: HowItWork1,
      title: t("howItWorksCard1Title"),
      description: t("howItWorksCard1Desc"),
    },
    {
      id: 2,
      image: HowItWork2,
      title: t("howItWorksCard2Title"),
      description: t("howItWorksCard2Desc"),
      reverse: true,
    },
    {
      id: 3,
      image: HowItWork3,
      title: t("howItWorksCard3Title"),
      description: t("howItWorksCard3Desc"),
    },
  ];

  return (
    <div className="bg-secondBackground text-white overflow-hidden pt-[130px]">
      <div className="text-center lg:pt-[116px] pt-[36px] px-[20px]">
        <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
          {t("howItWorks")}
        </span>
        <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] md:text-5xl font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[96px]">
          {t("howItWorksHeader")}
        </h2>
      </div>

      <div className="py-16 px-[40px] lg:px-[150px] lg:pb-[281px] pb-[50px]">
        <div className="max-w-7xl mx-auto">
          <div className="">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col ${
                  step.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 items-center lg:pb-[120px] pb-[50px]`}
              >
                <div className="md:w-1/2">
                  <img
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>

                <div className="md:w-1/2">
                  <span className="pb-[4px] font-semibold mb-4 text-[#16fcd2] leading-[2] tracking-[1.6px]">
                    {t("howItWorksStep")} {step.id.toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-[30px] font-bold leading-[1.6]">
                    {step.title}
                  </h3>
                  <p className="whitespace-pre-line text-[16px] font-medium leading-[2] text-white/40 pt-[34px]">
                    {step.description}
                  </p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
