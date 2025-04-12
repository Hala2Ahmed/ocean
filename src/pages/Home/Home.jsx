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
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  const { t, i18n } = useTranslation();


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
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to allow page to render
      }
    }
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="text-[#ffffff] bg-primary overflow-hidden pt-[150px]">
        <div className="px-7 md:px-[85px] pb-[69px] lg:pl-[146px] grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
          <div className="order-2 lg:order-1 sm:pt-[65px] xl:pt-[40px] lg:pr-[77px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[67px] xl:text-[76px]  font-semibold leading-[1.1] capitalize">
            {t("hero")}
              <span className="text-secondBlue"> {t("heroSpan")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-[1.6] pt-5 pb-[30px] xl:pb-[20px]">
            {t("heroDesc")}
            </p>
            <button to="/contact" className="rounded-[20px] bg-secondBlue flex items-center gap-3 py-3 px-6 md:py-[20px] md:px-[50px]">
              <i>
                <img src={logo} alt="RocketLaunch" />
              </i>
              <Link to="/contact">{t("heroButton")}</Link>
            </button>
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
                  <CountUp end={300} duration={3} />+
                </h4>
                <span>{t("heroSpan1")}</span>
              </div>
              <div>
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
      <div className="bg-secondBackground text-[#ffffff] pt-[75px] pb-[92px] px-7 overflow-hidden" id="services">          <div className="text-center">
            <span data-aos="fade-left" data-aos-delay="200" className="text-[#00fcdb]">{t("serviceHome")}</span>
            <h2 data-aos="fade-left" data-aos-delay="200" className="mt-[16px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.11] tracking-[-2px]">
              {t("serviceHomeHeader")}
            </h2>
          </div>
        <ServicesCard />
      </div>

      {/* About Section */}
      <div className="bg-primary text-[#ffffff] pt-[50px] pb-[104px] px-7 md:px-[113px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex-1 mx-auto">
            <img data-aos="fade-up" data-aos-delay="200" src={aboutImg} alt="About Us" />
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
            <span data-aos="fade-left" data-aos-delay="200" className="text-[#00fcdb] text-sm md:text-base font-medium">
              {t("Portfolio")}
            </span>
            <h2 data-aos="fade-left" data-aos-delay="200" className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
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
            <span data-aos="fade-left" data-aos-delay="200" className="text-[#00fcdb] text-sm md:text-base font-medium">
              {t("HowItWorks")}
            </span>
            <h2 data-aos="fade-left" data-aos-delay="200" className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
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
            <span data-aos="fade-up" data-aos-delay="200" className="text-[#00fcdb] text-sm md:text-base font-medium uppercase">
              {t("BlogHome")}
            </span>
            <h2 data-aos="fade-up" data-aos-delay="200" className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
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
      <a href="#" target="_blank" rel="noreferrer noopener" className="fixed  bottom-6 right-8 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]">
  <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping" style={{animation: "ping-small 2s infinite"}} />
  <div className="relative z-20">
    <svg fill="#fff" width={24} height={24} viewBox="0 0 308 308">
      <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" /> 
      <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
    </svg>
  </div>
</a>
    </>
  );
}
