import React from "react";
import PortfoliosCard from "../../components/PortfoliosCard/PortfoliosCard";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
async function fetchProjectsData(lang) {
  try {
    const response = await axios.get(
      "https://dashboard.ocean-it.net/api/projects",
      {
        headers: { lang: lang },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
export default function Projects() {
  const { t, i18n } = useTranslation();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projectData", i18n.language],
    queryFn: () => fetchProjectsData(i18n.language === "ar" ? "ar" : "en"),
    // staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
  // console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data?.data) {
    return (
      <div className="text-white overflow-hidden pt-[130px] text-center flex flex-row gap-2 h-screen justify-center items-center bg-secondBackground">
        Error loading data
      </div>
    );
  }
  const projectsData = data.data.projects_settings;
  // const worksToShow = activeCategoryData?.works || [];
  return (
    <>
      <div className="bg-secondBackground lg:pt-[250px] pt-[200px] lg:px-[152px] lg:pb-[180px] px-[20px] pb-[50px] overflow-hidden">
        <div className="text-center">
          <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
            {t("project")}{" "}
          </span>
          <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] font-bold leading-tight tracking-tight mx-auto pt-[4px] lg:pb-[81px]">
            {
              projectsData.find(
                (item) =>
                  item.key_id === `projects_intro_title_${i18n.language}`
              )?.value || projectsData.find(
                (item) =>
                  item.key_id === "projects_intro_title_en"
              )?.value
            }
          </h2>
        </div>
        <PortfoliosCard data={data?.data} servicesKey="services" />
      </div>
      <PreFooter />
    </>
  );
}
