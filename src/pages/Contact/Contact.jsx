import React from "react";
import contact from "../../assets/contactImg.png";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-secondBackground text-white overflow-hidden">
      <div className="text-center lg:pt-[116px] pt-[36px]">
        <span className="text-[51px] font-semibold leading-[1.1]">
          {t("contact")}
        </span>
        <h2 className="text-[22px] font-semibold leading-[1.4] max-w-[787px] mx-auto px-[20px] pt-[23px] pb-[44px] lg:pb-[96px]">
          {t("contactHeader")}{" "}
          <span className="text-secondBlue">{t("contactHeaderSpan")}</span>{" "}
          {t("contactHeader1")}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-[50px] md:px-8 lg:pr-[100px] lg:pb-[310px] pb-[50px]">
        <div className="w-full lg:w-auto px-0 lg:px-[40px]">
          <h5 className="max-w-full lg:max-w-[581px] text-[24px] md:text-[30px] font-semibold tracking-[-0.6px]">
            {t("contactHeaderForm")}
          </h5>
          <p className="max-w-full lg:max-w-[608px] opacity-80 text-[13px] pt-[7px] pb-[20px] md:pb-[41px] font-medium leading-[1.6] tracking-[0.26px] text-white/80">
            {t("contactDescForm")}
          </p>
          <form className="w-full">
            <div className="flex flex-col md:flex-row gap-[14px]">
              <input
                className="w-full p-[12px_14px] rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
                placeholder={t("FirstName")}
                type="text"
              />
              <input
                className="w-full p-[12px_14px] rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
                placeholder={t("LastName")}
                type="text"
              />
            </div>
            <input
              className="p-[12px_14px] my-[14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
              placeholder={t("Email")}
              type="email"
            />
            <input
              className={`p-[12px_14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              placeholder={t("PhoneNumber")}
              type="tel"
            />
            <textarea
              rows="4"
              className="resize-none p-[12px_14px] my-[14px] w-full rounded-[30px] border border-white/20 bg-white/5 outline-0 placeholder:text-[15px] placeholder:tracking-[-0.15px] placeholder:text-white/60"
              placeholder={t("Message")}
            />
            <button
              type="submit"
              className="w-full rounded-[40px] bg-secondBlue py-[12px] text-[15px] font-medium tracking-[-0.15px] text-white hover:bg-secondBlue/90 transition-colors"
            >
              {t("submitForm")}
            </button>
          </form>
        </div>
        <div className="w-full lg:w-auto mt-8 lg:mt-0">
          <img
            className="w-full max-w-[500px] lg:max-w-none mx-auto"
            src={contact}
            alt="space"
          />
        </div>
      </div>
    </div>
  );
}
