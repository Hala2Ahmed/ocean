import React from "react";
// import HowItWork1 from "../../assets/HowItWork1.png";
// import HowItWork2 from "../../assets/HowItWork2.png";
// import HowItWork3 from "../../assets/HowItWork3.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

async function fetchHowItWorkData(lang) {
  try {
    const response = await axios.get("https://dashboard.ocean-it.net/api/how-it-work", {
      headers: { 'lang': lang }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
export default function HowItWork() {
  const { t, i18n } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['howItWorkData', i18n.language],
    queryFn: () => fetchHowItWorkData(i18n.language === 'ar' ? 'ar' : 'en'),
    // staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
// console.log(data);

  if (isLoading) {
    return (
     <Loading />
    );
  }

  if (isError || !data?.data) {
    return <div className="bg-secondBackground text-white overflow-hidden pt-[130px] text-center">Error loading data</div>;
  }
  const getSettingValue = (key) => {
    return data?.data?.how_we_work_settings?.find(item => item.key_id === key)?.value || '';
  };

  const steps = [
    {
      id: 1,
      image:  getSettingValue("how_work_step1_image"),
      title: getSettingValue(`how_work_step1_title_${i18n.language}`),
      description:getSettingValue(`how_work_step1_desc_${i18n.language}`),
      description2:t("howItWorksCard1Desc"),
    },
    {
      id: 2,
      image:  getSettingValue("how_work_step2_image"),
      title: getSettingValue(`how_work_step2_title_${i18n.language}`),
      description: getSettingValue(`how_work_step2_desc_${i18n.language}`),
      description2:t("howItWorksCard2Desc"),
      reverse: true,
    },
    {
      id: 3,
      image:  getSettingValue("how_work_step3_image"),
      title: getSettingValue(`how_work_step3_title_${i18n.language}`),
      description: getSettingValue(`how_work_step3_desc_${i18n.language}`),
      description2:t("howItWorksCard3Desc"),
    },
  ];

  return (
    <div className="bg-secondBackground text-white overflow-hidden pt-[130px]">
      <div className="text-center lg:pt-[116px] pt-[36px] px-[20px]">
        <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
          {t("howItWorks")}
        </span>
        <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] md:text-5xl font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[96px]">
        {getSettingValue(`how_we_work_title_${i18n.language}`)}
        </h2>
      </div>

      <div className="py-16 px-[40px] lg:px-[150px] lg:pb-[281px] pb-[50px]">
        <div className="max-w-7xl mx-auto">
          <div>
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
                    alt="How It Works"
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
                  </p>
                  <p className="whitespace-pre-line text-[16px] font-medium leading-[2] text-white/40 pt-[34px]">
                    {step.description2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
