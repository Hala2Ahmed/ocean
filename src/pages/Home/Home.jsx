import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import logo from "../../assets/RocketLaunch.svg";
import heroGif from "../../assets/fc35451534249e6850f9fb9dd3edb206.gif";
import aboutImg from "../../assets/about-img.png";
import scroll1 from "../../assets/scroll1.png";
import scroll2 from "../../assets/scroll2.png";
import scroll3 from "../../assets/scroll3.png";
import scroll4 from "../../assets/scroll4.png";
import scroll5 from "../../assets/scroll5.png";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import PortfoliosCard from "../../components/PortfoliosCard/PortfoliosCard";
import HowItWorkCard from "../../components/HowItWorkCard/HowItWorkCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import PreFooter from "../../components/PreFooter/PreFooter";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading/Loading";
import { useHomeData } from "../../CustomHook/HomeSocialLink";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { data, isLoading, isError } = useHomeData();
  console.log(data);
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.innerHTML = ul.innerHTML + ul.innerHTML;
    }
  }, []);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to allow page to render
      }
    }
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
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
  const {
    home_settings = [],
    general_settings = [],
    our_services = [],
    recent_services = [],
    process_steps = [],
    latest_blogs = [],
  } = data?.data || {};

  const formatTextWithColoredLastWord = (text) => {
    if (!text) return null;

    const words = text.split(" ");
    if (words.length === 0) return text;

    const lastWord = words.pop();
    const restOfText = words.join(" ");

    return (
      <>
        {restOfText} <span className="text-secondBlue">{lastWord}</span>
      </>
    );
  };
  return (
    <>
      {/* Hero Section */}
      <div className="text-[#ffffff] bg-primary overflow-hidden pt-[150px]">
        <div className="px-7 md:px-[85px] pb-[69px] lg:pl-[146px] grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
          <div className="order-2 lg:order-1 sm:pt-[65px] xl:pt-[40px] lg:pr-[77px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[67px] xl:text-[76px]  font-semibold leading-[1.1] capitalize">
              {formatTextWithColoredLastWord(
                home_settings.find(
                  (item) => item.key_id === `hero_main_title_${i18n.language}`
                )?.value ||
                  home_settings?.find(
                    (item) => item.key_id === "hero_main_title_en"
                  )?.value
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-[1.6] pt-5 pb-[30px] xl:pb-[20px]">
              {home_settings?.find(
                (item) =>
                  item.key_id === `hero_main_desc_${i18n.language || "en"}`
              )?.value ||
                home_settings?.find(
                  (item) => item.key_id === "hero_main_desc_en"
                )?.value}
            </p>
            <Link
              to="/contact"
              className="w-[249px] max-w-full h-[60px] rounded-[20px] inline-flex items-center justify-center text-center flex-shrink-0 bg-secondBlue text-[18px] font-bold bg-[length:500px] bg-no-repeat bg-[position:0%] [background-image:linear-gradient(30deg,#3400f6_50%,transparent_50%)] transition-all duration-300 ease-in-out text-[#fff] hover:bg-[#0D0D0D] hover:bg-[position:200%] gap-3"
            >
              <i>
                <img src={logo} alt="RocketLaunch" />
              </i>
              {t("heroButton")}
            </Link>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center ">
            <img
              src={heroGif}
              className="w-full max-w-[400px] md:max-w-none spin-slow xl:-mb-[90px] xl:-mt-[50px]"
              alt="Landing Animation"
            />
            <div className="grid grid-cols-3 gap-2 justify-center items-center text-center">
              <div>
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp
                    end={parseInt(
                      general_settings?.find(
                        (item) => item.key_id === "clients_served_count"
                      )?.value
                    )}
                    duration={3}
                  />
                  +
                </h4>
                <span className="max-w-[108.67px]">
                  {
                    general_settings.find(
                      (item) => item.key_id === "clients_served_count"
                    )?.title
                  }
                </span>
              </div>
              <div>
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp
                    end={parseInt(
                      general_settings?.find(
                        (item) => item.key_id === "satisfied_users_count"
                      )?.value
                    )}
                    duration={3}
                  />
                  +
                </h4>
                <span className="max-w-[108.67px]">
                  {
                    general_settings.find(
                      (item) => item.key_id === "satisfied_users_count"
                    )?.title
                  }
                </span>
              </div>
              <div>
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp
                    end={parseInt(
                      general_settings?.find(
                        (item) => item.key_id === "projects_delivered_count"
                      )?.value
                    )}
                    duration={3}
                  />
                  +
                </h4>
                <span className="max-w-[108.67px]">
                  {
                    general_settings.find(
                      (item) => item.key_id === "projects_delivered_count"
                    )?.title
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="bg-secondBackground text-[#ffffff] pt-[75px] pb-[92px] px-7 overflow-hidden"
        id="services"
      >
        {" "}
        <div className="text-center">
          <span
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[#00fcdb]"
          >
            {t("serviceHome")}
          </span>
          <h2
            data-aos="fade-left"
            data-aos-delay="200"
            className="mt-[16px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.11] tracking-[-2px]"
          >
            {t("serviceHomeHeader")}
          </h2>
        </div>
        <ServicesCard services={[...our_services].reverse()} />
      </div>

      {/* About Section */}
      <div className="bg-primary text-[#ffffff] pt-[50px] pb-[104px] px-7 md:px-[113px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex-1 mx-auto">
            <img
              data-aos="fade-up"
              data-aos-delay="200"
              src={aboutImg}
              alt="About Us"
            />
          </div>
          <div className="flex-1 ">
            <span className="text-[#00fcdb] uppercase">{t("about")}</span>
            <h2 className="pt-[23px] pb-[10px] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.11] tracking-[-2px]">
              <span className="text-blue">
                {home_settings
                  .find(
                    (item) =>
                      item.key_id === `home_about_title_${i18n.language}`
                  )
                  ?.value.split(" ")[0] ||
                  home_settings
                    .find((item) => item.key_id === "home_about_title_en")
                    ?.value.split(" ")[0]}
              </span>{" "}
              {home_settings
                .find(
                  (item) => item.key_id === `home_about_title_${i18n.language}`
                )
                ?.value.split(" ")
                .slice(1)
                .join(" ") ||
                home_settings
                  .find((item) => item.key_id === "home_about_title_en")
                  ?.value.split(" ")
                  .slice(1)
                  .join(" ")}
            </h2>
            <p className="text-[#A8ACB7] text-base sm:text-lg md:text-xl">
              {home_settings.find(
                (item) => item.key_id === `home_about_desc_${i18n.language}`
              )?.value ||
                home_settings.find(
                  (item) => item.key_id === "home_about_desc_en"
                )?.value}
            </p>
            <Link to="/about" className="">
              <button className="rounded-[10px] text-[18px] cursor-pointer py-3 px-6 md:py-[19px] md:pr-[38px] md:pb-[20px] md:pl-[47px] mt-[42px] border-2 border-blue shadow-lg bg-blue hover:bg-transparent text-white duration-300 active:scale-[0.98]">
                {t("aboutButton")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-secondBackground text-white pt-[108px] pb-[118px] md:pt-20 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-[#00fcdb] text-sm md:text-base font-medium"
            >
              {t("Portfolio")}
            </span>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            >
              {t("PortfolioHeader")}
            </h2>
            <PortfoliosCard
              data={{ services: recent_services }}
              servicesKey="services"
            />{" "}
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="bg-primary text-[#ffffff] py-[72px] px-7 md:px-[113px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-[#00fcdb] text-sm md:text-base font-medium"
            >
              {t("HowItWorks")}
            </span>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            >
              {t("HowItWorksHeader")}
            </h2>
          </div>
          <HowItWorkCard processSteps={[...process_steps].reverse()} />
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-secondBackground text-[#ffffff] py-[72px] px-7 md:px-[145px] md:pb-[112px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#00fcdb] text-sm md:text-base font-medium uppercase"
            >
              {t("BlogHome")}
            </span>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            >
              {t("BlogHomeHeader")}
            </h2>
          </div>
          <BlogCard latest_blogs={[...latest_blogs].reverse()} />
        </div>
      </div>

      {/* infinite-scroll Section */}
      <div className="relative antialiased overflow-hidden">
        <div className="relative flex flex-col justify-center bg-primary overflow-hidden pt-[49px] pb-[47px]">
          <div className="w-full">
            <div className="text-center">
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul
                  ref={logosRef}
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll whitespace-nowrap"
                >
                  {[scroll1, scroll2, scroll3, scroll4, scroll5].map(
                    (logo, index) => (
                      <li key={index} className="inline-block">
                        <img src={logo} alt="logo" className="h-10 md:h-12" />
                      </li>
                    )
                  )}
                  {/* Duplicate for seamless looping */}
                  {[scroll1, scroll2, scroll3, scroll4, scroll5].map(
                    (logo, index) => (
                      <li key={`dup-${index}`} className="inline-block">
                        <img src={logo} alt="logo" className="h-10 md:h-12" />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-Footer Section */}
      <PreFooter />
    </>
  );
}
