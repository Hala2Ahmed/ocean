import React from "react";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import serviceIcon from "../../assets/serviceIcon.svg";

async function fetchBlogData(lang, page = 1, size = 6, tagTitle = null) {
  try {
    const params = {
      page,
      size,
    };
    
    if (tagTitle) {
      params.tag_title = tagTitle;
    }
    
    const response = await axios.get("https://dashboard.ocean-it.net/api/blogs", {
      headers: { 'lang': lang },
      params
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export default function Blogs() {
  const { t, i18n } = useTranslation();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogData', i18n.language],
    queryFn: () => fetchBlogData(i18n.language === 'ar' ? 'ar' : 'en'),
  });

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

  const blogData = data.data?.blog_settings;
  const relatedBlogs = [...(data.data?.blogs || [])].reverse();
  return (
    <>
     <title>{t("navbarlink6")}</title>
     <meta name="description" content={t("aboutDesc")} />
      <div className="bg-secondBackground text-[#ffffff] overflow-hidden pt-[130px]">
        <div className="text-center lg:pt-[116px] pt-[36px]">
          <span className="text-[#00fcdb] text-sm md:text-base font-semibold">
            {t("service")}
          </span>
          <h2 className="text-white lg:text-[36px] max-w-[507px] text-[25px] font-bold leading-tight tracking-tight mx-auto pt-[4px] pb-[44px] lg:pb-[96px]">
            {blogData.find(item => item.key_id === `blog_intro_title_${i18n.language}`)?.value || blogData.find(item => item.key_id === "blog_intro_title_en")?.value}
          </h2>
        </div>

        <div className="lg:px-[148px] px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {relatedBlogs.map((card, index) => (
              <div
                key={index}
                className="rounded-[10px] flex flex-col bg-[#0d0d0d]"
              >
                <Link to={`/blog-details/${card.id}`}>
                  <img
                    src={card.image}
                    className="w-full rounded-[5px]"
                    alt="blog"
                  />
                  <div>
                    <div className="pt-[33px]">
                      <h3 className="text-[20px] font-bold leading-[1.7]">
                        {card.title}
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
          <div className="flex justify-center mt-[99.5px] pb-[51px] w-full">
            <button className="font-semibold bg-[#ffffff19] p-[15px_75.4px_20.2px_55px] cursor-pointer">
              {t("serviceButton")}
            </button>
          </div>
        </div>
      </div>
      <PreFooter />
    </>
  );
}