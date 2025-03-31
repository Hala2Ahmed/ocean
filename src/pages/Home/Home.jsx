import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import logo from "../../assets/RocketLaunch.svg";
import watsaapicon from "../../assets/Watsaap.svg";
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

export default function Home() {

  const { t, i18n } = useTranslation();


  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.innerHTML = ul.innerHTML + ul.innerHTML;
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="text-[#ffffff] bg-primary overflow-hidden">
        <div className="px-7 md:px-[85px] pb-[69px] lg:pl-[146px] grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
          <div className="order-2 lg:order-1 pt-[65px] lg:pr-[77px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-semibold leading-[1.1] capitalize">
            {t("hero")}
              <span className="text-secondBlue"> {t("heroSpan")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-[1.6] pt-5 pb-[30px]">
            {t("heroDesc")}
            </p>
            <button className="rounded-[20px] bg-secondBlue flex items-center gap-3 py-3 px-6 md:py-[20px] md:px-[50px]">
              <i>
                <img src={logo} alt="RocketLaunch" />
              </i>
              <Link to="/contact">{t("heroButton")}</Link>
            </button>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center md:justify-end ">
            <img
              src={heroGif}
              className="w-full max-w-[400px] md:max-w-none spin-slow"
              alt="Landing Animation"
            />
            <div className="grid grid-cols-3 gap-5 pt-[50px] md:pt-0 text-center">
              <div>
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp end={300} duration={3} />+
                </h4>
                <span className="max-w-[108.7px]">{t("heroSpan1")}</span>
              </div>
              <div className="lg:px-[30px]">
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp end={200} duration={3} />+
                </h4>
                <span>{t("heroSpan2")}</span>
              </div>
              <div>
                <h4 className="text-secondBlue font-bold text-[28px] font-secondaryFont">
                  <CountUp end={240} duration={3} />+
                </h4>
                <span>{t("heroSpan3")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-secondBackground text-[#ffffff] pt-[75px] pb-[92px] px-7 overflow-hidden">
          <div className="text-center">
            <span className="text-[#00fcdb]">{t("serviceHome")}</span>
            <h2 className="mt-[16px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.11] tracking-[-2px]">
              {t("serviceHomeHeader")}
            </h2>
          </div>
        <ServicesCard />
      </div>

      {/* About Section */}
      <div className="bg-primary text-[#ffffff] pt-[50px] pb-[104px] px-7 md:px-[113px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="flex-1 mx-auto">
            <img src={aboutImg} alt="About Us" />
          </div>
          <div className="flex-1 ">
            <span className="text-[#00fcdb] uppercase">{t("about")}</span>
            <h2 className="pt-[23px] pb-[10px] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.11] tracking-[-2px]">
              <span className="text-blue">{t("aboutHeaderSpan")}</span> {t("aboutHeader")}
            </h2>
            <p className="text-[#A8ACB7] text-base sm:text-lg md:text-xl">
              {t("aboutDesc")}
            </p>
            <button className="rounded-[10px] bg-secondBlue py-3 px-6 md:py-[19px] md:pr-[38px] md:pb-[20px] md:pl-[47px] mt-[42px]">
              <Link to="/about">{t("aboutButton")}</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-secondBackground text-white pt-[108px] pb-[118px] md:pt-20 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-[#00fcdb] text-sm md:text-base font-medium">
              {t("Portfolio")}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              {t("PortfolioHeader")}
            </h2>
            <PortfoliosCard />
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="bg-primary text-[#ffffff] py-[72px] px-7 md:px-[113px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-[#00fcdb] text-sm md:text-base font-medium">
              {t("HowItWorks")}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              {t("HowItWorksHeader")}
            </h2>
          </div>
          <HowItWorkCard />
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-secondBackground text-[#ffffff] py-[72px] px-7 md:px-[145px] md:pb-[112px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-[#00fcdb] text-sm md:text-base font-medium uppercase">
              {t("BlogHome")}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              {t("BlogHomeHeader")}
            </h2>
          </div>
          <BlogCard />
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
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                  <li>
                    <img src={scroll1} alt="logo" />
                  </li>
                  <li>
                    <img src={scroll2} alt="logo" />
                  </li>
                  <li>
                    <img src={scroll3} alt="logo" />
                  </li>
                  <li>
                    <img src={scroll4} alt="logo" />
                  </li>
                  <li>
                    <img src={scroll5} alt="logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-Footer Section */}
      <PreFooter />

      {/* Contact WhatsApp */}
      <div className="fixed bottom-7 right-8 z-50">
      <Link to="#">
        <img 
          src={watsaapicon} 
          alt="WhatsApp Icon" 
          className="w-16 hover:scale-110 transition-all duration-200" 
        />
      </Link>
    </div>
    </>
  );
}
