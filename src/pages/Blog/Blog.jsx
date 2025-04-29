import React from "react";
import blogIcon from "../../assets/blogIcon.svg";
import { Link, useParams } from "react-router-dom";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";


async function fetchBlogDetailsData(lang, id) {
  try {
    const response = await axios.get(
      `https://dashboard.ocean-it.net/api/blog-details/${id}`,
      {
        headers: { lang: lang },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default function BlogDetails() {
  const { t, i18n } = useTranslation();
  const { id } = useParams(); 
  // const { blogData, relatedBlogs, isLoading, isError, error } = useBlogDetails(id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogDetailsData", i18n.language, id],
    queryFn: () => fetchBlogDetailsData(i18n.language === "ar" ? "ar" : "en", id),
  });
console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-white overflow-hidden pt-[130px] text-center flex flex-row gap-2 h-screen justify-center items-center bg-secondBackground">
        Error loading data
      </div>
    );
  }

  const blogData = data.data.blog;
  const relatedBlogs = data.data.related_blogs;

  return (
    <div className=" bg-secondBackground text-[#ffffff] overflow-hidden pt-[150px]">
      <img src={blogData.image} className="w-full p-[10px_0_64px]" alt="blog" />

      <div className="lg:p-[0_231px_163px_144px] p-[0_50px_64px_50px]">
        <h2 className="md:text-[51px] text-4xl font-semibold">
          {blogData.title}
        </h2>
        <span className="text-[22px] leading-[1.6] text-left text-[#858584]">
          {blogData.date}
        </span>
        <h5 className="font-secondaryFont text-[22px] font-bold leading-[1.6] text-[#858584] pt-[30px]">
          {t("blogHeader")} <span>{blogData.by}</span>
        </h5>
        <div className="py-[30px]">
          <p className="text-[22px] font-normal leading-[1.6]">
            {t("blogDesc")}
          </p>
          <p className="text-[22px] font-normal leading-[1.6] max-w-[1050px]">
            {blogData.description}
          </p>
          <p className="text-[22px] font-normal leading-[1.6] max-w-[1050px]">
            {blogData.content}
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
        {blogData.tags && blogData.tags.length > 0 && (
          <>
            <h5 className="text-[22px] font-semibold leading-[1.4] text-[#858584] font-secondaryFont pb-[20px]">
              {t("blogTag")}
            </h5>
            <ul className="flex flex-wrap gap-3 md:gap-5 uppercase font-semibold">
              {blogData.tags.map((tag) => (
                <li
                  key={tag.id}
                  className="rounded-[20px] bg-[#3b3b3b] py-2 md:py-[12px] px-4 md:px-[30px] text-sm md:text-base"
                >
                  <Link to="#">{tag.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {relatedBlogs && relatedBlogs.length > 0 && (
        <div className="px-[50px] lg:px-[125px] py-0 m-0 pb-[85px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {relatedBlogs.map((blog) => (
              <Link to={`/blog-details/${blog.id}`} key={blog.id}>
                <div className="rounded-[10px] flex flex-col bg-primary">
                  <img
                    src={blog.image}
                    className="w-full mb-[74px] rounded-t-[10px]"
                    alt={blog.title}
                  />
                  <div>
                    <div className="mb-[37px] ms-[28px]">
                      <p className="text-[24px] font-semibold leading-[1.25] tracking-[-1px]">
                        {blog.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <PreFooter />
    </div>
  );
}