import React from "react";
import TeamCard from "../../components/TeamCard/TeamCard";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

async function fetchAboutData(lang) {
  try {
    const response = await axios.get("https://dashboard.ocean-it.net/api/about", {
      headers: { 'lang': lang }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
export default function About() {
  const { t, i18n } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['aboutData', i18n.language],
    queryFn: () => fetchAboutData(i18n.language === 'ar' ? 'ar' : 'en'),
    // staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
// console.log(data);

  if (isLoading) {
    return (
     <Loading />
    );
  }

  if (isError || !data?.data) {
    return <div className="text-white overflow-hidden pt-[130px] text-center flex flex-row gap-2 h-screen justify-center items-center bg-secondBackground">
    Error loading data
  </div>;
  }

  const { about_settings, members } = data.data;
  const sortedMembers = [...members].sort((a, b) => a.id - b.id);

  const getSetting = (key) => {
    const setting = about_settings.find(item => item.key_id === key);
    return setting ? setting.value : '';
  };

  return (
    <>
     <title>{t("navbarlink4")}</title>
     <meta name="description" content={t("aboutDesc")} />
    <div className="bg-secondBackground text-white overflow-hidden sm:pt-[130px]">
      <div className="flex items-center max-w-screen-xl mx-auto lg:flex-row flex-col lg:pt-[142px] lg:pb-[181px] pt-[36px] pb-[36px] lg:px-[140px] px-[36px] gap-4">
        <div className="relative">
          <img className="w-[378.11px]" src={getSetting('about_page_image_1')} alt="About" />
          <img
            className={`absolute top-[50%] w-[256.74px] ${
              i18n.language === "ar" ? "right-[50%]" : "left-[50%]"
            } hidden lg:block`}
            src={getSetting('about_page_image_2')}
            alt="About"
          />
        </div>
        <div className="lg:ps-[115px]">
          <span className="text-[16px] font-semibold leading-[2] tracking-[1.6px] text-left text-[#16fcd2] uppercase">
            {t("aboutpage")}
          </span>
          <h5 className="lg:text-[36px] font-bold leading-[1.5] text-[25px] max-w-[591.7px] pt-[4.7px] lg:pb-[35px] pb-[16px]">
          {getSetting(`about_page_title_${i18n.language}`) ||getSetting("about_page_title_en")}
          </h5>
          <p className="text-[16px] font-medium leading-[2] text-white/60 max-w-[634.9px]">
          {getSetting(`about_page_desc_${i18n.language}`) || getSetting("about_page_desc_en")}
          </p>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[#00fcdb] text-sm md:text-base font-semibold uppercase">
          {t("aboutTeam")}
        </span>
        <h2 className="text-white lg:text-[36px] max-w-[507px] text-[30px] px-[36px] font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[69px]">
        {getSetting(`about_team_title_${i18n.language}`) || getSetting("about_team_title_en")}
        </h2>
      </div>

      <div className="px-7 pb-[49px] max-w-screen-xl mx-auto ">
        <TeamCard members={sortedMembers} />
      </div>

      <PreFooter />
    </div>
    </>
  );
}